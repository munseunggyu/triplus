import axios from "axios";
import { useState } from "react";
import * as S from "./style";
import user_img_small from "../../assets/images/user_img_small.svg";

export default function CommentBar({ postkey, setCommentList }) {
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));

  const [txt, setTxt] = useState("");

  const handlePostComment = (e) => {
    setTxt(e.target.value);
  };

  const postComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments`,
        {
          comment: {
            content: txt,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
            "Content-type": "application/json",
          },
        }
      );
      console.log(res.data);
      setCommentList();
      setTxt("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <S.CommentContainer>
      <S.CommentForm onSubmit={postComment}>
        <S.CommentProfileImg src={user_img_small} alt="사용자 이름" />
        <S.CommentInput
          type="text"
          placeholder="댓글 입력하기..."
          onChange={handlePostComment}
          value={txt}
        />
        <S.CommentBtn txt={txt}>게시</S.CommentBtn>
      </S.CommentForm>
    </S.CommentContainer>
  );
}
