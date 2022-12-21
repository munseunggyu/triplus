import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Navbar from "../../components/Navbar";
import { MainContainer } from "../../components/MainContainer";
import PostCard from "../../components/PostCard";
import SearchButton from "../../components/Header/SearchButton";
import HomeNoFollow from "./HomeNoFollow";
import axios from "axios";

export default function Home() {
  const [postList, setPostList] = useState([]);
  const token = localStorage.getItem("token");

  const getFollowerPost = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/post/feed`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });

    setPostList(res.data.posts);
  };

  useEffect(() => {
    getFollowerPost();
  }, []);

  return (
    <>
      <Header>
        <HeaderTitle>메인 홈페이지입니다.</HeaderTitle>
        <SearchButton />
      </Header>
      <MainContainer>
        {postList.length > 0 ? (
          postList.map((post) => {
            return <PostCard key={post.id} {...post} />;
          })
        ) : (
          <HomeNoFollow />
        )}
      </MainContainer>
      <Navbar />
    </>
  );
}
