import axios from "axios";

const userInfo = JSON.parse(localStorage.getItem("userinfo"));

export const handleDeclaration = async (
  e,
  handlCloseClick,
  url,
  declarationId
) => {
  e.preventDefault();
  try {
    const res = await axios.post(
      url,
      {
        report: {
          comment: `${declarationId}`,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-type": "application/json",
        },
      }
    );
    console.log(res);
    handlCloseClick();
    alert("신고가 완료되었습니다.");
  } catch (error) {
    console.log(error);
  }
};
