import React from "react";
import styled from "styled-components";
const HeaderContainer = styled.article`
  width: 100%;
  position: fixed;
  height: 48px;
  overflow: hidden;
  border-bottom: 0.5px solid rgb(219, 219, 219);
  background-color: white;
  z-index: 10;
`;

const HeaderWrapper = styled.header`
  max-width: 450px;
  height: 48px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
`;

export default function Header({ children }) {
  return (
    <HeaderContainer>
      <HeaderWrapper>{children}</HeaderWrapper>
    </HeaderContainer>
  );
}
