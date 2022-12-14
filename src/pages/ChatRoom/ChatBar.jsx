import React from "react";
import styled from "styled-components";
import file_gray from "../../assets/images/file_gray.png";

const ChatContainer = styled.div`
  /* box-sizing: border-box; */
  position: fixed;
  bottom: 0;
  background-color: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  padding: 13px 0;
  border-top: 0.5px solid rgb(219, 219, 219);
`;

const ChatUploadFile = styled.div`
  background: center / contain url(${file_gray}) no-repeat;
  background-size: 36px;
  width: 50px;
  padding: 0 18px;
`;

const ChatInput = styled.input`
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

const ChattBtn = styled.button`
  box-sizing: border-box;
  font-size: 14px;
  color: #c4c4c4;
  width: 5em;
  text-align: center;
`;

export default function CommentBar() {
  return (
    <ChatContainer>
      <ChatUploadFile />
      <ChatInput placeholder="메세지 입력하기..." />
      <ChattBtn>전송</ChattBtn>
    </ChatContainer>
  );
}
