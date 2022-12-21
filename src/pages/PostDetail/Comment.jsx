import * as S from "./style";
import { Link } from "react-router-dom";

export default function Comment({ data, setCommentModal }) {
  const handleCommentModal = () => {
    setCommentModal(true);
  };

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

  return (
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
        <S.CommentVertical onClick={handleCommentModal}>
          <span className="ir">더보기 버튼</span>
        </S.CommentVertical>
      </div>
    </S.CommentList>
  );
}
