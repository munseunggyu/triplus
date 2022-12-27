import styled, { css } from "styled-components";
import small_profile from "../../assets/images/user_img_small.svg";
import upload_file from "../../assets/images/upload_file.svg";
import x from "../../assets/images/x.png";

// PreviewList
export const PreviewImgList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const PreviewImgItem = styled.li`
  position: relative;
`;

export const PreviewImg = styled.img`
  width: 304px;
  height: 228px;
  position: relative;
  object-fit: cover;
  border-radius: 10px;
  ${(props) => props.length > 1 && `width: 168px; height: 126px;`}
`;

export const DeleteBtn = styled.button`
  background: ${`url(${x})`} no-repeat;
  background-size: 22px;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 3px;
  right: 3px;
`;

// index.js
export const UploadContainer = styled.div`
  display: flex;
  padding: 16px;
  min-height: 100px;
`;

export const UploadContentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 100%;
`;

export const UploadProfileImg = styled.div`
  background: ${(props) => `url(${props.userProfileImg})`} no-repeat;
  background-size: 42px;
  border-radius: 50%;
  padding-right: 13px;
  display: block;
  width: 42px;
  height: 42px;
`;

export const UploadText = styled.textarea`
  background: none;
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
`;

export const UploadBtn = styled.button`
  background-color: ${(props) =>
    props.isActive ? props.theme.mainColor : "#90bcff"};
  border-radius: 32px;
  color: #fff;
  margin-left: auto;
  width: 90px;
  height: 32px;
  &:disabled {
    cursor: default;
  }
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
