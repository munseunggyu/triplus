import React from "react";
import styled from "styled-components";

const ChatReceiveWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 9px;
`;

const ReceiveMessage = styled.p`
  font-size: 14px;
  text-align: center;
  background-color: white;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  border-top-left-radius: 0;
  padding: 12px;
  max-width: 240px;
  text-align: left;
  line-height: 18px;
`;

const ReceiveUserImg = styled.img`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  object-fit: cover;
`;

const ReceiveTime = styled.time`
  font-size: 10px;
  color: #767676;
  align-self: flex-end;
`;

export default function Chatting() {
  return (
    <>
      <ChatReceiveWrapper>
        <ReceiveUserImg src="https://cdn.pixabay.com/photo/2020/12/16/10/44/cat-5836297_1280.jpg" />

        <ReceiveMessage>안녕하세요 거기 어떤가요?</ReceiveMessage>

        <ReceiveTime>17:23</ReceiveTime>
      </ChatReceiveWrapper>

      <ChatReceiveWrapper>
        <ReceiveUserImg src="https://cdn.pixabay.com/photo/2020/12/16/10/44/cat-5836297_1280.jpg" />

        <ReceiveMessage>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </ReceiveMessage>

        <ReceiveTime>17:23</ReceiveTime>
      </ChatReceiveWrapper>
    </>
  );
}
