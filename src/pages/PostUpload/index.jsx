import React, { useState, useRef } from "react";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import { MainContainer } from "../../components/MainContainer";
import axios from "axios";
import * as S from "./style";

export default function PostUpload() {
  const [uploadImg, setUploadImg] = useState(true);
  const [fileName, setFileName] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const textRef = useRef();
  const fileRef = useRef();
  const token = localStorage.getItem("token");
  function handleResizeHeight() {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }

  function handleText(e) {
    e.target.value ? setIsActive(true) : setIsActive(false);
  }

  function handleFile() {
    fileRef.current.click();
  }

  // 업로드 버튼 클릭 시 게시글 POST
  function handleSubmit(e) {
    e.preventDefault();

    async function sendPost() {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_KEY}/post`,
          {
            post: {
              content: textRef.current.value,
              image: fileName.join(","),
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          }
        );
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    sendPost();
  }

  return (
    <div>
      <Header>
        <Prev />
        <S.UploadBtn onClick={handleSubmit} isActive={isActive}>
          업로드
        </S.UploadBtn>
      </Header>

      <MainContainer>
        <S.UploadContainer>
          <S.UploadProfileImg />
          <S.UploadContentForm onSubmit={handleSubmit}>
            <S.UploadText
              name="textarea-uploadpost"
              placeholder="게시글 입력하기..."
              onChange={handleText}
              onInput={handleResizeHeight}
              ref={textRef}
              maxLength="2000"
            />
            <S.UploadContentImg uploadImg={uploadImg} />
            <S.DeleteBtn
              uploadImg={uploadImg}
              onClick={() => {
                setUploadImg((prev) => {
                  return !prev;
                });
              }}
            />
          </S.UploadContentForm>
          <S.UploadFileForm>
            <S.UploadFileImg onClick={handleFile} />
            <input
              type="file"
              className="ir"
              id="post-upload-file"
              accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
              ref={fileRef}
              // multiple // 이미지 3개 이상
            />
          </S.UploadFileForm>
        </S.UploadContainer>
      </MainContainer>
    </div>
  );
}
