import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  showFilters?: boolean;
}

export const SearchBar = ({ 
  placeholder = "Search clinical trials and CMS data...", 
  onSearch,
  showFilters = true 
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <Card className="p-4 bg-card border-border shadow-card">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="pl-10 bg-background border-input"
          />
        </div>
        <Button type="submit" variant="medical" className="px-6">
          Search
        </Button>
        {showFilters && (
          <Button variant="medical-outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        )}
      </form>
    </Card>
  );
};