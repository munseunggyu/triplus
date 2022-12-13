import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import upload_button from "../../assets/images/upload_button.png";
import { MainContainer } from "../../components/MainContainer";
import small_profile from "../../assets/images/user_img_small.png";
import upload_file from "../../assets/images/upload-file.png";
import x from "../../assets/images/x.png";

const UploadContainer = styled.div`
  display: flex;
  padding-top: 16px;
  gap: 13px;
  min-height: 100px;
`;

const UploadContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 100%;
`;

const SmallProfileImg = styled.div`
  background: url(${small_profile}) no-repeat;
  display: block;
  width: 42px;
  height: 42px;
`;

const UploadText = styled.textarea`
  width: 100%;
  height: 20vh;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const UploadContentImg = styled.div`
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
const UploadBtn = styled.button`
  background: url(${upload_button}) no-repeat;
  background-size: 90px;
  margin-left: auto;
  width: 90px;
  height: 32px;
`;

const UploadFileBtn = styled.button`
  display: inline-block;
  position: fixed;
  bottom: 16px;
  right: 16px;
  background: url(${upload_file}) no-repeat;
  background-size: 50px;
  width: 50px;
  height: 50px;
`;

const DeleteBtn = styled.button`
  position: relative;
  bottom: 205px;
  left: 270px;
  background: ${(props) => (props.uploadImg ? `url(${x})` : "")};
  background-size: 22px;
  width: 22px;
  height: 22px;
`;

export default function PostUpload() {
  let [uploadImg, setUploadImg] = useState(true);

  return (
    <div>
      <Header>
        <Prev />
        <UploadBtn />
      </Header>
      <MainContainer>
        <UploadContainer>
          <SmallProfileImg />
          <UploadContentWrapper>
            <UploadText placeholder="게시글 입력하기..." />

            <UploadContentImg uploadImg={uploadImg} />

            <DeleteBtn
              uploadImg={uploadImg}
              onClick={() => {
                setUploadImg((prev) => {
                  return !prev;
                });
              }}
            />
          </UploadContentWrapper>
          <UploadFileBtn />
        </UploadContainer>
      </MainContainer>
    </div>
  );
}
