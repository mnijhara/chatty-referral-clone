
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBoxProps {
  placeholder: string;
  onSearch?: (query: string) => void;
  value?: string;
  onChange?: (query: string) => void;
  className?: string;
}

const SearchBox = ({ placeholder, onSearch, value, onChange, className }: SearchBoxProps) => {
  const [internalQuery, setInternalQuery] = useState("");
  
  // Use controlled value if provided, otherwise use internal state
  const currentValue = value !== undefined ? value : internalQuery;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalQuery(newValue);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(currentValue);
    }
  };

  // For real-time search when onChange is provided
  useEffect(() => {
    if (onChange && onSearch) {
      onSearch(currentValue);
    }
  }, [currentValue, onChange, onSearch]);

  return (
    <form onSubmit={handleSubmit} className={`flex w-full max-w-lg ${className || ''}`}>
      <div className="relative flex-grow">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder={placeholder}
          value={currentValue}
          onChange={handleInputChange}
          className="pl-9 pr-4 py-2 w-full rounded-l-md"
        />
      </div>
      {onSearch && !onChange && (
        <Button type="submit" className="rounded-l-none">
          Search
        </Button>
      )}
    </form>
  );
};

export default SearchBox;
