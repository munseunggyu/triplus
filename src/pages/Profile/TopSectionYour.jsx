import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";
import IsFollowButton from "../Follow/IsFollowButton";

const YourProfileBtnCon = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
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

export default function TopSectionYour({
  isfollow,
  userAccountName,
  setProfile,
}) {
  return (
    <YourProfileBtnCon>
      <YourProfileBtn>
        <span className="ir">채팅하기</span>
        <span />
      </YourProfileBtn>
      <IsFollowButton
        isfollow={isfollow}
        userAccountName={userAccountName}
        isProfile="1"
        setProfile={setProfile}
      />
      <YourProfileBtn isfollowicon="1">
        <span className="ir">채팅하기</span>
        <span />
      </YourProfileBtn>
    </YourProfileBtnCon>
  );
}
