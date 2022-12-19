import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyProfileBtnCon = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const MyProfileBtn = styled(Link)`
  border: ${(props) => `1px solid ${props.theme.borderColor}`};
  border-radius: 30px;
  padding: 8px 26px;
  font-size: 14px;
`;

export default function TopSectionMy() {
  return (
    <MyProfileBtnCon>
      <MyProfileBtn to="/editprofile">프로필 수정</MyProfileBtn>
      <MyProfileBtn to="/productupload">상품 등록</MyProfileBtn>
    </MyProfileBtnCon>
  );
}
