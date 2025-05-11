
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBoxProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

const SearchBox = ({ placeholder, onSearch }: SearchBoxProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg">
      <div className="relative flex-grow">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9 pr-4 py-2 w-full rounded-l-md"
        />
      </div>
      <Button type="submit" className="rounded-l-none">
        Search
      </Button>
    </form>
  );
};

export default SearchBox;
