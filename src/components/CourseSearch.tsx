import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CourseSearchProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: CourseFilters) => void;
}

export interface CourseFilters {
  category?: string;
  level?: string;
  priceRange?: string;
}

const CourseSearch = ({ onSearch, onFilterChange }: CourseSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<CourseFilters>({});

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleFilterChange = (key: keyof CourseFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 p-4">
      <div className="flex gap-2">
        <div className="flex-1">
          <Input
            placeholder="Search for courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <Button onClick={handleSearch} className="flex items-center gap-2">
          <Search className="h-4 w-4" />
          Search
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter Courses</SheetTitle>
              <SheetDescription>
                Apply filters to find the perfect course for you.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select
                  onValueChange={(value) => handleFilterChange("category", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Frontend">Frontend</SelectItem>
                    <SelectItem value="Backend">Backend</SelectItem>
                    <SelectItem value="FullStack">Full Stack</SelectItem>
                    <SelectItem value="Mobile">Mobile Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Level</label>
                <Select
                  onValueChange={(value) => handleFilterChange("level", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Price Range</label>
                <Select
                  onValueChange={(value) =>
                    handleFilterChange("priceRange", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50">$0 - $50</SelectItem>
                    <SelectItem value="51-100">$51 - $100</SelectItem>
                    <SelectItem value="101+">$101+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default CourseSearch;