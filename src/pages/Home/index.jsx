import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Navbar from "../../components/Navbar";
import { MainContainer } from "../../components/MainContainer";
import PostCard from "../../components/PostCard";
import SearchButton from "../../components/Header/SearchButton";
import HomeNoFollow from "./HomeNoFollow";
import axios from "axios";
import { useGetData } from "../../hooks/useGetData";

export default function Home() {
  // const [postList,isLoding setPostList] = useState([]);
  const url = `${process.env.REACT_APP_API_KEY}/post/feed`;
  const { data, isLoding, getData } = useGetData();

  useEffect(() => {
    getData(url);
  }, []);

  return (
    <>
      <Header>
        <HeaderTitle>메인 홈페이지입니다.</HeaderTitle>
        <SearchButton />
      </Header>
      <MainContainer>
        {isLoding ? (
          <HomeNoFollow />
        ) : (
          data.posts.map((post) => {
            return <PostCard key={post.id} {...post} />;
          })
        )}
      </MainContainer>
      <Navbar />
    </>
  );
}
