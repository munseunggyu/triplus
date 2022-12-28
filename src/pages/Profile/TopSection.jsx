import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import user_img_big from "../../assets/images/user_img_big.svg";
import TopSectionMy from "./TopSectionMy";
import TopSectionYour from "./TopSectionYour";
import { useGetData } from "../../hooks/useGetData";
import * as S from "./style";

export default function ProfileTopSection() {
  const { data, setData, isLoding, getData } = useGetData();
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const { accountname } = useParams();
  const isMyProfile = accountname === userInfo.accountname;
  const url = `${process.env.REACT_APP_API_KEY}/profile/${accountname}`;
  useEffect(() => {
    getData(url);
  }, [accountname]);

  return isLoding ? null : (
    <S.ProfileTopSec>
      <h2 className="ir">프로필 수정 및 상품등록</h2>
      <S.ProfileTopContainer>
        <S.ProfileImgFollowBtnsCon>
          <S.ProfileFollowers
            to={`/profile/${data.profile.accountname}/follower`}
          >
            <S.ProfileFollowCount>
              {data.profile.followerCount}
            </S.ProfileFollowCount>
            <S.ProfileFollowTxt>followers</S.ProfileFollowTxt>
          </S.ProfileFollowers>
          <S.ProfileUserImg src={user_img_big} alt="프로필 이미지" />

          <S.ProfileFollowers
            to={`/profile/${data.profile.accountname}/following`}
          >
            <S.ProfileFollowCount isfollowing="1">
              {data.profile.followingCount}
            </S.ProfileFollowCount>
            <S.ProfileFollowTxt>following</S.ProfileFollowTxt>
          </S.ProfileFollowers>
        </S.ProfileImgFollowBtnsCon>
        <S.ProfileUserName>{data.profile.username}</S.ProfileUserName>
        <S.PofileUserId>&#64;{data.profile.accountname} </S.PofileUserId>
        <S.ProfileIntroduce>{data.profile.intro}</S.ProfileIntroduce>
        {isMyProfile ? (
          <TopSectionMy {...data.profile} />
        ) : (
          <TopSectionYour
            isfollow={data.profile.isfollow}
            userAccountName={data.profile.accountname}
            setProfile={setData}
          />
        )}
      </S.ProfileTopContainer>
    </S.ProfileTopSec>
  );
}
