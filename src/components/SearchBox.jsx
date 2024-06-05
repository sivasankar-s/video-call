import React from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ placeholder, onChange }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="w-full outline-none placeholder-gray-500"
      />
      <FaSearch />
    </div>
  );
};

export default SearchBox;
