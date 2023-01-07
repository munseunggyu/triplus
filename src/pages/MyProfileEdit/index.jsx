import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import styled from "styled-components";
import ProfileImg from "../../components/ImageBox";
import InputBox from "../../components/InputBox/index";
import axios from "axios";
import defaultImg from "../../assets/images/user_img_big.svg";
import MiddleSmallBtn from "../../components/Button/MiddleSmallBtn/MiddleSmallBtn";
import * as S from "./style";

export default function MyProfileEdit(props) {
  const location = useLocation();
  // console.log("location state: ", location.state.image);
  // useEffect(() => {
  //   console.log("location : ", location);
  // }, [location]);

  const authToken = JSON.parse(localStorage.getItem("userinfo")).token;
  // console.log(JSON.parse(localStorage.getItem("userinfo")).image);
  // console.log(authToken);

  const [userImage, setUserImage] = useState("");
  // const [changeImg, setChangeImg] = useState(false);
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const fileInput = useRef(null);

  const [userNameMsg, setUserNameMsg] = useState("");
  const [accountnameError, setAccountnameError] = useState("");
  const [isValidUserName, setIsValidUserName] = useState(false);
  const [accountnameValid, setAccountnameValid] = useState(false);
  const navigate = useNavigate();
  const passed = username && accountname;

  useEffect(() => {
    if (location.state) {
      console.log("로케이션 스테이트: ", location.state);
      setAccountname(location.state.accountname);
      setUsername(location.state.username);

      if (location.state.image) {
        setUserImage(location.state.image);
      }
      if (location.state.intro) {
        setIntro(location.state.intro);
      }
    }
  }, []);

  /* 한개의 이미지(프로필) */
  const profileChange = async () => {
    try {
      const file = fileInput.current.files[0];
      console.log("file: ", file);
      const formData = new FormData();

      formData.append("imaage", file);

      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/user/myinfo`,
        formData
      );
      const fileName = res.data.filename;

      setUserImage(`${process.env.REACT_APP_API_KEY}/${fileName}`);
      console.log("profilechange 후 이미지: ", userImage);
    } catch (error) {
      console.log(error);
      console.log("에러입니다.");
    }
  };

  /* 사용자 이름 유효성 검사 */
  const validUserName = () => {
    if (username.length < 2) {
      setUserNameMsg("*2자리 이상 입력해주세요.");
      setIsValidUserName(false);
    } else if (username.length > 10) {
      setUserNameMsg("*10자리 이하로 입력해주세요.");
      setIsValidUserName(false);
    } else {
      setUserNameMsg("*유효한 사용자 이름입니다.");
      setIsValidUserName(true);
    }
  };
  useEffect(() => {
    validUserName();
  }, [username]);

  // 이미지박스에서 처리한것을 여기다가 넘겨줘야함
  // 이미지를 이미지 박스에 props로 전달해줘야함
  // setUserImage도 넘겨줘야 함

  useEffect(() => {
    const accountnameRegex = /^([A-Za-z0-9_.])+$/;
    if (!accountnameRegex.test(accountname) && accountname !== "") {
      setAccountnameError("*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.");
      setAccountnameValid(false);
    } else if (accountname === "") {
      setAccountnameValid(false);
    } else {
      setAccountnameError("");
      setAccountnameValid(true);
    }
  }, [accountname]);

  /* 프로필 수정 */
  const body = {
    user: {
      username: `${username}`,
      accountname: `${accountname}`,
      intro: `${intro}`,
      image: `${userImage}`,
    },
  };

  const editProfile = async () => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_KEY}/user`,
        JSON.stringify(body),
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json",
          },
          // user: {
          //   username: username,
          //   accountname: accountname,
          //   intro: intro,
          //   image: userImage,
          // },
        }
      );
      // console.log(res.data);
      navigate("/profile"); // 이 부분 체킹해보기 (내걸로 맞게 바꿔야 함)
    } catch (error) {
      console.log(error);
      console.log("에러입니다.");
    }
  };

  return (
    <>
      <Header>
        <Prev />
        <MiddleSmallBtn
          message="저장"
          onclick={editProfile}
          disabled={passed ? false : true}
        />
      </Header>
      <S.FormContainer>
        <S.PageTitle className="ir">프로필 수정 페이지</S.PageTitle>
        <S.ImgWrapper>
          <ProfileImg
            userImage={userImage}
            setUserImage={setUserImage}
            onChange={profileChange}
          />
        </S.ImgWrapper>
        <S.InputForm>
          <InputBox
            id="username"
            labelText="사용자 이름"
            placeholder="2~10자 이내여야 합니다."
            defaultValue={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <S.ErrMsg className="message">{userNameMsg}</S.ErrMsg>
          <InputBox
            id="accountname"
            labelText="계정 ID"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            defaultValue={accountname}
            onChange={(e) => {
              setAccountname(e.target.value);
            }}
          />
          <S.ErrMsg className="message">{accountnameError}</S.ErrMsg>
          <InputBox
            id="itemIntro"
            labelText="소개"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            defaultValue={intro}
            onChange={(e) => {
              setIntro(e.target.value);
            }}
          />
        </S.InputForm>
      </S.FormContainer>
    </>
  );
}
