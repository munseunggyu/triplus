import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";

const YourProfileBtnCon = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const YourProfileFollowBtn = styled.button`
  border: 1px solid #dbdbdb;
  border-radius: 30px;
  padding: 8px 26px;
`;

const YourProfileChatBtn = styled(Link)`
  width: 34px;
  height: 34px;
  box-sizing: border-box;
  background: url("css_sprites.png") -130px -190px;
  border: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  span {
    width: 20px;
    height: 20px;
    background: ${(props) =>
      props.isFollowIcon
        ? `url(${css_sprite}) -130px -190px`
        : `url(${css_sprite}) -90px -190px`};
  }
`;

export default function TopSectionYour() {
  return (
    <YourProfileBtnCon>
      <YourProfileChatBtn>
        <span className="ir">채팅하기</span>
        <span />
      </YourProfileChatBtn>
      <YourProfileFollowBtn>상품 등록</YourProfileFollowBtn>
      <YourProfileChatBtn isFollowIcon={true}>
        <span className="ir">채팅하기</span>
        <span />
      </YourProfileChatBtn>
    </YourProfileBtnCon>
  );
}
