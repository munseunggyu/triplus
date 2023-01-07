import styled from "styled-components";

export const FormContainer = styled.section`
  position: absolute;
  top: 49px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* height: 90vh; */
  width: 100vw;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

export const PageTitle = styled.h1``;

export const ImgWrapper = styled.div`
  width: 110px;
  height: 110px;
  margin: 30px auto;
`;

export const InputForm = styled.form`
  margin-bottom: 30px;
`;

export const ErrMsg = styled.p`
  margin-bottom: 10px;
  color: red;
`;
