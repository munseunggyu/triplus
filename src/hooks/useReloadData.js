import axios from "axios";
import { useState } from "react";

export const useReloadData = (bottomRef, height) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [bottomBoolean, setBoottomBoolean] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const [reloadLoding, setReLoadLoading] = useState(false);
  const [finishReload, setFinishReload] = useState(false);

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
      setSkip((prev) => prev + 10);
    }
  };

  const getData = async (url, isMy) => {
    if (finishReload) {
      setReLoadLoading(true);
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
      if (isMy) {
        if (res.data.post.length === 0) {
          setFinishReload(true);
        }
      } else {
        if (res.data.posts.length === 0) {
          setFinishReload(true);
        }
      }
      setIsLoading(false);
      if (!isLoading) {
        setReLoadLoading(false);
      }
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
