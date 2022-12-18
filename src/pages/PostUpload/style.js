import styled from "styled-components";
import small_profile from "../../assets/images/user_img_small.png";
import upload_file from "../../assets/images/upload_file.png";
import x from "../../assets/images/x.png";

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
  height: 20vh;
  border: none;
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

// button
export const UploadBtn = styled.button`
  background-color: ${(props) =>
    props.isActive ? props.theme.mainColor : "#90bcff"};
  border-radius: 32px;
  color: #fff;
  background-size: 90px;
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

export const DeleteBtn = styled.button`
  position: relative;
  bottom: 205px;
  left: 270px;
  background: ${(props) => (props.uploadImg ? `url(${x})` : "")};
  background-size: 22px;
  width: 22px;
  height: 22px;
`;
