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
  border: ${(props) => `1px solid ${props.theme.borderColor}`};
  border-radius: 30px;
  padding: 8px 26px;
`;

const YourProfileBtn = styled(Link)`
  width: 34px;
  height: 34px;
  box-sizing: border-box;
  border: ${(props) => `1px solid ${props.theme.borderColor}`};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  span {
    width: 20px;
    height: 20px;
    background: ${(props) =>
      props.isfollowicon
        ? `url(${css_sprite}) -130px -190px`
        : `url(${css_sprite}) -90px -190px`};
  }
`;

export default function TopSectionYour() {
  return (
    <YourProfileBtnCon>
      <YourProfileBtn>
        <span className="ir">채팅하기</span>
        <span />
      </YourProfileBtn>
      <YourProfileFollowBtn>팔로우</YourProfileFollowBtn>
      <YourProfileBtn isfollowicon="1">
        <span className="ir">채팅하기</span>
        <span />
      </YourProfileBtn>
    </YourProfileBtnCon>
  );
}
