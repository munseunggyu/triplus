import Header from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import Vertical from "../../components/Header/Vertical";
import Prev from "../../components/Header/Prev";
import CommentBar from "../../components/CommentBar";
import Comment from "./Comment";
import UserPostDetail from "./UserPostDetail";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import PostModal from "../../components/PostModal";

export default function PostDetail() {
  const { postkey } = useParams();
  const [comment, setComment] = useState([]);
  const [commentId, setCommentId] = useState("");
  const [myPostData, setMyPostData] = useState();
  const [commentModal, setCommentModal] = useState(false);
  const token = localStorage.getItem("token");

  // 게시글 불러오기
  const getPostData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_KEY}/post/${postkey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      return res.data.post;
    } catch (error) {
      console.log(error);
    }
  };
  const setPostData = async () => {
    const res = await getPostData();
    setMyPostData(res);
  };

  useEffect(() => {
    setPostData();
  }, []);

  // 댓글 리스트 불러오기

  const setCommentList = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      const data = res.data.comments;
      setComment(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setCommentList();
  }, []);

  // 댓글 삭제하기

  // const deleteComment = async (commentId) => {
  //   try {
  //     const res = await axios.delete(
  //       `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments/${commentId}`,
  //       {
  //         header: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-type": "application/json",
  //         },
  //       }
  //     );
  //     // setCommentList();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

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
            setCommentModal={setCommentModal}
            commentModal={commentModal}
          />
        ))}
      </MainContainer>
      <CommentBar postkey={postkey} setCommentList={setCommentList} />
      {commentModal && <PostModal />}
    </>
  );
}
