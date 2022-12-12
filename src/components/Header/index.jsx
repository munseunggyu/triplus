import React from "react";
import styled from "styled-components";
const HeaderContainer = styled.article`
  /* text-align: center; */
  width: 100%;
  position: fixed;
  min-height: 48px;
  overflow: hidden;
  border-bottom: 0.5px solid rgb(219, 219, 219);
  background-color: white;
  z-index: 10;
`;

const HeaderWrapper = styled.header`
  max-width: 450px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 14px 12px;
  position: relative;
`;

export default function Header({ children }) {
  return (
    <HeaderContainer>
      <HeaderWrapper>{children}</HeaderWrapper>
    </HeaderContainer>
  );
}
