import React from "react";
import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";

const PrevBtn = styled.button`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  background: url(${css_sprite}) -190px -99px;
`;

export default function Prev() {
  return (
    <PrevBtn>
      <span className="ir">이전 버튼</span>
    </PrevBtn>
  );
}
