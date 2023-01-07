import styled from "styled-components";

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

export const SignUpTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
`;

export const InputForm = styled.form`
  margin: 70px 0 30px;
`;

export const ErrMsg = styled.p`
  margin-bottom: 10px;
  color: red;
`;