import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import React from 'npm:react@18.3.1'
import { renderAsync } from 'npm:@react-email/components@0.0.22'
import { WelcomeEmail } from './_templates/welcome.tsx'

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, subject, html } = await req.json();

    if (subject.includes("Welcome to EasyMy Learning")) {
      // For welcome emails, use our template
      const username = to.split('@')[0];
      const loginUrl = `${Deno.env.get("SUPABASE_URL") || ''}/auth/v1/verify`;
      
      const emailHtml = await renderAsync(
        React.createElement(WelcomeEmail, {
          username,
          loginUrl,
        })
      );

      const emailResponse = await resend.emails.send({
        from: "EasyMy Learning <onboarding@resend.dev>",
        to: [to],
        subject: "Welcome to EasyMy Learning! 🎉",
        html: emailHtml,
      });

      console.log("Welcome email sent successfully:", emailResponse);

      return new Response(JSON.stringify(emailResponse), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    }

    // For other emails, use the provided HTML
    const emailResponse = await resend.emails.send({
      from: "EasyMy Learning <onboarding@resend.dev>",
      to: [to],
      subject,
      html,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});