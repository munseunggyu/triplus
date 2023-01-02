import Header from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import Vertical from "../../components/Header/Vertical";
import Prev from "../../components/Header/Prev";
import CommentBar from "../../components/CommentBar";
import Comment from "./Comment";
import UserPostDetail from "./UserPostDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import LoadingPage from "../LoadingPage";
import { useLayoutEffect } from "react";
import { useCommentReloadData } from "../../hooks/useCommetReloadData";
import * as S from "./style";

export default function PostDetail() {
  const { postkey } = useParams();
  const { data: postData, getData: postGetData } = useGetData();
  const {
    skip,
    bottomBoolean,
    data,
    isLoading,
    bottomScroll,
    getData,
    reloadLoding,
  } = useCommentReloadData();
  const postUrl = `${process.env.REACT_APP_API_KEY}/post/${postkey}`;
  const commentReloadUrl = `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments/?limit=10&skip=${skip}`;
  const [trigger, setTrigger] = useState(false);

  const setCommentList = async () => {
    const res = await getData(commentReloadUrl, "댓글");
    console.log(res);
  };

  useEffect(() => {
    postGetData(postUrl, "post");
    setCommentList();
    console.log(data);
  }, [trigger]);

  useLayoutEffect(() => {
    getData(commentReloadUrl, "댓글");
    console.log(data);
  }, []);

  useEffect(() => {
    if (bottomBoolean) {
      getData(commentReloadUrl, "댓글");
      // setCommentList();
    }
    window.addEventListener("scroll", bottomScroll);
    return () => {
      window.removeEventListener("scroll", bottomScroll);
    };
  }, [bottomBoolean]);

  return (
    <>
      <Header>
        <Prev />
        <Vertical />
      </Header>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <MainContainer>
          {postData && <UserPostDetail myPostData={postData} />}
          {data &&
            data?.map((mapData) => (
              <Comment
                key={mapData.id}
                data={mapData}
                commentId={mapData.id}
                setTrigger={setTrigger}
              />
            ))}

          {reloadLoding && !isLoading && <S.ReLoading>Loading...</S.ReLoading>}
        </MainContainer>
      )}
      <CommentBar postkey={postkey} setCommentList={setCommentList} />
    </>
  );
}
