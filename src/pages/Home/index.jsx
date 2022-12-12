import React from "react";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Prev from "../../components/Header/Prev";
import SearchInput from "../../components/Header/SearchInput";
import Vertical from "../../components/Header/Vertical";
import { MainContainer } from "../../components/MainContainer";

export default function Home() {
  return (
    <>
      <Header>
        <Prev />
        {/* <HeaderTitle tit="홈화면입니다" /> */}
        {/* <Vertical /> */}
        <SearchInput />
      </Header>
      <MainContainer>ㅁㅇ니ㅏㄹ</MainContainer>
    </>
  );
}
