import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 10;
`;

const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom: 0.5px solid rgb(219, 219, 219);
`;

export default function Header({ children, h1Ir }) {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        {h1Ir && <h1 className="ir">{h1Ir}</h1>}
        {children}
      </HeaderWrapper>
    </HeaderContainer>
  );
}
