import axios from "axios";
import { useState } from "react";

export const useReloadData = (bottomRef, height) => {
  const [data, setData] = useState(null);
  const [isLoding, setIsLoding] = useState(true);
  const [skip, setSkip] = useState(0);
  const [bottomBoolean, setBoottomBoolean] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));

  const bottomScroll = () => {
    const targetHeight = Math.floor(
      bottomRef.current.getBoundingClientRect().height
    );
    const currentScrollY = Math.floor(
      window.scrollY + window.innerHeight - height
    );
    if (targetHeight - currentScrollY !== 0) {
      setBoottomBoolean(false);
    } else {
      setBoottomBoolean(true);
      setSkip((prev) => prev + 5);
    }
  };

  const getData = async (url, isMy) => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-type": "application/json",
        },
      });
      if (skip === 0) {
        setData((prev) => {
          return res.data;
        });
      } else {
        isMy
          ? setData((prev) => {
              return { post: [...prev.post, ...res.data.post] };
            })
          : setData((prev) => {
              return { posts: [...prev.posts, ...res.data.posts] };
            });
      }
      setIsLoding(false);
      setBoottomBoolean(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { skip, bottomBoolean, data, isLoding, bottomScroll, getData };
};
