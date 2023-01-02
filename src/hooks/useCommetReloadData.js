import axios from "axios";
import { useState } from "react";

export const useCommentReloadData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [bottomBoolean, setBoottomBoolean] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const [reloadLoding, setReLoadLoading] = useState(true);
  const [finishReload, setFinishReload] = useState(false);

  const bottomScroll = () => {
    const { scrollHeight } = document.documentElement;
    const { scrollTop } = document.documentElement;
    const { clientHeight } = document.documentElement;
    if (scrollTop >= scrollHeight - clientHeight) {
      setBoottomBoolean(true);
      setSkip((prev) => prev + 10);
      console.log(skip);
    } else {
      setBoottomBoolean(false);
    }
  };

  const getData = async (url, isMy) => {
    if (finishReload) {
      setReLoadLoading(false);
      return;
    }
    if (!isLoading) {
      setReLoadLoading(true);
    }
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-type": "application/json",
        },
      });

      if (skip === 0) {
        setData((prev) => {
          return res.data.comments;
        });
        console.log(data);
      } else {
        if (isMy === "댓글") {
          setData((prev) => {
            return [...prev, ...res.data.comments];
            // return { comment: [...prev, ...res.data.comments] };
            // return { content: [...prev, ...res.data.comments] };
          });
          console.log(data);
        }
      }

      if (isMy === "댓글") {
        if (res.data.comments.length === 0) {
          setFinishReload(true);
        }
      }

      setIsLoading(false);
      setReLoadLoading(false);
      setBoottomBoolean(false);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    skip,
    bottomBoolean,
    data,
    isLoading,
    bottomScroll,
    getData,
    reloadLoding,
  };
};
