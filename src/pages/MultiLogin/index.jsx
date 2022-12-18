// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// import { MainDiv, MainHeader } from "./Splash";
// import LoginModal from "../../components/Login/LoginModal/LoginModal";

// // export default function MultiLogin({ tokenState }) {
// export default function MultiLogin() {
//   // const [splashLoading, setsplashLoading] = useState(false);
//   // const navigate = useNavigate();
//   // useEffect(() => {
//   //   let splash = setTimeout(() => {
//   //     if (tokenState) {
//   //       setsplashLoading(false);
//   //       navigate("/home");
//   //     }
//   //     setsplashLoading(true);
//   //   }, 1000);
//   //   return () => {
//   //     clearTimeout(splash);
//   //   };
//   // });

//   return (
//     // <MainDiv splashLoading={splashLoading}>
//     <MainDiv>
//       {/* <MainHeader splashLoading={splashLoading}> */}
//       <MainHeader>
//         <img
//           alt="트리플러스"
//           src="../../assets/images/plain_white.png"
//           // src={
//           //   splashLoading === false
//           //   ? process.env.PUBLIC_URL + "/icons/full-logo.png"
//           //   : process.env.PUBLIC_URL + "/icons/full-logo-white.png"
//           // }
//         />
//       </MainHeader>
//       <LoginModal />
//       {/* <LoginModal splashLoading={splashLoading} /> */}
//     </MainDiv>
//   );
// }

import { MainDiv, MainHeader } from "./MultiLoginSplash";
import LoginModal from "../../components/Login/LoginModal/LoginModal";
import styled from "styled-components";
import LogoSrc from "../../assets/images/plain_white.png";

const Logo = styled.img`
  display: block;
`;

export default function MultiLogin() {
  return (
    <MainDiv>
      <MainHeader>
        <Logo src={LogoSrc} />
      </MainHeader>
      <LoginModal />
    </MainDiv>
  );
}
