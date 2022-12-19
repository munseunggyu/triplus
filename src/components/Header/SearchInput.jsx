import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SearchInp = styled.input`
  padding: 7px 16px;
  margin-left: auto;
  width: 100%;
  background: #f2f2f2;
  border-radius: 32px;
  font-size: 14px;
  border: 0;
`;

export default function SearchInput({ searchInputVal, setSearchInputVal }) {
  return (
    <>
      <label className="ir" htmlFor="searchId">
        계정검색
      </label>
      <SearchInp
        value={searchInputVal}
        onChange={(e) => {
          setSearchInputVal(e.target.value);
        }}
        id="searchId"
        placeholder="계정검색"
      />
    </>
  );
}
