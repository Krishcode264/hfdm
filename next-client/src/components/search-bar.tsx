"use client";
import { debounce } from "lodash";
import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { SearchResults } from "./search-results";
import { getCall } from "@/actions/plantry";
import { useApiCall } from "@/hooks/apiCall";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<[]>([]);

  const searchApiCall = getCall("/search", {
    params: {
      name: searchTerm,
    },
  });
  const { loading, responseData, error, callApi, isSuccess } = useApiCall({
    apiCall: searchApiCall,
  });

  const debouncedApiCall = debounce((value: string) => {
    if (value.trim()) {
      callApi();
       setResults(responseData?.data?.results);
    }
  }, 500);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    debouncedApiCall(value);
  
   
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 ">
      <Input
        type="text"
        placeholder="Search for patients, staff, or planetary stuff..."
        value={searchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}
        className="w-full text-lg py-6 bg-slate-300"
      />
      {loading ? "loading the data":searchTerm && results && results.length > 0 && (
        <SearchResults results={results} />
      )}
    </div>
  );
}
