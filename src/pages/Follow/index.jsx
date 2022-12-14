import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Prev from "../../components/Header/Prev";
import { MainContainer } from "../../components/MainContainer";
import Navbar from "../../components/Navbar";
import UserInfo from "../../components/UserInfo";

const FollowContainer = styled.ul`
  max-width: 358px;
  margin: 0 auto;
`;

const IsFollowBtn = styled.button`
  margin-left: auto;
  width: 56px;
  height: 28px;
  border-radius: 26px;
  background-color: ${(props) => props.theme.mainColor};
  color: white;
  border: ${(props) => `1px solid ${props.theme.borderColor}`};
  font-size: 12px;
`;

export default function Follow() {
  return (
    <>
      <Header>
        <Prev />
        <HeaderTitle>follow</HeaderTitle>
      </Header>
      <MainContainer>
        <FollowContainer>
          <UserInfo>
            <IsFollowBtn>팔로우</IsFollowBtn>
          </UserInfo>
          <UserInfo>
            <IsFollowBtn>팔로우</IsFollowBtn>
          </UserInfo>
          <UserInfo>
            <IsFollowBtn>팔로우</IsFollowBtn>
          </UserInfo>
          <UserInfo>
            <IsFollowBtn>팔로우</IsFollowBtn>
          </UserInfo>
        </FollowContainer>
      </MainContainer>
      <Navbar />
    </>
  );
}
