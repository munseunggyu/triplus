import React, { useState } from "react";
import styled, { css } from "styled-components";

import { keyframes } from "styled-components";

const slideUp = keyframes`
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0px);
  }
`;
const slideDown = keyframes`
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(100px);
  }
`;

const MainModalSection = styled.section`
  display: ${(props) => (props.showModal ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  z-index: 10;
`;
// animation: ${(props) =>
//   props.showModal
//     ? `${slideUp} 0.3s ease-in-out`
//     : `${slideDown} 0.3s ease-in-out`};
const MainModalUl = styled.ul`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: auto;
  padding: 36px 0px 10px 0px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &::before {
    content: "";
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    border-radius: 5px;
    background-color: #dbdbdb;
  }
`;

const MainModalList = styled.li`
  width: 100%;
  padding: 14px 0 14px 26px;
`;

const MainModalListBtn = styled.button`
  font-size: 14px;
  line-height: 17px;
`;

const Hi = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
`;

export default function MainModal({ children, setShowModal, showModal }) {
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <MainModalSection showModal={showModal} setShowModal={setShowModal}>
      <Hi onClick={closeModal} />
      <MainModalUl>{children}</MainModalUl>
    </MainModalSection>
  );
}
