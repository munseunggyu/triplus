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
    setFinishReload,
    setData,
    setPage,
  } = useObserver(reloadRef, 8);
  const postUrl = `${process.env.REACT_APP_API_KEY}/post/${postkey}`;
  const commentUrl = `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments/?limit=8&skip=${page}`;
  const [trigger, setTrigger] = useState(false);

  console.log(commentData);
  useEffect(() => {
    postGetData(postUrl, "post");
    setPage(0);
    setFinishReload(false);
  }, [trigger]);
  useEffect(() => {
    console.log(finishReload);
    if (!finishReload) {
      commentGetData(commentUrl, "comments");
    }
  }, [page, trigger, finishReload]);

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
                    data={mapData}
                    commentId={mapData.id}
                    setTrigger={setTrigger}
                  />
                ))}
                <div ref={reloadRef} />
              </>
            )
          )}
        </MainContainer>
      )}
      <CommentBar
        postkey={postkey}
        setCommentList={setData}
        // setFinishReload={setFinishReload}
      />
    </>
  );
}
