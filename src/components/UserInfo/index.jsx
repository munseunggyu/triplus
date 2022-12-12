import React from "react";
import styled from "styled-components";

const UserInfoContanier = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 5px;
  align-items: center;
`;
const UserInfoImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const UserInfoNameIdCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const UserInfoId = styled.span`
  font-size: 12px;
  color: #767676;
`;
const UserInfoName = styled.strong`
  font-size: 14px;
`;
export default function UserInfo({ children }) {
  return (
    <UserInfoContanier>
      <UserInfoImg src="https://firebasestorage.googleapis.com/v0/b/secret-lion-73f46.appspot.com/o/user_images%2FcdwV1LPNZqfCZw1qLmzY3OQlm9P2?alt=media&amp;token=1665af85-a3f8-498b-8754-2c09857eebe2" />
      <UserInfoNameIdCon>
        <UserInfoName>애월읍 위니브 감귤농장</UserInfoName>
        <UserInfoId>@ weniv_Mandarin</UserInfoId>
      </UserInfoNameIdCon>
      {children}
    </UserInfoContanier>
  );
}
