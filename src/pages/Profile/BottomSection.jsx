import React, { useEffect, useState } from "react";
import css_sprite from "../../assets/images/css_sprites.png";
import styled from "styled-components";
import PostCard from "../../components/PostCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProfileBottomSectionBtns = styled.div`
  width: 390px;
  padding: 12px 0;
  margin: 0 auto;
  text-align: end;
`;
const PostAlbumtIcon = styled.button`
  width: 26px;
  height: 26px;
  background: url(${css_sprite}) -10px -10px;
`;
const PostListIcon = styled.button`
  width: 26px;
  height: 26px;
  background: url(${css_sprite}) -56px -56px;
`;
const Line = styled.div`
  margin-bottom: 16px;
  border-bottom: 2px solid #f2f2f2;
`;
const CardContainer = styled.div`
  padding: 0 21px;
`;
export default function ProfileBottomSection() {
  const [myPostData, setMyPostData] = useState([]);
  const token = localStorage.getItem("token");
  const { accountname } = useParams();

  const getPostData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_KEY}/post/${accountname}/userpost`,
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
  return (
    <section>
      <h2 className="ir">사용자가 작성한 게시글</h2>
      <ProfileBottomSectionBtns>
        <PostListIcon />
        <PostAlbumtIcon />
      </ProfileBottomSectionBtns>
      <Line />
      <CardContainer>
        {myPostData.map((post) => {
          return <PostCard key={post.id} {...post} />;
        })}
      </CardContainer>
    </section>
  );
}
