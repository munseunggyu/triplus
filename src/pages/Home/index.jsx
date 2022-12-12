import React from "react";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Navbar from "../../components/Header/Navbar";
import Prev from "../../components/Header/Prev";
import Vertical from "../../components/Header/Vertical";
import { MainContainer } from "../../components/MainContainer";

export default function Home() {
  return (
    <>
      <Header>
        <Prev />
        <HeaderTitle tit="홈화면입니다" />
        <Vertical />
      </Header>
      <MainContainer>ㅁㄴㅇㄹ</MainContainer>
      <Navbar />
    </>
  );
}
