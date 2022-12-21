import axios from "axios";

export const handleFollow = async (
  token,
  isfollow,
  setTriggerFollow,
  accountname
) => {
  try {
    if (isfollow === true) {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_KEY}/profile/${accountname}/unfollow`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      setTriggerFollow((prev) => !prev);
    } else {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/profile/${accountname}/follow`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
      setTriggerFollow((prev) => !prev);
    }
  } catch (error) {
    console.log(error);
  }
};
