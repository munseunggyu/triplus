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
import { useRef } from "react";
import * as S from "./style";

export default function PostDetail() {
  const { postkey } = useParams();
  const [comment, setComment] = useState([]);
  const [myPostData, setMyPostData] = useState();
  const token = localStorage.getItem("token");

  // UserPostDetail
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

  // Comment
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

  // comment 렌더링
  const [dropUpShow, setDropUpShow] = useState(false);
  // const [modalShow, setModalShow] = useState(false);
  const [isMy, setIsMy] = useState(false);
  const [commentId, setCommentId] = useState("");

  const clickedComment = useRef();

  // const removeComment = async () => {
  //   try {
  //     await axios.delete(
  //       `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments/${commentId}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-type": "application/json",
  //         },
  //       }
  //     );
  //     setCommentList();
  //   } catch (error) {
  //     console.log(error);
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
            key={data.id}
            // ref={clickedComment}
            data={data}
            // commentId={data.id}
            // setDropUpShow={setDropUpShow}
            // setIsMy={setIsMy}
            // setCommentId={setCommentId}
          />
        ))}
      </MainContainer>
      <CommentBar postkey={postkey} setCommentList={setCommentList} />
    </>
  );
}
