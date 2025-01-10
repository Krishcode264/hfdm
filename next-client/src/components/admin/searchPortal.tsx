"use client";
import React, { useState } from "react";
import DomPortal from "../domPortal";
import { SearchBar } from "../search-bar";

const SearchPortal = () => {
  const [showSearchPortle, setShowPortal] = useState(false);
  return (
    showSearchPortle && (
      <DomPortal onClose={() => {}} component={<SearchBar />} />
    )
  );
};

export default SearchPortal;
