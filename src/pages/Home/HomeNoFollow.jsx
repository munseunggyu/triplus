import React from "react";
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
  gap: 25px;
`;
const HomeNoFollowingP = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.grayColor};
`;
const HomeNoFollowingBtn = styled.button`
  width: 120px;
  height: 44px;
  color: white;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 44px;
`;

export default function HomeNoFollow() {
  return (
    <HomeNoFollowing>
      <img src={symbolImg} alt="심볼이미지" />
      <HomeNoFollowingP>유저를 검색해 팔로우 해보세요!</HomeNoFollowingP>
      <HomeNoFollowingBtn>검색하기</HomeNoFollowingBtn>
    </HomeNoFollowing>
  );
}
