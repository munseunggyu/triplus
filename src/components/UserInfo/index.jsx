import React from "react";
import styled from "styled-components";
import user_img_small from "../../assets/images/user_img_small.svg";

const UserInfoContanier = styled.li`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  align-items: center;
`;
const UserInfoImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  font-size: 10px;
  border-radius: 50%;
`;
const UserInfoNameIdCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const UserInfoId = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 120px;
`;
const UserInfoName = styled.strong`
  font-size: 14px;
`;
export default function UserInfo({ children, accountname, username, image }) {
  return (
    <UserInfoContanier>
      <UserInfoImg
        src={image.includes("Ellipse") ? user_img_small : image}
        alt="프로필 이미지"
      />
      <UserInfoNameIdCon>
        <UserInfoName>{username}</UserInfoName>
        <UserInfoId>@{accountname}</UserInfoId>
      </UserInfoNameIdCon>
      {children}
    </UserInfoContanier>
  );
}
