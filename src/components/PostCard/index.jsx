import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";

const PostCartList = styled.li`
  list-style: none;
  max-width: 390px;
  display: flex;
  gap: 12px;
  margin: 0 auto 24px;
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
  color: #767676;
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
const PostCardHeartChatCon = styled.div`
  margin-top: 14px;
  display: flex;
  margin-bottom: 18px;
`;
const PostCardLikeBtn = styled.button`
  margin-right: 18px;
  display: flex;
  align-items: center;
  span {
    color: #767676;
  }
  &::before {
    content: "";
    display: block;
    margin-right: 8px;
    width: 20px;
    height: 20px;
    background: url(${css_sprite}) -50px -190px;
  }
`;
const PostCardChatLink = styled(Link)`
  display: flex;
  align-items: center;
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    background: url(${css_sprite}) -90px -190px;
  }
  span {
    color: #767676;
    font-size: 14px;
    margin-top: 3px;
  }
`;
const PostCardTime = styled.time`
  font-size: 12px;
  color: #767676;
`;
export default function PostCard() {
  return (
    <PostCartList>
      <PostCartImg src="https://firebasestorage.googleapis.com/v0/b/secret-lion-73f46.appspot.com/o/user_images%2FcdwV1LPNZqfCZw1qLmzY3OQlm9P2?alt=media&amp;token=1665af85-a3f8-498b-8754-2c09857eebe2" />
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
        <PostCardHeartChatCon>
          <PostCardLikeBtn>
            <span className="ir">좋아요 버튼</span>
            <span>8</span>
          </PostCardLikeBtn>

          <PostCardChatLink to="/">
            <span className="ir">댓글창으로 이동</span>
            <span>3</span>
          </PostCardChatLink>
        </PostCardHeartChatCon>
        <PostCardTime>2020년 10월 21일</PostCardTime>
      </div>
    </PostCartList>
  );
}
