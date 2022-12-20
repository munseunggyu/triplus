import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostCard from "../../components/PostCard";
import axios from "axios";
import { useParams } from "react-router-dom";

// 임시토큰
export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWE4MzBkMTdhZTY2NjU4MWM2MDY3OSIsImV4cCI6MTY3NjI1NDU5MSwiaWF0IjoxNjcxMDcwNTkxfQ.gNfhq23b6vEXTbhi4AOOkVN6yAErJBvyUtcX1URypNE";

const CardContainer = styled.div`
  padding: 0 21px;
`;

const Line = styled.div`
  margin: 0 auto;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  width: 400px;
`;

export default function UserPostDetail() {
  const token = localStorage.getItem("token");
  const [myPostData, setMyPostData] = useState();
  const { postkey } = useParams();
  const getPostData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_KEY}/post/${postkey}`,
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

  if (myPostData) {
    return (
      <section>
        <h2 className="ir">사용자가 작성한 게시글</h2>
        <CardContainer>
          <PostCard {...myPostData} />
          <Line />
        </CardContainer>
      </section>
    );
  }
}
