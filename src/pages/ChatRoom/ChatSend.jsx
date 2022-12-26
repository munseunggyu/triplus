import React from "react";
import styled from "styled-components";

const ChatSendWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row-reverse;
  gap: 12px;
  margin: 9px;
`;

const SendMessage = styled.p`
  font-size: 14px;
  text-align: center;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 10px;
  border-top-right-radius: 0;
  padding: 12px;
  max-width: 240px;
  text-align: left;
  line-height: 18px;
  color: #fff;
`;

const SendUserImg = styled.img`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  object-fit: cover;
`;

const SendTime = styled.time`
  font-size: 10px;
  color: ${(props) => props.theme.grayColor};
  align-self: flex-end;
`;

const SendImg = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 10px;
`;

export default function ChatSend() {
  return (
    <>
      <ChatSendWrapper>
        <SendUserImg src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1686&q=80" />

        <SendMessage>오늘 눈이 왔어요</SendMessage>

        <SendTime>18:12</SendTime>
      </ChatSendWrapper>

      <ChatSendWrapper>
        <SendUserImg src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1686&q=80" />

        <SendImg
          src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          alt=""
        />

        <SendTime>18:12</SendTime>
      </ChatSendWrapper>
    </>
  );
}
