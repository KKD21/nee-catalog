"use client";

import { useState, useCallback } from "react";
import type { Category } from "@/data/types";
import SearchBar from "./SearchBar";
import CategoryGrid from "./CategoryGrid";

interface CategorySearchProps {
  categories: Category[];
}

export default function CategorySearch({ categories }: CategorySearchProps) {
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const handleSearch = useCallback(
    (query: string) => {
      if (!query.trim()) {
        setFilteredCategories(categories);
        return;
      }

      const lowerQuery = query.toLowerCase();
      const filtered = categories.filter(
        (cat) =>
          cat.name.toLowerCase().includes(lowerQuery) ||
          cat.description.toLowerCase().includes(lowerQuery)
      );
      setFilteredCategories(filtered);
    },
    [categories]
  );

  return (
    <div className="space-y-6">
      <SearchBar onSearch={handleSearch} placeholder="Search categories..." />
      <CategoryGrid categories={filteredCategories} />
    </div>
  );
}
