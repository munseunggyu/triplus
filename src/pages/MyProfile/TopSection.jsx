import React from "react";
import styled from "styled-components";
import user_img_big from "../../assets/images/user_img_big.png";
import TopSectionMy from "./TopSectionMy";
import TopSectionYour from "./TopSectionYour";

const TopSec = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const TopContainer = styled.div`
  max-width: 390px;
  padding-top: 30px;
  text-align: center;
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
export default function TopSection() {
  return (
    <TopSec>
      <h2 className="ir">프로필 수정 및 상품등록</h2>
      <TopContainer>
        <ProfileUserImg src={user_img_big} alt="프로필 이미지" />
        <ProfileUserName>애월읍 위니브 감귤농장</ProfileUserName>
        <PofileUserId>@sadf</PofileUserId>
        <ProfileIntroduce>
          애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장
        </ProfileIntroduce>
        {/* <TopSectionMy /> */}
        <TopSectionYour />
      </TopContainer>
    </TopSec>
  );
}
