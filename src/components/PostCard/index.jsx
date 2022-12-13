import React from "react";
import styled from "styled-components";
import PostCardBtns from "./PostCardBtns";
import user_img_small from "../../assets/images/user_img_small.png";
import css_sprites from "../../assets/images/css_sprites.png";

const PostCartList = styled.li`
  list-style: none;
  max-width: 390px;
  display: flex;
  gap: 12px;
  margin: 0 auto 24px;
  position: relative;
  &:first-child {
    padding-top: 20px;
  }
`;

const PostCartImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
`;
const PostCardUserName = styled.strong`
  margin-top: 4px;
  font-size: 18px;
  display: block;
  font-weight: 500;
`;
const PostCardUserId = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};
`;
const PostCardContentTxt = styled.pre`
  font-size: 16px;
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
  top: 20px;
  right: 0;
  width: 18px;
  height: 18px;
  background: url(${css_sprites}) -170px -190px;
`;
export default function PostCard() {
  return (
    <PostCartList>
      <PostCartImg src={user_img_small} />
      <div>
        <PostCardUserName>애월읍 위니브 감귤농장</PostCardUserName>
        <PostCardUserId>@ weniv_Mandarin</PostCardUserId>
        <PostCardContentTxt>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </PostCardContentTxt>
        <PostCardContentImg
          src="https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720__480.jpg"
          alt=""
        />
        <PostCardBtns />
        <PostCardTime>2020년 10월 21일</PostCardTime>
      </div>
      <PostCardVertical>
        <span className="ir">더보기 버튼</span>
      </PostCardVertical>
    </PostCartList>
  );
}
