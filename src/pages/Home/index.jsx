import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Navbar from "../../components/Navbar";
import { MainContainer } from "../../components/MainContainer";
import PostCard from "../../components/PostCard";
import SearchButton from "../../components/Header/SearchButton";
import HomeNoFollow from "./HomeNoFollow";
import { useReloadData } from "../../hooks/useReloadData";

export default function Home() {
  const bottomRef = useRef(null);
  const { skip, bottomBoolean, data, isLoding, bottomScroll, getData } =
    useReloadData(bottomRef, 132);
  const url = `${process.env.REACT_APP_API_KEY}/post/feed/?limit=10&skip=${skip}`;

  useEffect(() => {
    if (bottomBoolean) {
      getData(url);
    }
    if (!bottomRef.current) return;
    window.addEventListener("scroll", bottomScroll);
    return () => {
      window.removeEventListener("scroll", bottomScroll);
    };
  }, [bottomBoolean]);

  return (
    <>
      <Header>
        <HeaderTitle>메인 홈페이지입니다.</HeaderTitle>
        <SearchButton />
      </Header>
      <MainContainer>
        <ul ref={bottomRef}>
          {isLoding ? (
            <HomeNoFollow />
          ) : (
            data.posts.map((post) => {
              return <PostCard key={post.id} {...post} />;
            })
          )}
        </ul>
      </MainContainer>
      <Navbar />
    </>
  );
}
