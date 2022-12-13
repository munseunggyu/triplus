import React from "react";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import Vertical from "../../components/Header/Vertical";
import { MainContainer } from "../../components/MainContainer";
import Navbar from "../../components/Navbar/Navbar";
import ProfileMidSection from "./MidSection";
import ProfileTopSection from "./TopSection";

export default function Myprrofile() {
  return (
    <>
      <Header h1Ir="프로필페이지">
        <Prev />
        <Vertical />
      </Header>
      <MainContainer>
        <ProfileTopSection />
        <ProfileMidSection />
      </MainContainer>
      <Navbar />
    </>
  );
}
