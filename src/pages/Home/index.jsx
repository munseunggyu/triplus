import React from "react";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Navbar from "../../components/Navbar/Navbar";
import Prev from "../../components/Header/Prev";
import SearchInput from "../../components/Header/SearchInput";
import Vertical from "../../components/Header/Vertical";
import { MainContainer } from "../../components/MainContainer";

export default function Home() {

  return (
    <>
      <Header h1Ir="프로필">
        <Prev />
        {/* <HeaderTitle>감귤마켓 피드</HeaderTitle> */}
        <Vertical />
      </Header>
      <MainContainer>ㅁㄴㅇㄹ</MainContainer>
      <Navbar />
    </>
  );
}
