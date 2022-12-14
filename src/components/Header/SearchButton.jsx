import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";

const SearchBtn = styled(Link)`
  width: 24px;
  height: 24px;
  background: url(${css_sprite}) -10px -146px;
  margin-left: auto;
`;

export default function SearchButton() {
  return (
    <SearchBtn>
      <span className="ir">검색 버튼</span>
    </SearchBtn>
  );
}
