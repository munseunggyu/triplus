import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import SearchInput from "../../components/Header/SearchInput";
import { MainContainer } from "../../components/MainContainer";
import Navbar from "../../components/Navbar";
import UserInfo from "../../components/UserInfo";

const UserInfoContainer = styled.ul`
  width: 358px;
  margin: 0 auto;
`;

export default function Search() {
  return (
    <>
      <Header>
        <Prev />
        <SearchInput />
      </Header>
      <MainContainer>
        <UserInfoContainer>
          <UserInfo />
          <UserInfo />
          <UserInfo />
        </UserInfoContainer>
      </MainContainer>
      <Navbar />
    </>
  );
}
