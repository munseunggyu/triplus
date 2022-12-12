import React from "react";
import styled from "styled-components";

const HeaderTit = styled.strong`
  font-size: 18px;
  font-weight: 500;
`;

export default function HeaderTitle({ children }) {
  return <HeaderTit>{children}</HeaderTit>;
}
