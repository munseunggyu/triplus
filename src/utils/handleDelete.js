import axios from "axios";

const userInfo = JSON.parse(localStorage.getItem("userinfo"));

export const handleDelete = async (e, handlCloseClick, url, handleDel) => {
  e.preventDefault();
  try {
    const res = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-type": "application/json",
      },
    });
    if (res.status === 200) {
      handleDel();
      handlCloseClick();
    }
  } catch (error) {
    console.log(error);
  }
};
