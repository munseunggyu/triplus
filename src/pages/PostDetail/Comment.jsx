import * as S from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalContainer from "../../components/Modal/ModalContainer";
import ModalList from "../../components/Modal/ModalList";
import AlertModal from "../../components/Modal/AlertModal";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Comment({ data, commentId, setCommentList }) {
  const { postkey } = useParams();
  const token = localStorage.getItem("token");
  const [isModal, setIsModal] = useState(false);
  const [isMyComment, setIsMyComment] = useState(true);
  const [isModalAlert, setIsModalAlert] = useState(false);

  const detailDate = (time) => {
    const milliSeconds = new Date() - time;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };

  const nowDate = detailDate(new Date(data.createdAt));

  const accountName = "zesfnkse.fe";

  const handleModal = (e) => {
    setIsModal(!isModal);
    if (accountName !== data.author.accountname) {
      setIsMyComment(false);
    }
  };

  const handleAlert = (e, txt) => {
    e.stopPropagation();
    setIsModalAlert(txt);
  };

  const handlCloseClick = () => {
    setIsModalAlert(false);
    setIsModal(false);
  };

  const handleDeleteComment = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      setCommentList();
      setIsModal(false);
      setIsModalAlert(false);
      alert("댓글이 삭제되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeclaration = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments/${commentId}/report`,
        {
          report: {
            comment: `${commentId}`,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      console.log(res);
      setCommentList();
      setIsModal(false);
      setIsModalAlert(false);
      alert("댓글 신고가 완료되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <S.CommentList>
        <Link to={`/profile/${data.author.accountname}`}>
          <S.CommentImg src={data.author.image} />
        </Link>
        <div>
          <S.CommentUserName>
            {data.author.username}
            <S.CommentTime>· {nowDate}</S.CommentTime>
          </S.CommentUserName>
          <S.CommentTxt>{data.content}</S.CommentTxt>
          <S.CommentVertical onClick={handleModal}>
            <span className="ir">더보기 버튼</span>
          </S.CommentVertical>
        </div>
      </S.CommentList>
      {isModal && (
        <ModalContainer onClick={handleModal}>
          {isMyComment ? (
            <>
              <ModalList onClick={(e) => handleAlert(e, "삭제모달")}>
                삭제
              </ModalList>
            </>
          ) : (
            <ModalList onClick={(e) => handleAlert(e, "신고모달")}>
              신고
            </ModalList>
          )}
        </ModalContainer>
      )}
      {isModalAlert !== false ? (
        isModalAlert === "삭제모달" ? (
          <AlertModal
            title="댓글을 삭제할까요?"
            submitText="댓글 삭제"
            onCloseClick={handlCloseClick}
            onSubmitClick={handleDeleteComment}
          />
        ) : (
          <AlertModal
            title="댓글을 신고하시겠어요?"
            submitText="댓글 신고"
            onCloseClick={handlCloseClick}
            onSubmitClick={handleDeclaration}
          />
        )
      ) : null}
    </>
  );
}
