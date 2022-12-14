import React from "react";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Navbar from "../../components/Navbar";
import { MainContainer } from "../../components/MainContainer";
import PostCard from "../../components/PostCard";

import SearchButton from "../../components/Header/SearchButton";
import HomeNoFollow from "./HomeNoFollow";

export default function Home() {
  return (
    <>
      <Header>
        <HeaderTitle>메인 홈페이지입니다.</HeaderTitle>
        <SearchButton />
      </Header>
      <MainContainer>
        {/* <PostCard />
				<PostCard />
				<PostCard />
				<PostCard /> */}
        <HomeNoFollow />
      </MainContainer>
      <Navbar />
    </>
  );
}
