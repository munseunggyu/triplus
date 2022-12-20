import styled from "styled-components";
import small_profile from "../../assets/images/user_img_small.svg";
import upload_file from "../../assets/images/upload_file.svg";

export const UploadContainer = styled.div`
  display: flex;
  padding: 16px;
  gap: 13px;
  min-height: 100px;
`;

export const UploadContentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 100%;
`;

export const UploadProfileImg = styled.div`
  background: url(${small_profile}) no-repeat;
  display: block;
  width: 42px;
  height: 42px;
`;

export const UploadText = styled.textarea`
  width: 100%;
  border: 0;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const UploadContentImg = styled.div`
  background: ${(props) =>
    props.uploadImg
      ? `center / cover
    url("https://cdn.pixabay.com/photo/2019/12/15/13/01/couple-4697055_1280.jpg")
    no-repeat`
      : ""};
  display: block;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  margin-top: 16px;
`;

export const UploadFileImg = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${upload_file}) no-repeat;
  background-size: 50px;
`;

export const UploadBtn = styled.button`
  background-color: ${(props) =>
    props.isActive ? props.theme.mainColor : "#90bcff"};
  border-radius: 32px;
  color: #fff;
  margin-left: auto;
  width: 90px;
  height: 32px;
`;

export const UploadFileForm = styled.form`
  display: inline-block;
  position: fixed;
  bottom: 16px;
  right: 16px;
  background: url(${upload_file}) no-repeat;
  background-size: 50px;
  width: 50px;
  height: 50px;
`;
