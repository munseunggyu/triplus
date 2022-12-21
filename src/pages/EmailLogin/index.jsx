import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  border: 1px solid black;
`;

const userdata = {
  _id: "63a144c417ae666581d02f21",
  username: "danny",
  email: "dannytest4@test.com",
  accountname: "testdanny4",
  image: "http://146.56.183.55:5050/Ellipse.png",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTE0NGM0MTdhZTY2NjU4MWQwMmYyMSIsImV4cCI6MTY3Njc4MjQzNSwiaWF0IjoxNjcxNTk4NDM1fQ.PBm7-STiJQqrUMGQdtsCuLkYjV2MFla10c2dpCYyBc8",
  refreshToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzE1OTg0MzUsImV4cCI6MTY3MjgwODAzNX0.eEAhQ7Et8KHKOnmwGae3JLFrDHt0X9xo2KwAswcuOUc",
};

const LoginActiveBtn = () => {
  localStorage.setItem("userinfo", JSON.stringify(userdata));
};

const ClickBtn = () => {
  return (
    <StyledBtn>
      <button onClick={LoginActiveBtn}>클릭</button>
    </StyledBtn>
  );
};

export default function EmailLogin() {
  return (
    <>
      <ClickBtn />
    </>
  );
}
