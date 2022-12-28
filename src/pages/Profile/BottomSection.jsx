import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import PostCard from "../../components/PostCard";
import { Link, useParams } from "react-router-dom";
import { useReloadData } from "../../hooks/useReloadData";
import * as S from "./style";
import { useGetData } from "../../hooks/useGetData";

export default function ProfileBottomSection() {
  const { accountname } = useParams();
  const bottomRef = useRef(null);
  const {
    skip,
    bottomBoolean,
    data,
    isLoading,
    bottomScroll,
    getData,
    reloadLoding,
  } = useReloadData(bottomRef, 776);
  const [isAlbum, setIsAlbum] = useState(false);
  const {
    data: albumData,
    isLoding: albumLoading,
    getData: albumGetData,
  } = useGetData();
  const [trigger, setTrigger] = useState(false);
  const listUrl = `${process.env.REACT_APP_API_KEY}/post/${accountname}/userpost/?limit=10&skip=${skip}`;
  const albumUrl = `${process.env.REACT_APP_API_KEY}/post/${accountname}/userpost/?limit=50`;

  useLayoutEffect(() => {
    getData(listUrl, true);
  }, [trigger]);

  useEffect(() => {
    if (isAlbum) {
      albumGetData(albumUrl);
    } else {
      if (bottomBoolean) {
        getData(listUrl, true);
      }
      if (!bottomRef.current) return;
      window.addEventListener("scroll", bottomScroll);
      return () => {
        window.removeEventListener("scroll", bottomScroll);
      };
    }
  }, [accountname, trigger, bottomBoolean, isAlbum]);
  return (
    <section>
      <h2 className="ir">사용자가 작성한 게시글</h2>
      <S.ProfileBottomSectionBtns>
        <S.PostListIcon isAlbum={isAlbum} onClick={() => setIsAlbum(false)} />
        <S.PostAlbumtIcon isAlbum={isAlbum} onClick={() => setIsAlbum(true)} />
      </S.ProfileBottomSectionBtns>
      <S.Line />
      <S.CardContainer isAlbum={isAlbum} ref={bottomRef}>
        {isLoading
          ? null
          : isAlbum
          ? albumLoading !== true &&
            albumData.post
              .filter((post) => post.image)
              .map((post) => {
                return (
                  <S.AlbumLi key={post.id}>
                    <Link to={`/postdetail/${post.id}`}>
                      <S.AlbumImage src={post.image} alt={post.content} />
                    </Link>
                  </S.AlbumLi>
                );
              })
          : data.post.map((post) => {
              return (
                <PostCard key={post.id} setTrigger={setTrigger} {...post} />
              );
            })}
        {!reloadLoding && <S.ReLoading>Loading...</S.ReLoading>}
      </S.CardContainer>
    </section>
  );
}
