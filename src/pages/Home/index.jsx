import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import SearchButton from "../../components/Header/SearchButton";
import Vertical from "../../components/Header/Vertical";
import { MainContainer } from "../../components/MainContainer";

export default function Home() {
  return (
    <>
      <Header>
        <HeaderTitle>피드</HeaderTitle>
        <SearchButton />
      </Header>
      <MainContainer></MainContainer>
    </>
  );
}
