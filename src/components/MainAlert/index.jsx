import React from "react";
import styled from "styled-components";

const MainAlertModal = styled.section`
  display: ${(props) => (props.showAlert ? "flex" : "none")};
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
`;

const MainAlertArticle = styled.div`
  width: 252px;
  background-color: #fff;
  border-radius: 10px;
`;

const AlertMsg = styled.strong`
  display: block;
  padding: 22px 0;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 0.5px solid rgba(219, 219, 219, 1);
  font-size: 16px;
  line-height: 20px;
`;

const CancelBtn = styled.button`
  width: 126px;
  height: 46px;
  background-color: white;
  padding: 0;
  border-bottom-left-radius: 10px;
  border: 0;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
`;
const MainBtn = styled.button`
  width: 126px;
  height: 46px;
  background-color: white;
  padding: 0;
  border: 0;
  border-left: 0.5px solid rgba(219, 219, 219, 1);
  font-size: 14px;
  font-weight: 500;
  border-bottom-right-radius: 10px;
  color: #4d82d4;
  cursor: pointer;
`;

export default function MainAlert({
  showAlert,
  setShowAlert,
  txt,
  handleClick,
}) {
  return (
    <MainAlertModal showAlert={showAlert}>
      <MainAlertArticle>
        <AlertMsg>{txt}</AlertMsg>
        <CancelBtn
          onClick={() => {
            setShowAlert(false);
          }}
        >
          취소
        </CancelBtn>
        <MainBtn onClick={handleClick}>확인</MainBtn>
      </MainAlertArticle>
    </MainAlertModal>
  );
}
