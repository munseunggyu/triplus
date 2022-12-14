import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import error_404 from "../../assets/images/error_404.png";
const ErrorPageContainer = styled.div`
  width: 358px;
  margin: 0 auto;
  height: calc(100vh - 108px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  font-size: 14px;
`;
const ErrorMessage = styled.p`
  color: ${(props) => props.theme.grayColor};
`;
const ErrorPageBtn = styled(Link)`
  width: 120px;
  height: 44px;
  color: white;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ErrorPage() {
  return (
    <ErrorPageContainer>
      <img src={error_404} alt="심볼이미지" />
      <ErrorMessage>페이지를 찾을 수 없습니다. :( </ErrorMessage>
      <ErrorPageBtn>이전 페이지</ErrorPageBtn>
    </ErrorPageContainer>
  );
}
