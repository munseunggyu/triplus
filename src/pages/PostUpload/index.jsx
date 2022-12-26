import React, { useRef, useEffect } from "react";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import { MainContainer } from "../../components/MainContainer";
import axios from "axios";
import * as S from "./style";
import PreviewList from "./PreviewList";
import { useLocation } from "react-router-dom";
import { useGetPreview } from "../../hooks/useGetPreview";
import { usePostUpload } from "../../hooks/usePostUpload";

const PostUpload = () => {
  const location = useLocation();
  const textRef = useRef();
  const fileRef = useRef();
  const { isActive, setIsActive, previewImgUrl, setPreviewImgUrl, getPreview } =
    useGetPreview();
  const { fileName, setFileName, txt, setTxt, handlePostUpload } =
    usePostUpload();

  const handleResizeHeight = () => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };

  const handleText = (e) => {
    setTxt(e.target.value);
    txt !== "" ? setIsActive(true) : setIsActive(false);
  };

  const handleFile = () => {
    fileRef.current.click();
  };

  // 이미지 파일 업로드
  const handleImgInput = (e) => {
    const loadImg = e.target.files;
    const formData = new FormData();
    formData.append("image", loadImg[0]);
    fileName.length === 0
      ? getImgUrl(formData, loadImg)
      : alert("이미지는 1장만 업로드 가능합니다.");
  };

  // 이미지 파일 스트링 데이터 얻기
  const getImgUrl = async (formData, loadImg) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/image/uploadfiles`,
        formData
      );
      setFileName([
        ...fileName,
        `${process.env.REACT_APP_API_KEY}/${res.data[0].filename}`,
      ]);
      getPreview(loadImg);
    } catch (err) {
      console.error(err);
    }
  };

  // 프리뷰 및 데이터 삭제
  const handleDeletePreview = (e) => {
    setPreviewImgUrl(
      previewImgUrl.filter((_, index) => e.target.id !== String(index))
    );
    setFileName(fileName.filter((_, index) => e.target.id !== String(index)));

    if (textRef.current.value.length === 0 && fileName.length <= 1) {
      setIsActive(false);
    }

    fileRef.current.value = "";
  };
  useEffect(() => {
    if (location.state) {
      location.state.content && setTxt(location.state.content);
      if (location.state.image) {
        setFileName([location.state.image]);
        setPreviewImgUrl([location.state.image]);
      }
    }
  }, []);
  return (
    <div>
      <Header>
        <Prev />
        <S.UploadBtn onClick={handlePostUpload} isActive={isActive}>
          업로드
        </S.UploadBtn>
      </Header>

      <MainContainer>
        <S.UploadContainer>
          <S.UploadProfileImg />
          <S.UploadContentForm onSubmit={handlePostUpload}>
            <S.UploadText
              name="textarea-uploadpost"
              placeholder="게시글 입력하기..."
              onChange={handleText}
              onInput={handleResizeHeight}
              value={txt}
              ref={textRef}
              maxLength="2000"
            />
            <PreviewList
              mapData={previewImgUrl}
              onClick={handleDeletePreview}
            />
          </S.UploadContentForm>
          <S.UploadFileForm>
            <S.UploadFileImg onClick={handleFile} />
            <input
              type="file"
              className="ir"
              id="post-upload-file"
              accept="image/*"
              ref={fileRef}
              onChange={handleImgInput}
              // multiple // 이미지 3개 이상
            />
          </S.UploadFileForm>
        </S.UploadContainer>
      </MainContainer>
    </div>
  );
};

export default PostUpload;
