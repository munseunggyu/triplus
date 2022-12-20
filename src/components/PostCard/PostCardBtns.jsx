import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";

const PostCardHeartChatCon = styled.div`
  margin-top: 14px;
  display: flex;
  margin-bottom: 18px;
`;

const PostCardLikeBtn = styled.button`
  margin-right: 10px;
  display: flex;
  align-items: center;
  span {
    color: ${(props) => props.theme.grayColor};
  }
  &::before {
    content: "";
    display: block;
    margin-right: 5px;
    width: 20px;
    height: 20px;
    background: ${(props) =>
      props.hearted
        ? `url(${css_sprite}) -234px -10px`
        : `url(${css_sprite}) -50px -190px`};
  }
`;
const PostCardChatLink = styled(Link)`
  display: flex;
  align-items: center;
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background: url(${css_sprite}) -90px -190px;
  }
  span {
    color: ${(props) => props.theme.grayColor};
    margin-top: 3px;
  }
`;

export default function PostCardBtns({
  commentCount,
  hearted,
  heartCount,
  postkey,
}) {
  const token = localStorage.getItem("token");
  const [heartTotal, setHeartTotal] = useState(heartCount);
  const [heartBool, setHeartBool] = useState(hearted);

  const handleHeart = async () => {
    try {
      if (heartBool === true) {
        const res = await axios.delete(
          `${process.env.REACT_APP_API_KEY}/post/${postkey}/unheart`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          }
        );
        console.log(res.data.post);
        setHeartBool(res.data.post.hearted);
        setHeartTotal(res.data.post.heartCount);
        console.log("완");
        // setChangeHeart((prev) => !prev);
        // setIsFollow(false);
        // isActiveFollowBtn((prev) => !prev);
      } else {
        const res = await axios.post(
          `${process.env.REACT_APP_API_KEY}/post/${postkey}/heart`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          }
        );
        console.log("완1");
        setHeartBool(res.data.post.hearted);
        setHeartTotal(res.data.post.heartCount);
        // setChangeHeart((prev) => !prev);

        // setIsFollow(true);
        // isActiveFollowBtn((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PostCardHeartChatCon>
      <PostCardLikeBtn onClick={handleHeart} hearted={heartBool}>
        <span className="ir">좋아요 버튼</span>
        <span> {heartTotal} </span>
      </PostCardLikeBtn>

      <PostCardChatLink to="/">
        <span className="ir">댓글창으로 이동</span>
        <span> {commentCount} </span>
      </PostCardChatLink>
    </PostCardHeartChatCon>
  );
}
