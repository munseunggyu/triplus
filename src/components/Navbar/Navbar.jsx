import React from "react";
import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";

const IconsUl = styled.ul`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  background: url(${css_sprite}) -98px -102px;
  border: 0px;
  margin: 0 auto;
`;

const MessageIcon = styled.button`
  width: 24px;
  height: 24px;
  background: url(${css_sprite}) -146px -54px;
  border: 0px;
`;

const EditIcon = styled.button`
  width: 24px;
  height: 24px;
  background: url(${css_sprite}) -10px -102px;
  border: 0px;
`;

const UserIcon = styled.button`
  width: 24px;
  height: 24px;
  background: url(${css_sprite}) -54px -146px;
  border: 0px;
`;

const NavSpan = styled.span`
  display: block;
  font-size: 10px;
  color: #767676;
`;

export default function Navbar() {
  return (
    <IconsUl>
      <Iconli>
        <HomeIcon />
        <NavSpan>홈</NavSpan>
      </Iconli>

      <Iconli>
        <MessageIcon />
        <NavSpan>채팅</NavSpan>
      </Iconli>

      <Iconli>
        <EditIcon />
        <NavSpan>게시물 작성</NavSpan>
      </Iconli>

      <Iconli>
        <UserIcon />
        <NavSpan>프로필</NavSpan>
      </Iconli>
    </IconsUl>
  );
}
