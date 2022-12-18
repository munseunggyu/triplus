import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import user_img_big from "../../assets/images/user_img_big.png";
import TopSectionMy from "./TopSectionMy";
import TopSectionYour from "./TopSectionYour";
import axios from "axios";

const ProfileTopSec = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 26px;
  border-bottom: 8px solid #f2f2f2;
`;
const ProfileTopContainer = styled.div`
  max-width: 390px;
  padding-top: 30px;
  text-align: center;
  position: relative;
`;

const ProfileUserImg = styled.img`
  width: 110px;
  height: 110px;
  margin: 0 auto;
  display: block;
`;
const ProfileUserName = styled.strong`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: block;
  padding: 16px 0 6px;
`;
const PofileUserId = styled.span`
  display: block;
  font-size: 12px;
  line-height: 15px;
`;
const ProfileIntroduce = styled.p`
  padding: 16px 0 24px;
  font-size: 14px;
  line-height: 18px;
`;
const ProfileFollowers = styled(Link)`
  position: absolute;
  top: 85px;
  left: ${(props) => (props.isfollowing ? "220px" : "-20px")};
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const ProfileFollowCount = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => (props.isfollowing ? props.theme.grayColor : "black")};
`;
const ProfileFollowTxt = styled.span`
  font-size: 10px;
  color: ${(props) => props.theme.grayColor};
`;

export default function ProfileTopSection() {
  const [profileData, setProfileData] = useState({});
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTMzNWY1MTdhZTY2NjU4MWMxZTIwYiIsImV4cCI6MTY3NjI2MzM5MywiaWF0IjoxNjcxMDc5MzkzfQ.xsbzJ5VLoY6BdOS0dccJLUDTfzdg5p0dfE0J0Kmrez0"; // 임시 토큰

  const getProfileData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_KEY}/profile/sfne.sae`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      return res.data.profile;
    } catch (error) {
      console.log(error);
    }
  };
  const setProfile = async () => {
    const res = await getProfileData();
    setProfileData(res);
  };
  useEffect(() => {
    setProfile();
  }, []);
  return (
    <ProfileTopSec>
      <h2 className="ir">프로필 수정 및 상품등록</h2>
      <ProfileTopContainer>
        <ProfileUserImg src={user_img_big} alt="프로필 이미지" />
        <ProfileUserName>{profileData.username}</ProfileUserName>
        <PofileUserId>@{profileData.accountname} </PofileUserId>
        <ProfileIntroduce>{profileData.intro}</ProfileIntroduce>
        {/* /profile/:accountname/following */}
        <TopSectionMy />
        <ProfileFollowers to={`/profile/${profileData.accountname}/follower`}>
          <ProfileFollowCount> {profileData.followerCount} </ProfileFollowCount>
          <ProfileFollowTxt>followers</ProfileFollowTxt>
        </ProfileFollowers>
        <ProfileFollowers
          to={`/profile/${profileData.accountname}/following`}
          isfollowing="1"
        >
          <ProfileFollowCount isfollowing="1">
            {profileData.followingCount}
          </ProfileFollowCount>
          <ProfileFollowTxt>following</ProfileFollowTxt>
        </ProfileFollowers>
      </ProfileTopContainer>
    </ProfileTopSec>
  );
}
