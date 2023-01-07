
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  margin-top: 30px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

export const PageTitle = styled.h1``;

export const LoginTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
`;

export const InputForm = styled.form`
  margin: 70px 0 30px;
`;

/* 이메일로 회원가입 */
export const EmailJoinLink = styled(Link)`
  display: block;
  color: #767676;
  margin-top: 20px;
  font-size: 12px;
  line-height: 15px;
`;

export const ErrMsg = styled.p`
  margin-bottom: 10px;
  color: red;
`;