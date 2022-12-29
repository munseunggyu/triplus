import React, { useEffect, useLayoutEffect, useRef } from "react";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Navbar from "../../components/Navbar";
import { MainContainer } from "../../components/MainContainer";
import PostCard from "../../components/PostCard";
import SearchButton from "../../components/Header/SearchButton";
import HomeNoFollow from "./HomeNoFollow";
import { useReloadData } from "../../hooks/useReloadData";
import * as S from "./style";
import LoadingPage from "../LoadingPage";
import symbolImg from "../../assets/images/main_logo.svg";

export default function Home() {
  const {
    skip,
    bottomBoolean,
    data,
    isLoading,
    bottomScroll,
    getData,
    reloadLoding,
  } = useReloadData();
  const curRef = useRef(null);
  const url = `${process.env.REACT_APP_API_KEY}/post/feed/?limit=10&skip=${skip}`;
  useLayoutEffect(() => {
    getData(url, "홈");
  }, []);
  useEffect(() => {
    if (bottomBoolean) {
      getData(url, "홈");
    }
    window.addEventListener("scroll", bottomScroll);
    return () => {
      window.removeEventListener("scroll", bottomScroll);
    };
  }, [bottomBoolean]);

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
        ) : data.posts.length > 0 ? (
          <ul>
            {data.posts.map((post) => {
              return <PostCard key={post.id} {...post} />;
            })}
            <div ref={curRef}></div>
          </ul>
        ) : (
          <HomeNoFollow />
        )}
        {reloadLoding && !isLoading && <S.ReLoading>Loading...</S.ReLoading>}
      </MainContainer>
      <Navbar />
    </>
  );
}
