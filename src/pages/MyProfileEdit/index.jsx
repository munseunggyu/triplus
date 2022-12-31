import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import styled from "styled-components";
import ProfileImg from "../../components/ImageBox";
import InputBox from "../../components/InputBox/index";
import axios from "axios";
import userImg from "../../assets/images/user_img_big.svg";
import MiddleSmallBtn from "../../components/Button/MiddleSmallBtn/MiddleSmallBtn";

const FormContainer = styled.section`
  position: absolute;
  top: 49px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* height: 90vh; */
  width: 100vw;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const PageTitle = styled.h1``;

const ImgWrapper = styled.div`
  width: 110px;
  height: 110px;
  margin: 30px auto;
`;

const InputForm = styled.form`
  margin-bottom: 30px;
`;

/* 유저정보 가져오기 */
const getLocalStorageUserInfo = () => {
  return JSON.stringify(localStorage.getItem("userinfo"));
};

const getUserInfo = () => {
  try {
    const user = getLocalStorageUserInfo();
    if (!user) {
      throw new Error("유저정보가 없습니다.");
    }
    return user;
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
};

export default function MyProfileEdit() {
  const [userinfo, setUserinfo] = useState(getUserInfo);

  console.log(JSON.parse(localStorage.getItem("userinfo")).image);

  return (
    <>
      <Header>
        <Prev />
        <MiddleSmallBtn
          message="저장"
          // onclick={saveHandler}
          // disabled={passed ? false : true}
        />
      </Header>
      <FormContainer>
        <PageTitle className="ir">프로필 수정 페이지</PageTitle>
        <ImgWrapper>
          <ProfileImg />
        </ImgWrapper>
        <InputForm>
          <InputBox
            id="username"
            labelText="사용자 이름"
            placeholder="2~10자 이내여야 합니다."
            // onChange={(e) => {
            //   setUsername(e.target.value);
            // }}
          />
          {/* <p className="message">{usernameError}</p> */}
          <InputBox
            id="accountname"
            labelText="계정 ID"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            // onChange={(e) => {
            //   setAccountname(e.target.value);
            // }}
          />
          {/* <p className="message">{accountnameError}</p> */}
          <InputBox
            id="itemIntro"
            labelText="소개"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          />
        </InputForm>
      </FormContainer>
    </>
  );
}
