import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Navbar from "../../components/Navbar";
import { MainContainer } from "../../components/MainContainer";
import PostCard from "../../components/PostCard";
import SearchButton from "../../components/Header/SearchButton";
import HomeNoFollow from "./HomeNoFollow";
import * as S from "./style";
import LoadingPage from "../LoadingPage";
import symbolImg from "../../assets/images/main_logo.svg";
import { useObserver } from "../../hooks/useObserver";

export default function Home() {
  const curRef = useRef(null);
  const { data, isLoading, getData, page, reloading, finishReload } =
    useObserver(curRef);
  const url = `${process.env.REACT_APP_API_KEY}/post/feed/?limit=10&skip=${page}`;

  useEffect(() => {
    if (!finishReload) {
      getData(url, "posts");
    }
  }, [page]);

  return (
    <>
      <Header>
        <S.MainLogo src={symbolImg} alt="triplus logo" />
        Triplus
        <SearchButton />
      </Header>
      <MainContainer>
        {isLoading ? (
          <LoadingPage />
        ) : data.length > 0 ? (
          <>
            <ul>
              {data.map((post) => {
                return <PostCard key={post.id} {...post} />;
              })}
            </ul>
            <div ref={curRef}></div>
          </>
        ) : (
          <HomeNoFollow />
        )}

        {reloading && !isLoading && <S.ReLoading>Loading...</S.ReLoading>}
      </MainContainer>
      <Navbar />
    </>
  );
}
