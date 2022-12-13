import React from "react";
import styled from "styled-components";
import user_img_small from "../../assets/images/user_img_small.png";

const CommentContainer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  padding: 13px 0;
  border-top: 0.5px solid rgb(219, 219, 219);
`;

const CommentProfileImg = styled.div`
  background: url(${user_img_small}) no-repeat center center;
  background-size: 36px;
  width: 50px;
  padding-right: 18px;
`;

const CommentInput = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
  width: 100%;

  &::placeholder {
    font-size: 14px;
    color: #c4c4c4;
  }
`;

const CommentBtn = styled.button`
  box-sizing: border-box;
  font-size: 14px;
  color: #c4c4c4;
  width: 5em;
  text-align: center;
`;

export default function CommentBar() {
  return (
    <CommentContainer>
      <CommentProfileImg />
      <CommentInput placeholder="댓글 입력하기..." />
      <CommentBtn>게시</CommentBtn>
    </CommentContainer>
  );
}
