import React from "react";
import styled from "styled-components";
import user_img_small from "../../assets/images/user_img_small.png";

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
`;
const UserInfoName = styled.strong`
  font-size: 14px;
`;
export default function UserInfo({ children }) {
  return (
    <UserInfoContanier>
      <UserInfoImg src={user_img_small} />
      <UserInfoNameIdCon>
        <UserInfoName>애월읍 위니브 감귤농장</UserInfoName>
        <UserInfoId>@ weniv_Mandarin</UserInfoId>
      </UserInfoNameIdCon>
      {children}
    </UserInfoContanier>
  );
}
