import React, { useEffect, useRef, useState } from "react";
import css_sprite from "../../assets/images/css_sprites.png";
import styled from "styled-components";
import PostCard from "../../components/PostCard";
import { useParams } from "react-router-dom";
import { useReloadData } from "../../hooks/useReloadData";
import * as S from "./style";

export default function ProfileBottomSection() {
  const { accountname } = useParams();
  const bottomRef = useRef(null);
  const { skip, bottomBoolean, data, isLoding, bottomScroll, getData } =
    useReloadData(bottomRef, 800);
  const [trigger, setTrigger] = useState(false);
  const url = `${process.env.REACT_APP_API_KEY}/post/${accountname}/userpost/?limit=10&skip=${skip}`;
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
      <S.ProfileBottomSectionBtns>
        <S.PostListIcon />
        <S.PostAlbumtIcon />
      </S.ProfileBottomSectionBtns>
      <S.Line />
      <S.CardContainer ref={bottomRef}>
        {data.post.map((post) => {
          return <PostCard key={post.id} setTrigger={setTrigger} {...post} />;
        })}
      </S.CardContainer>
    </section>
  );
}
