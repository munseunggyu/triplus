import axios from "axios";
import { useState } from "react";

export const useCommentReloadGetData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const [page, setPage] = useState(5);
  const [reloading, setReloading] = useState(false);
  const [finishReload, setFinishReload] = useState(false);

  const loadMore = () => setPage((prev) => prev + 3);

  const getData = async (url, name) => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-type": "application/json",
        },
      });
      name ? setData(res.data[name]) : setData(res.data);

      setIsLoading(false);
      setReloading(true);
    } catch (error) {
      console.log(error);
    }
  };

  return { data, isLoading, setData, getData, loadMore, page, reloading };
};
