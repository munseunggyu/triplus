import React from "react";
import styled from "styled-components";
import AlertModal from "./AlertModal";

const ModalLi = styled.li`
  padding: 0 26px;
  margin: 0 10px;
  &:hover {
    background-color: ${(props) => props.theme.mainColor};
    border-radius: 15px;
  }
`;
const ModalBtn = styled.button`
  width: 100%;
  text-align: left;
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 46px;
  &:hover {
    color: white;
  }
`;

export default function ModalList({ children, onClick, useRef }) {
  return (
    <ModalLi>
      <ModalBtn ref={useRef} onClick={onClick}>
        {children}
      </ModalBtn>
    </ModalLi>
  );
}
