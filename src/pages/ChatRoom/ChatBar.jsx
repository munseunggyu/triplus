import React, { useState } from "react";
import styled from "styled-components";
import file_gray from "../../assets/images/file_gray.svg";
import { useRef } from "react";

const ChatContainer = styled.div`
  display: flex;
  vertical-align: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 36px;
  padding: 13px 0;
  border-top: 0.5px solid ${(props) => props.theme.borderColor};
`;

const ChatUploadFileBtn = styled.button`
  background: center / contain url(${file_gray}) no-repeat;
  background-size: 36px;
  width: 36px;
  height: 36px;
  padding: 0 18px;
  margin: 0 18px 0 16px;
`;

const ChatTextInput = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
  width: 100%;
  &::placeholder {
    font-size: 14px;
    color: #c4c4c4;
  }
`;

const ChatSendBtn = styled.button`
  box-sizing: border-box;
  font-size: 14px;
  color: ${(props) =>
    props.isActive || props.isImgActive ? props.theme.mainColor : "#c4c4c4"};
  width: 5em;
  text-align: center;
  line-height: 36px;
`;

export default function CommentBar() {
  const [isActive, setIsActive] = useState("");
  const [isImgActive, setIsImgActive] = useState("");
  const fileRef = useRef();

  const handleClick = () => {
    fileRef.current.click();
  };

  const handleImgInput = (e) => {
    setIsImgActive(e.target.files[0]);
  };

  return (
    <ChatContainer>
      <ChatUploadFileBtn onClick={handleClick} />
      <input
        type="file"
        className="ir"
        id="post-upload-file"
        accept="image/*"
        ref={fileRef}
        onChange={handleImgInput}
      />

      <ChatTextInput
        placeholder="메세지 입력하기..."
        onChange={(e) => {
          setIsActive(e.target.value);
        }}
      />
      <ChatSendBtn isActive={isActive} isImgActive={isImgActive}>
        전송
      </ChatSendBtn>
    </ChatContainer>
  );
}
