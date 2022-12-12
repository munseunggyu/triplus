import React from "react";
import styled from "styled-components";

const PrevBtn = styled.button`
  margin-right: 10px;
`;

export default function Prev() {
  return (
    <PrevBtn>
      <span className="ir">이전 버튼</span>
    </PrevBtn>
  );
}
