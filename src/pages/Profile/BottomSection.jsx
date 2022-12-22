import React, { useEffect, useState } from "react";
import css_sprite from "../../assets/images/css_sprites.png";
import styled from "styled-components";
import PostCard from "../../components/PostCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";

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
  const { accountname } = useParams();
  const { data, isLoding, getData } = useGetData();
  const [trigger, setTrigger] = useState(false);
  const url = `${process.env.REACT_APP_API_KEY}/post/${accountname}/userpost`;

  useEffect(() => {
    getData(url);
  }, [accountname, trigger]);
  return isLoding ? null : (
    <section>
      <h2 className="ir">사용자가 작성한 게시글</h2>
      <ProfileBottomSectionBtns>
        <PostListIcon />
        <PostAlbumtIcon />
      </ProfileBottomSectionBtns>
      <Line />
      <CardContainer>
        {data.post.map((post) => {
          return <PostCard key={post.id} setTrigger={setTrigger} {...post} />;
        })}
      </CardContainer>
    </section>
  );
}
