import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import user_img_big from "../../assets/images/user_img_big.svg";
import TopSectionMy from "./TopSectionMy";
import TopSectionYour from "./TopSectionYour";
import axios from "axios";

const ProfileTopSec = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 8px solid #f2f2f2;
  padding: 37px 0 26px;
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
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const ProfileImgFollowBtnsCon = styled.div`
  display: flex;
  align-items: center;
  gap: 46px;
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
  const token = localStorage.getItem("token");
  const { accountname } = useParams();

  const getProfileData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_KEY}/profile/${accountname}`,
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
  }, [accountname]);
  return (
    <ProfileTopSec>
      <h2 className="ir">프로필 수정 및 상품등록</h2>
      <ProfileTopContainer>
        <ProfileImgFollowBtnsCon>
          <ProfileFollowers to={`/profile/${profileData.accountname}/follower`}>
            <ProfileFollowCount>{profileData.followerCount}</ProfileFollowCount>
            <ProfileFollowTxt>followers</ProfileFollowTxt>
          </ProfileFollowers>
          <ProfileUserImg src={user_img_big} alt="프로필 이미지" />

          <ProfileFollowers
            to={`/profile/${profileData.accountname}/following`}
          >
            <ProfileFollowCount isfollowing="1">
              {profileData.followingCount}
            </ProfileFollowCount>
            <ProfileFollowTxt>following</ProfileFollowTxt>
          </ProfileFollowers>
        </ProfileImgFollowBtnsCon>
        <ProfileUserName>{profileData.username}</ProfileUserName>
        <PofileUserId>@{profileData.accountname} </PofileUserId>
        <ProfileIntroduce>{profileData.intro}</ProfileIntroduce>
        {accountname === "sfne.sae" ? (
          <TopSectionMy />
        ) : (
          <TopSectionYour
            isfollow={profileData.isfollow}
            userAccountName={profileData.accountname}
          />
        )}
      </ProfileTopContainer>
    </ProfileTopSec>
  );
}
