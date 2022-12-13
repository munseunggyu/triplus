import React from "react";
import Header from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import Vertical from "../../components/Header/Vertical";
import PostCard from "../../components/PostCard";
import Prev from "../../components/Header/Prev";
import CommentBar from "../../components/CommentBar";
import Comment from "./Comment";

export default function PostDetail() {
  return (
    <>
      <Header>
        <Prev />
        <Vertical />
      </Header>
      <MainContainer>
        <PostCard />
        <Comment />
        <Comment />
        <Comment />
      </MainContainer>
      <CommentBar />
    </>
  );
}
