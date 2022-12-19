import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Prev from "../../components/Header/Prev";
import { MainContainer } from "../../components/MainContainer";
import Navbar from "../../components/Navbar";
import UserInfo from "../../components/UserInfo";
import IsFollowButton from "./IsFollowButton";

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
  const [followList, setFollowList] = useState([]);
  const token = localStorage.getItem("token");
  const path = useLocation();

  const getFollowingList = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_KEY}/profile/${accountname}/following`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      setFollowList(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getFollowerList = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_KEY}/profile/${accountname}/follower`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      setFollowList(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (path.pathname.includes("follower")) {
      getFollowerList();
    } else {
      getFollowingList();
    }
  }, []);
  return (
    <>
      <Header>
        <Prev />
        <HeaderTitle>follow</HeaderTitle>
      </Header>
      <MainContainer>
        <FollowContainer>
          {followList.map((follow) => {
            return (
              <UserInfo {...follow}>
                <IsFollowButton
                  isfollow={follow.isfollow}
                  userAccountName={follow.accountname}
                />
              </UserInfo>
            );
          })}
        </FollowContainer>
      </MainContainer>
      <Navbar />
    </>
  );
}
