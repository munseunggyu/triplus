import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Vertical from "../../components/Header/Vertical";
import Prev from "../../components/Header/Prev";

const ChatUserName = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export default function ChatHeader() {
  return (
    <Header>
      <Prev />
      <ChatUserName>애월읍 위니브 감귤농장</ChatUserName>
      <Vertical />
    </Header>
  );
}
