import React from "react";
import styled from "styled-components";
import PostCardBtns from "./PostCardBtns";
import user_img_small from "../../assets/images/user_img_small.svg";
import css_sprites from "../../assets/images/css_sprites.png";

const PostCardList = styled.li`
  list-style: none;
  max-width: 358px;
  width: 100%;
  display: flex;
  gap: 12px;
  margin: 0 auto 24px;
  position: relative;
  &:first-child {
    padding-top: 20px;
  }
`;

const PostCardUserImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
const PostCardUserName = styled.strong`
  margin-top: 4px;
  font-size: 16px;
  display: block;
  font-weight: 500;
`;
const PostCardUserId = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};
`;
const PostCardContentTxt = styled.pre`
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1.4;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 16px;
`;
const PostCardContentImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const PostCardTime = styled.time`
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};
`;

const PostCardVertical = styled.button`
  position: absolute;
  right: 0;
  width: 18px;
  height: 18px;
  background: url(${css_sprites}) -170px -190px;
`;
export default function PostCard({
  id,
  author,
  content,
  createdAt,
  image,
  commentCount,
  heartCount,
  hearted,
  comments,
}) {
  const date = new Date(createdAt);
  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const createAtFormat = new Intl.DateTimeFormat("ko-KR", dateOptions).format(
    date
  );
  return (
    <PostCardList>
      <PostCardUserImg src={user_img_small} />
      <div>
        <PostCardUserName>{author.username}</PostCardUserName>
        <PostCardUserId>@{author.accountname}</PostCardUserId>
        <PostCardContentTxt>{content}</PostCardContentTxt>
        {image && <PostCardContentImg src={image} alt="게시물 이미지" />}
        <PostCardBtns
          postkey={id}
          commentCount={commentCount}
          heartCount={heartCount}
          hearted={hearted}
        />
        <PostCardTime>{createAtFormat} </PostCardTime>
      </div>
      <PostCardVertical>
        <span className="ir">더보기 버튼</span>
      </PostCardVertical>
    </PostCardList>
  );
}
