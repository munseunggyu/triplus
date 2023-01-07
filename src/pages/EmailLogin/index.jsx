import React, { useRef, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import InputBox from "../../components/InputBox/index";
import LongBtn from "../../components/Button/LongBtn";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./style.js";

const EmailJoin = () => {
  return <S.EmailJoinLink to="/emailsignup">이메일로 회원가입</S.EmailJoinLink>;
};

function EmailLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [loginConfirm, setLoginConfirm] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const passed = email && password;
  const navigate = useNavigate();

  const handleLoginId = (e) => {
    const email = e.target.value;
    setEmail(email);

    const emailRegex =
      /^([A-Z|a-z|0-9](\-|\_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;

    if (emailRegex.test(email)) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }

    if (email == "") {
      setEmailMessage("* 이메일을 입력해주세요.");
    } else {
      setEmailMessage("");
      setLoginMessage("");
    }
  };

  /* 이메일 인풋값이 바뀔때마다 이메일 유효성검사 진행 */
  useEffect(() => {
    const emailRegex =
      /^([A-Z|a-z|0-9](\-|\_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;

    if (!emailRegex.test(email) && email !== "") {
      setEmailError("* 올바른 이메일 형식이 아닙니다.");
      setEmailValid(false);
    } else if (email == "") {
      setEmailError("* 이메일을 입력해주세요");
      setEmailValid(false);
    } else {
      setEmailError("");
      setEmailValid(true);
    }
  }, [email]);

  const handleLoginPw = (e) => {
    const password = e.target.value;
    setPassword(password);

    if (password == "") {
      setPwMessage("* 비밀번호를 입력해주세요.");
    } else if (password.length < 6) {
      setPwMessage("* 비밀번호는 6자 이상이어야 합니다.");
    } else {
      setPwMessage("");
      setLoginMessage("");
    }
  };

  const onClickLogin = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/user/login`,
        {
          user: {
            email: email,
            password: password,
          },
        }
      );

      console.log("res: ", res);

      if (res.data.user?.token) {
        // localStorage.setItem("token", JSON.stringify(res.data.user.token));
        localStorage.setItem("userinfo", JSON.stringify(res.data.user));
        props.setUserInfo(true);
        setLoginConfirm(true);
        setLoginMessage(""); // 경고문구 삭제
        navigate("/"); // 로그인 성공 후 홈 화면으로 이동
      } else {
        if (email !== "" && password !== "") {
          setLoginConfirm(false);
          setLoginMessage(`*${res.data.message}`);
        } else {
          setLoginMessage("");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (email && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [email, password]);

  return (
    <>
      <S.FormContainer>
        <S.PageTitle className="ir">triplus 로그인 화면</S.PageTitle>
        <S.LoginTitle>로그인</S.LoginTitle>
        <S.InputForm>
          <InputBox id="email" labelText="이메일" onChange={handleLoginId} />
          <S.ErrMsg className="message">{emailError}</S.ErrMsg>
          <InputBox
            type="password"
            id="password"
            labelText="비밀번호"
            onChange={handleLoginPw}
          />
          <S.ErrMsg className="message">{pwMessage}</S.ErrMsg>
        </S.InputForm>
        <LongBtn
          message="로그인"
          onClick={onClickLogin}
          disabled={passed ? false : true}
        ></LongBtn>
        <EmailJoin />
      </S.FormContainer>
    </>
  );
}

export default EmailLogin;
