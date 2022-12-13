import React from "react";
import styled from "styled-components";
import more_vertical from "../../assets/images/more-vertical.png";

const CommentList = styled.li`
  list-style: none;
  max-width: 390px;
  display: flex;
  gap: 12px;
  margin: 0 auto 24px;
  position: relative;
  &:first-child {
    padding-top: 20px;
  }
  border-top: 1px solid #dbdbdb;
  padding-top: 20px;
`;

const CommentImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;
const CommentUserName = styled.strong`
  margin-top: 4px;
  font-size: 14px;
  display: block;
  font-weight: 500;
`;

const CommentTxt = styled.pre`
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 1.4;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 16px;
`;

const CommentTime = styled.time`
  font-size: 10px;
  color: #767676;
`;

const CommentVertical = styled.button`
  position: absolute;
  top: 12px;
  right: 0;
  width: 20px;
  height: 20px;
  background-size: 20px;
  background: center / contain url(${more_vertical}) no-repeat;
`;

export default function Comment() {
  return (
    <CommentList>
      <CommentImg src="https://cdn.pixabay.com/photo/2020/12/16/10/44/cat-5836297_1280.jpg" />
      <div>
        <CommentUserName>서귀포시 무슨 무슨 농장</CommentUserName>
        <CommentTxt>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
        </CommentTxt>

        <CommentTime></CommentTime>
      </div>
      <CommentVertical>
        <span className="ir">더보기 버튼</span>
      </CommentVertical>
    </CommentList>
  );
}
