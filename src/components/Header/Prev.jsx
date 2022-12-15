import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";

const PrevBtn = styled.button`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  background: url(${css_sprite}) -190px -99px;
`;

export default function Prev() {
  const navigate = useNavigate();
  return (
    <PrevBtn
      onClick={() => {
        navigate(-1);
      }}
    >
      <span className="ir">이전 버튼</span>
    </PrevBtn>
  );
}
