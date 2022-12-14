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
      <ChatUserName>파주 불주먹</ChatUserName>
      <Vertical />
    </Header>
  );
}
