import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import uploadIcon from "../../assets/images/upload_file.svg";
import userImg from "../../assets/images/user_img_big.svg";
import axios from "axios";

const ProfileImgContainer = styled.section`
  position: relative;
  width: 110px;
  height: 110px;
  margin: 0 auto;
  background-image: url(${userImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ProfileImgLabel = styled.label`
  width: 110px;
  margin: 0 auto;
`;

const ProfileImg = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;

const ProfileImgInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  /* overflow:hidden: */
  /* line-height: 0; */
  /* text-index: -9999px; */
`;

export default function Index({ setUserImage }) {
  /* 프로필 이미지 */
  // const [image, setImage] = useState(`${userImg}`);
  const previewImage = useRef();

  /* 이미지 미리보기 */
  const preview = (loadImage) => {
    const reader = new FileReader();

    reader.onload = () =>
      (previewImage.current.style.backgroundImage = `url(${reader.result})`);
    // console.log("reader.onload: ", reader.readAsDataURL(loadImage));
    reader.readAsDataURL(loadImage[0]);
  };

  const onLoadedImg = async (formData, loadImage) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const response = await axios.post(
        `${process.env.REACT_APP_API_KEY}/image/uploadfile`,
        formData,
        config
      );
      // console.log("응답: ", response);
      if (response?.data?.filename) {
        setUserImage(
          `${process.env.REACT_APP_API_KEY}/` + response?.data?.filename
        );
        // console.log("로드된 이미지: ", loadImage[0].name);
        preview(loadImage);
      } else {
        alert(
          ".jpg, .jpeg, .gif, .bmp, .png등과 같은 이미지 타입을 지닌 파일만 업로드 가능합니다."
        );
      }
    } catch (error) {
      console.error(error);
      alert("이미지에 대한 잘못된 접근입니다.");
    }
  };

  // console.log("이미지: ", image);
  /* 파일 업로드 */
  const handleImageChange = (e) => {
    const loadImg = e.target.files;
    // console.log("로드된 이미지: ", loadImg);
    const formData = new FormData();
    formData.append("image", loadImg[0]);
    onLoadedImg(formData, loadImg);
  };

  return (
    <>
      <ProfileImgContainer ref={previewImage}>
        <ProfileImgLabel htmlFor="profileImg">
          <ProfileImg src={uploadIcon} alt="프로필 이미지 업로드" />
        </ProfileImgLabel>
      </ProfileImgContainer>
      <ProfileImgInput
        type="file"
        accept="image/*"
        id="profileImg"
        onChange={handleImageChange}
      />
    </>
  );
}
