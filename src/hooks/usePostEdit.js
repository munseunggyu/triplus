import axios from "axios";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export const usePostEdit = () => {
  const location = useLocation();
  const [txt, setTxt] = useState("");
  const { postid } = useParams();
  const editUrl = `${process.env.REACT_APP_API_KEY}/post/${postid}`;
  const token = localStorage.getItem("token");
  const [fileName, setFileName] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        editUrl,
        {
          post: {
            content: txt,
            image: fileName.join(","),
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
    // navigate(`/profile/${accountname}`);
    // navigate(`/`);
  };

  return { fileName, setFileName, txt, setTxt, handleSubmit };
};
