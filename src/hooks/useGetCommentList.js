import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const useGetCommentList = () => {
  const token = localStorage.getItem("token");
  const { postkey } = useParams();
  const [comment, setComment] = useState([]);

  const setCommentList = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_KEY}/post/${postkey}/comments`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      const data = res.data.comments;
      setComment(data);
    } catch (err) {
      console.error(err);
    }
  };

  return { comment, setComment, setCommentList };
};
