import axios from "axios";
import { useState } from "react";

export const useGetData = () => {
  const [data, setData] = useState(null);
  const [isLoding, setIsLoding] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));

  const getData = async (url) => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-type": "application/json",
        },
      });
      setData(res.data);
      setIsLoding(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { data, isLoding, setData, getData };
};
