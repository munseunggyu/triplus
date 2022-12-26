import React, { useEffect, useRef, useState } from "react";
import css_sprite from "../../assets/images/css_sprites.png";
import styled from "styled-components";
import PostCard from "../../components/PostCard";
import { useParams } from "react-router-dom";
import { useReloadData } from "../../hooks/useReloadData";

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
const CardContainer = styled.ul`
  padding: 0 21px;
`;
export default function ProfileBottomSection() {
  const { accountname } = useParams();
  const bottomRef = useRef(null);
  const [isAlbum, setIsAlbum] = useState(false);
  const { skip, bottomBoolean, data, isLoding, bottomScroll, getData } =
    useReloadData(bottomRef, 800);
  const [trigger, setTrigger] = useState(false);
  const url = `${process.env.REACT_APP_API_KEY}/post/${accountname}/userpost/?limit=10&skip=${skip}`;
  console.log(isAlbum);
  useEffect(() => {
    if (bottomBoolean) {
      getData(url, true);
    }
    if (!bottomRef.current) return;
    window.addEventListener("scroll", bottomScroll);
    return () => {
      window.removeEventListener("scroll", bottomScroll);
    };
  }, [accountname, trigger, bottomBoolean]);

  return isLoding ? null : (
    <section>
      <h2 className="ir">사용자가 작성한 게시글</h2>
      <ProfileBottomSectionBtns>
        <PostListIcon onClick={() => setIsAlbum(false)} />
        <PostAlbumtIcon onClick={() => setIsAlbum(true)} />
      </ProfileBottomSectionBtns>
      <Line />
      <CardContainer ref={bottomRef}>
        {data.post.map((post) => {
          return <PostCard key={post.id} setTrigger={setTrigger} {...post} />;
        })}
      </CardContainer>
    </section>
  );
}
