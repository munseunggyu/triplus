import Header from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import Vertical from "../../components/Header/Vertical";
import Prev from "../../components/Header/Prev";
import CommentBar from "../../components/CommentBar";
import Comment from "./Comment";
import UserPostDetail from "./UserPostDetail";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import LoadingPage from "../LoadingPage";
import * as S from "./style";
import { useCommentReloadGetData } from "../../hooks/useCommentReloadGetData";
import { useObserver } from "../../hooks/useObserver";

export default function PostDetail() {
  const { postkey } = useParams();
  const reloadRef = useRef(null);
  const {
    data: postData,
    getData: postGetData,
    isLoading: postIsLoading,
  } = useGetData();
  const {
    data: commentData,
    getData: commentGetData,
    isLoading: commentIsLoading,
    page,
    reloading,
    loadMore,
    setReloading,
    finishReload,
  } = useObserver(reloadRef, 5);
  const postUrl = `${process.env.REACT_APP_API_KEY}/post/${postkey}`;
  const commentUrl = `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments/?limit=5&skip=${page}`;
  const [trigger, setTrigger] = useState(false);
  const setCommentList = async () => {
    const res = await commentGetData(commentUrl, "comments");
  };

  useEffect(() => {
    postGetData(postUrl, "post");
  }, [trigger]);
  useEffect(() => {
    if (!finishReload) {
      commentGetData(commentUrl, "comments");
    }
  }, [page, trigger]);

  // useEffect(() => {
  //   let observer;
  //   if (reloading) {
  //     observer = new IntersectionObserver(
  //       (entries) => {
  //         if (entries[0].isIntersecting) {
  //           loadMore();
  //         }
  //       },
  //       { threshold: 1 }
  //     );
  //     observer.observe(reloadRef.current);
  //   }
  // }, [reloading]);

  return (
    <>
      <Header>
        <Prev />
        <Vertical />
      </Header>
      {commentIsLoading || postIsLoading ? (
        <LoadingPage />
      ) : (
        <MainContainer>
          {postData && <UserPostDetail myPostData={postData} />}
          {commentIsLoading ? (
            <LoadingPage />
          ) : (
            commentData && (
              <>
                {commentData.map((mapData) => (
                  <Comment
                    key={mapData.id}
                    data={mapData}
                    commentId={mapData.id}
                    setTrigger={setTrigger}
                  />
                ))}
                <div ref={reloadRef} />
              </>
            )
          )}

          {/* {reloading && <S.ReLoading ref={reloadRef}>Loading</S.ReLoading>} */}
        </MainContainer>
      )}
      <CommentBar postkey={postkey} setCommentList={setCommentList} />
    </>
  );
}
