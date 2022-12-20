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

export default function PostDetail() {
  const token = localStorage.getItem("token");
  const { postkey } = useParams();
  const [comment, setComment] = useState([]);

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

  return (
    <>
      <Header>
        <Prev />
        <Vertical />
      </Header>
      <MainContainer>
        <UserPostDetail />
        <Comment />
      </MainContainer>
      <CommentBar postkey={postkey} setCommentList={setCommentList} />
    </>
  );
}
