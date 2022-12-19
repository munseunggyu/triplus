import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const IsFollowBtn = styled.button`
  margin-left: auto;
  width: 56px;
  height: 28px;
  border-radius: 26px;
  background-color: ${(props) =>
    props.isFollow ? "white" : props.theme.mainColor};
  color: ${(props) => (props.isFollow ? props.theme.grayColor : "white")};
  border: ${(props) => `1px solid ${props.theme.borderColor}`};
  font-size: 12px;
`;

export default function IsFollowButton({ isfollow, userAccountName }) {
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
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <IsFollowBtn onClick={handleFollow} isFollow={isFollow}>
      {isFollow ? "취소" : "팔로우"}
    </IsFollowBtn>
  );
}
