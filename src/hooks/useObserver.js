import axios from "axios";
import { useState } from "react";

export const useObserver = (setData, name, curRef) => {
  const [skip, setSkip] = useState(10);
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const [unObserve, setUnObserve] = useState(false);
  const url = `${process.env.REACT_APP_API_KEY}/post/feed/?limit=10&skip=${skip}`;

  const getDataa = async (url, name) => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-type": "application/json",
        },
      });
      return res.data[name];
    } catch (error) {
      console.log(error);
    }
  };

  const onIntersect = async (entry, observer) => {
    if (entry.isIntersecting) {
      console.log("h");
      observer.unobserve(entry.target);
      setSkip((prev) => prev + 10);
      const hi = await getDataa(url, name);
      if (hi.length === 0) {
        setUnObserve(true);
      }
      setData((prev) => {
        return [...prev, ...hi];
      });
    }
  };

  return { skip, unObserve, onIntersect };
};
