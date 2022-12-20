import React from "react";
import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";

const VerticalBtn = styled.button`
  margin-left: auto;
  width: 24px;
  height: 24px;
  background: url(${css_sprite}) -102px -54px;
`;
export default function Vertical() {
  return (
    <>
      <VerticalBtn>
        <span className="ir">버티컬 버튼</span>
      </VerticalBtn>
    </>
  );
}
