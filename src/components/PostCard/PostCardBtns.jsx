import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";

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
    color: ${(props) => props.theme.grayColor};
  }
  &::before {
    content: "";
    display: block;
    margin-right: 5px;
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
    margin-right: 5px;
    background: url(${css_sprite}) -90px -190px;
  }
  span {
    color: ${(props) => props.theme.grayColor};
    margin-top: 3px;
  }
`;

export default function PostCardBtns() {
  return (
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
  );
}
