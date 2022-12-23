import React, { useState } from "react";
import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";
import { useNavigate, useMatch, useParams } from "react-router-dom";

const IconsUl = styled.ul`
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 14px;
  border-top: 0.5px solid #dbdbdb;
`;

const Iconli = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 60px;
  gap: 4px;
`;

const HomeIcon = styled.button`
  width: 24px;
  height: 24px;
  &.active {
    background: url(${css_sprite}) -146px -10px;
  }
  background: url(${css_sprite}) -98px -102px;
  border: 0px;
  margin: 0 auto;
`;

const MessageIcon = styled.button`
  width: 24px;
  height: 24px;
  background: url(${css_sprite}) -146px -54px;
  &.active {
    background: url(${css_sprite}) -146px -98px;
  }
  border: 0px;
`;

const UploadIcon = styled.button`
  width: 24px;
  height: 24px;
  background: url(${css_sprite}) -10px -102px;
  border: 0px;
`;

const UserIcon = styled.button`
  width: 24px;
  height: 24px;
  background: url(${css_sprite}) -54px -146px;
  &.active {
    background: url(${css_sprite}) -98px -146px;
  }
  border: 0px;
`;

const NavSpan = styled.span`
  display: block;
  font-size: 10px;
  color: #767676;
  &.active {
    color: ${(props) => props.theme.mainColor};
  }
`;

export default function Navbar() {
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const navigate = useNavigate();
  const matchHome = useMatch("/");
  const matchChatList = useMatch("/chatlist");
  const matchProfile = useMatch(`/profile/${userInfo.accountname}`);

  return (
    <IconsUl>
      <Iconli>
        <HomeIcon
          className={matchHome !== null ? "active" : ""}
          onClick={() => {
            navigate("/");
          }}
        />
        <NavSpan className={matchHome !== null ? "active" : ""}>홈</NavSpan>
      </Iconli>

      <Iconli>
        <MessageIcon
          className={matchChatList !== null ? "active" : ""}
          onClick={() => {
            navigate("/chatlist");
          }}
        />
        <NavSpan className={matchChatList !== null ? "active" : ""}>
          채팅
        </NavSpan>
      </Iconli>

      <Iconli>
        <UploadIcon
          onClick={() => {
            navigate("/postupload");
          }}
        />
        <NavSpan>게시물 작성</NavSpan>
      </Iconli>

      <Iconli>
        <UserIcon
          className={matchProfile !== null ? "active" : ""}
          onClick={() => {
            navigate(`/profile/${userInfo.accountname}`);
          }}
        />
        <NavSpan className={matchProfile !== null ? "active" : ""}>
          프로필
        </NavSpan>
      </Iconli>
    </IconsUl>
  );
}
