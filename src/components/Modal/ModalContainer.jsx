import React from "react";
import styled from "styled-components";

const ModalBackground = styled.article`
  position: fixed;
  /* display: ${(props) => (props.showModal ? "block" : "none")}; */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  animation: modalBgFadeIn 0.3s ease-in-out;
  @keyframes modalBgFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalWrap = styled.ul`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 36px 0 16px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  animation: modalFadeIn 0.3s ease-in-out;
  transition: 1s linear;
  &::before {
    content: "";
    width: 50px;
    height: 4px;
    display: block;
    margin: 0 auto 16px;
    background: gray;
    border-radius: 5px;
  }
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(120px);
    }
    to {
      opacity: 1;
    }
  }
`;

export default function ModalContainer({
  children,
  onClick,
  showModal,
  setShowModal,
}) {
  return (
    <ModalBackground onClick={onClick}>
      <ModalWrap>{children}</ModalWrap>;
    </ModalBackground>
  );
}
