import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  background-color: ${(props) =>
    props.isFollow ? "white" : props.theme.mainColor};
  color: ${(props) => (props.isFollow ? props.theme.grayColor : "white")};
  border: ${(props) => `1px solid ${props.theme.borderColor}`};
  font-size: 12px;
`;

export default function Follow() {
  const { accountname } = useParams();
  const [followingList, setFollowingList] = useState([]);
  const token = localStorage.getItem("token");

  const getFollowingList = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_KEY}/profile/${accountname}/following`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      }
    );
    setFollowingList(res.data);
  };
  useEffect(() => {
    getFollowingList();
  }, []);

  console.log(followingList);
  return (
    <>
      <Header>
        <Prev />
        <HeaderTitle>follow</HeaderTitle>
      </Header>
      <MainContainer>
        <FollowContainer>
          {followingList.map((following) => {
            return (
              <UserInfo {...following}>
                <IsFollowBtn isFollow={following.isfollow}>
                  {following.isfollow ? "취소" : "팔로우"}
                </IsFollowBtn>
              </UserInfo>
            );
          })}
        </FollowContainer>
      </MainContainer>
      <Navbar />
    </>
  );
}
