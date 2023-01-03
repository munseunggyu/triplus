import React from "react";
import { useNavigate } from "react-router-dom";
import error_404 from "../../assets/images/error_404.svg";
import * as S from "./style";

export default function ErrorPage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <S.ErrorPageContainer>
      <img src={error_404} alt="404 이미지" />
      <S.ErrorMessage>페이지를 찾을 수 없습니다. &#58;&#40; </S.ErrorMessage>
      <S.ErrorPageBtn onClick={goBack}>이전 페이지</S.ErrorPageBtn>
    </S.ErrorPageContainer>
  );
}
