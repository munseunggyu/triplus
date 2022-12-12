import React from "react";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Navbar from "../../components/Navbar/Navbar";
import SearchButton from "../../components/Header/SearchButton";
import { MainContainer } from "../../components/MainContainer";
import Prev from "../../components/Header/Prev";
import SearchInput from "../../components/Header/SearchInput";

export default function Home() {
  return (
    <>
      <Header>
        <HeaderTitle>메인 홈페이지입니다.</HeaderTitle>
        <SearchButton />
      </Header>
      <MainContainer>ㅁㄴㅇㄹ</MainContainer>
      <Navbar />
    </>
  );
}
