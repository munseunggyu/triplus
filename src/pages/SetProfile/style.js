import styled from "styled-components";

export const FormContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  width: 100vw;
  margin-top: 30px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

export const PageTitle = styled.h1``;

export const ProfileEditTitle = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 1.2rem;
  color: #000;
`;

export const TitleExplain = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #767676;
`;

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
