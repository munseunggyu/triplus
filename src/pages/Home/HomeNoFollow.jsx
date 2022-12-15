import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import symbolImg from "../../assets/images/plain_blue.png";
const HomeNoFollowing = styled.div`
  width: 358px;
  margin: 0 auto;
  height: calc(100vh - 108px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  gap: 25px;
`;
const HomeNoFollowingP = styled.p`
  color: ${(props) => props.theme.grayColor};
`;
const HomeNoFollowingLink = styled(Link)`
  width: 120px;
  height: 44px;
  color: white;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function HomeNoFollow() {
  return (
    <HomeNoFollowing>
      <img src={symbolImg} alt="심볼이미지" />
      <HomeNoFollowingP>유저를 검색해 팔로우 해보세요!</HomeNoFollowingP>
      <HomeNoFollowingLink to="search">검색하기</HomeNoFollowingLink>
    </HomeNoFollowing>
  );
}
