import React from "react";
import styled from "styled-components";

const SearchInp = styled.input`
  padding: 7px 16px;
  margin-left: auto;
  min-width: 316px;
  width: 100%;
  background: #f2f2f2;
  border-radius: 32px;
  font-size: 14px;
  border: 0;
`;

export default function SearchInput() {
  return (
    <>
      <label className="ir" htmlFor="searchId">
        계정검색
      </label>
      <SearchInp id="searchId" placeholder="계정검색" />
    </>
  );
}
