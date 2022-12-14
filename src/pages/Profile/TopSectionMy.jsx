import React from "react";
import styled from "styled-components";

const MyProfileBtnCon = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const MyProfileBtn = styled.button`
  border: ${(props) => `1px solid ${props.theme.borderColor}`};
  border-radius: 30px;
  padding: 8px 26px;
`;

export default function TopSectionMy() {
  return (
    <MyProfileBtnCon>
      <MyProfileBtn>프로필 수정</MyProfileBtn>
      <MyProfileBtn>상품 등록</MyProfileBtn>
    </MyProfileBtnCon>
  );
}
