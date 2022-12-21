import React, { useState } from "react";
import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";
import AlertModal from "../Modal/AlertModal";
import ModalContainer from "../Modal/ModalContainer";
import ModalList from "../Modal/ModalList";

const VerticalBtn = styled.button`
  margin-left: auto;
  width: 24px;
  height: 24px;
  background: url(${css_sprite}) -102px -54px;
`;
export default function Vertical() {
  const [isModal, setIsModal] = useState(false);
  const [isModalAlert, setIsModalAlert] = useState(false);
  const handleModal = (e) => {
    setIsModal(!isModal);
  };

  const handleAlert = (e) => {
    e.stopPropagation();
    setIsModalAlert(true);
  };

  const handlCloseClick = () => {
    setIsModalAlert(false);
    setIsModal(false);
  };
  return (
    <>
      <VerticalBtn onClick={handleModal}>
        <span className="ir">버티컬 버튼</span>
      </VerticalBtn>
      {isModal && (
        <ModalContainer onClick={handleModal}>
          <ModalList onClick={() => console.log("hi")}>
            설정 및 개인정보
          </ModalList>
          <ModalList onClick={handleAlert}>로그아웃</ModalList>
        </ModalContainer>
      )}
      {isModalAlert !== false ? (
        <AlertModal
          title="로그아웃 하시겠어요?"
          submitText="로그아웃"
          onCloseClick={handlCloseClick}
          // onSubmitClick={로그아웃 기능}
        />
      ) : null}
    </>
  );
}
