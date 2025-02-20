
import { Button } from "@/components/ui/button";

interface CategoryFiltersProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
}

export const CategoryFilters = ({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryFiltersProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-6">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategorySelect(category)}
          className="transition-all duration-300"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
