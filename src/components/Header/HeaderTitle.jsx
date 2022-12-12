import React from "react";
import styled from "styled-components";

const HeaderTit = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-top: 2px;
`;

export default function HeaderTitle({ children }) {
  return <HeaderTit>{children}</HeaderTit>;
}
