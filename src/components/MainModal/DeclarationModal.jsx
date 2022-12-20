import React, { useState } from "react";
import MainAlert from "../MainAlert";
import * as S from "./style";

export default function DeclarationModal({
  showAlert,
  setShowAlert,
  handleClick,
}) {
  return (
    <>
      <S.MainModalLi
        onClick={() => {
          setShowAlert(true);
        }}
      >
        <S.MainModalListBtn>신고</S.MainModalListBtn>
      </S.MainModalLi>
      <MainAlert
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        txt="신고하시겠습니까?"
        handleClick={handleClick}
      />
    </>
  );
}
