import React from "react";
import styled from "styled-components";

const PostModalSection = styled.section`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  z-index: 10;
`;

const PostModalUl = styled.ul`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: auto;
  padding: 36px 0px 10px 0px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  &::before {
    content: "";
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    border-radius: 5px;
    background-color: #dbdbdb;
  }
`;

const PostModalList = styled.li`
  width: 100%;
  padding: 14px 0 14px 26px;
`;

const PostModalListBtn = styled.button`
  font-size: 14px;
  line-height: 17px;
`;

export default function PostModal() {
  return (
    <>
      <PostModalSection>
        <PostModalUl>
          <PostModalList>
            <PostModalListBtn>삭제</PostModalListBtn>
          </PostModalList>
          <PostModalList>
            <PostModalListBtn>수정</PostModalListBtn>
          </PostModalList>
        </PostModalUl>
      </PostModalSection>
    </>
  );
}
