import * as S from "./style";
import { useState } from "react";
import axios from "axios";

export default function Comment({
  data,
  isMyComment,
  setDropUpShow,
  setIsMy,
  setCommentId,
}) {
  return (
    <S.CommentList>
      <S.CommentImg src={data.author.image} />
      <div>
        <S.CommentUserName>{data.author.username}</S.CommentUserName>
        <S.CommentTxt>{data.content}</S.CommentTxt>
        <S.CommentTime></S.CommentTime>
        <S.CommentVertical>
          <span className="ir">더보기 버튼</span>
        </S.CommentVertical>
      </div>
    </S.CommentList>
  );
}
