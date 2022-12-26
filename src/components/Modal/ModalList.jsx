import React from "react";
import styled from "styled-components";
import AlertModal from "./AlertModal";
import * as S from "./style";

export default function ModalList({ children, onClick, useRef }) {
  return (
    <S.ModalLi>
      <S.ModalBtn ref={useRef} onClick={onClick}>
        {children}
      </S.ModalBtn>
    </S.ModalLi>
  );
}
