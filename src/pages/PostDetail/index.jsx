import Header from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import Vertical from "../../components/Header/Vertical";
import Prev from "../../components/Header/Prev";
import CommentBar from "../../components/CommentBar";
import Comment from "./Comment";
import UserPostDetail from "./UserPostDetail";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGetCommentList } from "../../hooks/useGetCommentList";
import { useGetPostData } from "../../hooks/useGetPostData";

export default function PostDetail() {
  const { postkey } = useParams();
  const { comment, setCommentList } = useGetCommentList();
  const { setPostData, myPostData } = useGetPostData();

  useEffect(() => {
    setPostData();
  }, []);

  useEffect(() => {
    setCommentList();
  }, []);

  return (
    <>
      <Header>
        <Prev />
        <Vertical />
      </Header>
      <MainContainer>
        <UserPostDetail myPostData={myPostData} />
        {comment.map((data) => (
          <Comment
            data={data}
            commentId={data.id}
            setCommentList={setCommentList}
          />
        ))}
      </MainContainer>
      <CommentBar postkey={postkey} setCommentList={setCommentList} />
    </>
  );
}
