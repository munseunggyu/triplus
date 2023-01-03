import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

export default function MyProfileEdit(props) {
  // console.log(JSON.parse(localStorage.getItem("userinfo")).image);

  const authToken = JSON.parse(localStorage.getItem("userinfo")).token;
  // console.log(authToken);

  const [image, setImage] = useState("");
  // const [changeImg, setChangeImg] = useState(false);
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const fileInput = useRef(null);

  const [userNameMsg, setUserNameMsg] = useState("");
  const [isValidUserName, setIsValidUserName] = useState(false);
  const navigate = useNavigate();
  // console.log(navigate);

  const passed = username && accountname;

  /* 프로필 정보 가져오기 */
  const getProfile = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_KEY}/user/myinfo`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      console.log(res.data.user);
      setUsername(res.data.user.username);
      setAccountname(res.data.user.accountname);
      // console.log("accountname: ", res.data.user.accoountname);
      setIntro(res.data.user.intro);
      setImage(res.data.user.image);
    } catch (error) {
      console.log("에러입니다.");
    }
  };

  useEffect(() => getProfile, []);

  /* 한개의 이미지(프로필) */
  const profileChange = async () => {
    try {
      const file = fileInput.current.files[0];
      const formData = new FormData();

      formData.append("imaage", file);

      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/user/myinfo`,
        formData
      );
      const fileName = res.data.filename;

      setImage(`${process.env.REACT_APP_API_KEY}/${fileName}`);
    } catch (error) {
      console.log("에러입니다.");
    }
  };

  /* 사용자 이름 유효성 검사 */
  const validUserName = () => {
    if (username.length < 2) {
      setUserNameMsg("2자리 이상 입력해주세요.");
      setIsValidUserName(false);
    } else if (username.length > 10) {
      setUserNameMsg("10자리 이하로 입력해주세요.");
      setIsValidUserName(false);
    } else {
      setUserNameMsg("유효한 사용자 이름입니다.");
      setIsValidUserName(true);
    }
  };

  useEffect(() => {
    validUserName();
  }, [username]);

  /* 프로필 수정 */
  const body = {
    user: {
      username: `${username}`,
      accountname: `${accountname}`,
      intro: `${intro}`,
      image: `${image}`,
    },
  };

  // 이미지박스에서 처리한것을 여기다가 넘겨줘야함
  // 이미지를 이미지 박스에 props로 전달해줘야함
  // setimage도 넘겨줘야 함

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
        }
      );
      // console.log(res.data);
      navigate("/profile/${username}"); // 이 부분 체킹해보기 (내걸로 맞게 바꿔야 함)
    } catch (error) {
      console.log("에러입니다.");
    }
  };
  console.log("intro: ", intro);

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
      <FormContainer>
        <PageTitle className="ir">프로필 수정 페이지</PageTitle>
        <ImgWrapper onChange={profileChange}>
          <ProfileImg setProfileImg={setImage} />
        </ImgWrapper>
        <InputForm>
          <InputBox
            id="username"
            labelText="사용자 이름"
            placeholder="2~10자 이내여야 합니다."
            defaultValue={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          {/* <p className="message">{usernameError}</p> */}
          <InputBox
            id="accountname"
            labelText="계정 ID"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            defaultValue={accountname}
            onChange={(e) => {
              setAccountname(e.target.value);
            }}
          />
          {/* <p className="message">{accountnameError}</p> */}
          <InputBox
            id="itemIntro"
            labelText="소개"
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            defaultValue={intro}
            onChange={(e) => {
              setIntro(e.target.value);
            }}
          />
        </InputForm>
      </FormContainer>
    </>
  );
}
