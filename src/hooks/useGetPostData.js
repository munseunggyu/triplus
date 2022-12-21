import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const useGetPostData = () => {
  const token = localStorage.getItem("token");
  const { postkey } = useParams();
  const [myPostData, setMyPostData] = useState();

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

  return { getPostData, setPostData, myPostData };
};
