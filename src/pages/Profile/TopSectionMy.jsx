import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
  font-size: 14px;
`;

export default function TopSectionMy({ accountname, image, intro, username }) {
  const navigate = useNavigate();
  return (
    <MyProfileBtnCon>
      <MyProfileBtn
        onClick={() => {
          navigate(`/editprofile`, {
            state: {
              accountname,
              image,
              intro,
              username,
            },
          });
        }}
      >
        프로필 수정
      </MyProfileBtn>
      <MyProfileBtn onClick={() => navigate("/productupload")}>
        상품 등록
      </MyProfileBtn>
    </MyProfileBtnCon>
  );
}
