import React, { useEffect, useRef, useState } from "react";
import PostCard from "../../components/PostCard";
import { Link, useParams } from "react-router-dom";
import * as S from "./style";
import { useGetData } from "../../hooks/useGetData";
import icon_img_layers from "../../assets/images/icon_img_layers.svg";
import { useObserver } from "../../hooks/useObserver";

export default function ProfileBottomSection() {
  const { accountname } = useParams();
  const [isAlbum, setIsAlbum] = useState(false);
  const {
    data: albumData,
    isLoading: albumLoading,
    getData: albumGetData,
  } = useGetData();
  const [trigger, setTrigger] = useState(false);

  const curRef = useRef(null);
  const {
    data,
    isLoading,
    getData,
    page,
    reloading,
    finishReload,
    setPage,
    setFinishReload,
  } = useObserver(curRef, 10);

  const listUrl = `${process.env.REACT_APP_API_KEY}/post/${accountname}/userpost/?limit=10&skip=${page}`;
  const albumUrl = `${process.env.REACT_APP_API_KEY}/post/${accountname}/userpost/?limit=50`;
  // const setTrigger = () => {
  //   setPage(0);
  // };
  const handleAlbum = () => {
    albumGetData(albumUrl, "post");
    setIsAlbum(true);
  };
  useEffect(() => {
    setPage(0);
    setFinishReload(false);
  }, [accountname]);

  useEffect(() => {
    if (!finishReload) {
      getData(listUrl, "post");
    }
  }, [page, accountname, trigger]);

  return (
    <section>
      <h2 className="ir">사용자가 작성한 게시글</h2>
      <S.ProfileBottomSectionBtns>
        <S.PostListIcon isAlbum={isAlbum} onClick={() => setIsAlbum(false)} />
        <S.PostAlbumtIcon isAlbum={isAlbum} onClick={handleAlbum} />
      </S.ProfileBottomSectionBtns>
      <S.Line />
      <S.CardContainer isAlbum={isAlbum}>
        {isLoading ? null : isAlbum ? (
          albumLoading !== true &&
          albumData
            .filter((post) => post.image)
            .map((post) => {
              console.log(post.image.split(",").length);
              return (
                <S.AlbumLi key={post.id}>
                  <Link to={`/postdetail/${post.id}`}>
                    <S.AlbumImage
                      src={post.image.split(",")[0]}
                      alt={post.content}
                    />
                  </Link>
                  {post.image.split(",").length > 1 && (
                    <S.AlbumLayers src={icon_img_layers} />
                  )}
                </S.AlbumLi>
              );
            })
        ) : (
          <>
            {data.map((post) => {
              return (
                <PostCard key={post.id} setTrigger={setTrigger} {...post} />
              );
            })}
            <div ref={curRef}></div>
          </>
        )}

        {reloading && !isLoading && <S.ReLoading>Loading...</S.ReLoading>}
      </S.CardContainer>
    </section>
  );
}
