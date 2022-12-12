import React from "react";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Navbar from "../../components/Navbar/Navbar";
import { MainContainer } from "../../components/MainContainer";
import SearchInput from "../../components/Header/SearchInput";
import UserInfo from "../../components/UserInfo";

export default function Home() {
  return (
    <>
      <Header>
        <HeaderTitle>메인 홈페이지입니다.</HeaderTitle>
        <SearchInput />
      </Header>
      <MainContainer>
        <UserInfo />
      </MainContainer>
      <Navbar />
    </>
  );
}
