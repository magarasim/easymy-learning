import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import * as React from 'npm:react@18.3.1'

interface WelcomeEmailProps {
  username: string;
  loginUrl: string;
}

export const WelcomeEmail = ({
  username,
  loginUrl,
}: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to EasyMy Learning!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logo}>
          <img
            src="https://xkchltjkyrzftrdomvfe.supabase.co/storage/v1/object/public/assets/logo.png"
            alt="EasyMy Learning Logo"
            width="120"
            height="120"
          />
        </Section>
        <Heading style={h1}>Welcome to EasyMy Learning!</Heading>
        <Text style={text}>Dear {username},</Text>
        <Text style={text}>
          Thank you for joining EasyMy Learning! We're excited to have you on board.
          Get ready to embark on an exciting learning journey with us.
        </Text>
        <Section style={buttonContainer}>
          <Button
            href={loginUrl}
            style={button}
          >
            Start Learning Now
          </Button>
        </Section>
        <Text style={text}>
          Here's what you can expect:
        </Text>
        <ul style={list}>
          <li style={listItem}>Access to premium courses</li>
          <li style={listItem}>Expert instructors</li>
          <li style={listItem}>Interactive learning materials</li>
          <li style={listItem}>Community support</li>
        </ul>
        <Text style={text}>
          If you have any questions, feel free to reach out to our support team.
        </Text>
        <Text style={footer}>
          Best regards,<br />
          The EasyMy Learning Team
        </Text>
      </Container>
    </Body>
  </Html>
)

export default WelcomeEmail

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}

const logo = {
  margin: '0 auto',
  marginBottom: '24px',
  textAlign: 'center' as const,
}

const h1 = {
  color: '#1e40af',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '40px',
  margin: '0 0 20px',
  textAlign: 'center' as const,
}

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 0',
}

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
}

const button = {
  backgroundColor: '#2563eb',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
}

const list = {
  margin: '24px 0',
  padding: '0 0 0 24px',
}

const listItem = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '8px 0',
}

const footer = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '32px 0 0',
}