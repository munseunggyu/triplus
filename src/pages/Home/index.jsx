import React, { useEffect, useRef, useState } from "react";
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
  const [] = useState(10);
  // const { data, isLoding, getData } = useGetData();
  const url = `${process.env.REACT_APP_API_KEY}/post/feed/?limit=10`;
  const [data, setData] = useState(null);
  const [isLoding, setIsLoding] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const [add, setAdd] = useState(10);
  const bottomRef = useRef(null);
  // setAdd(prev => prev + 10)
  const getData = async (url) => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-type": "application/json",
        },
      });
      setData(res.data);

      setIsLoding(false);
    } catch (error) {
      console.log(error);
    }
  };

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
        <div ref={bottomRef} />
      </MainContainer>
      <Navbar />
    </>
  );
}
