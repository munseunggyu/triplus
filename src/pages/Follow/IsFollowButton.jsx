import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const IsFollowBtn = styled.button`
  ${(props) =>
    props.isProfile
      ? `
      width:120px;
  `
      : `
    margin-left: auto; 
    margin-top:12px;
    width: 56px;
    height: 28px; 
    font-size: 12px; 
  `}
  border-radius: 26px;
  background-color: ${(props) =>
    props.isFollow ? "white" : props.theme.mainColor};
  color: ${(props) => (props.isFollow ? props.theme.grayColor : "white")};
  border: ${(props) => `1px solid ${props.theme.borderColor}`};
`;

export default function IsFollowButton({
  isfollow,
  userAccountName,
  isProfile,
  isActiveFollowBtn,
}) {
  const [isFollow, setIsFollow] = useState(isfollow);
  const token = localStorage.getItem("token");

  const handleFollow = async () => {
    try {
      if (isFollow === true) {
        const res = await axios.delete(
          `${process.env.REACT_APP_API_KEY}/profile/${userAccountName}/unfollow`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          }
        );
        setIsFollow(false);
        isActiveFollowBtn((prev) => !prev);
      } else {
        const res = await axios.post(
          `${process.env.REACT_APP_API_KEY}/profile/${userAccountName}/follow`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          }
        );
        setIsFollow(true);
        isActiveFollowBtn((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsFollow(isfollow);
  }, [isfollow]);
  return (
    <IsFollowBtn
      onClick={handleFollow}
      isFollow={isFollow}
      isProfile={isProfile}
    >
      {isFollow ? "취소" : "팔로우"}
    </IsFollowBtn>
  );
}
