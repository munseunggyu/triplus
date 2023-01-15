import { Route, Routes } from "react-router-dom";
import MultiLogin from "./pages/MultiLogin";
import EmailLogin from "./pages/EmailLogin";
import EmailSignUp from "./pages/EmailSignUp";
import SetProfile from "./pages/SetProfile";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Follow from "./pages/Follow";
import MyProfileEdit from "./pages/MyProfileEdit";
import PostDetail from "./pages/PostDetail";
import PostUpload from "./pages/PostUpload";
import ProductUpload from "./pages/ProductUpload";
import ChatList from "./pages/ChatList";
import ChatRoom from "./pages/ChatRoom";
import ErrorPage from "./pages/ErrorPage";
import LoadingPage from "./pages/LoadingPage";
import { useEffect, useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState(false);

  useEffect(() => {
    setUserInfo((prev) => {
      if (JSON.parse(localStorage.getItem("userinfo"))) {
        return true;
      }
    });
  }, [userInfo]);

  return (
    <>
      <Routes>
        {userInfo ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/profile/:accountname"
              element={<Profile setUserInfo={setUserInfo} />}
            />
            <Route
              path="/profile/:accountname/following"
              element={<Follow />}
            />
            <Route path="/profile/:accountname/follower" element={<Follow />} />
            <Route path="/myprofileedit" element={<MyProfileEdit />} />
            <Route path="/postdetail/:postkey" element={<PostDetail />} />
            <Route path="/postupload" element={<PostUpload />} />
            <Route path="/productupload" element={<ProductUpload />} />
            <Route path="/chatlist" element={<ChatList />} />
            <Route path="/chatroom" element={<ChatRoom />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/postedit/:postid" element={<PostUpload />} />
            <Route path="/productedit/:productid" element={<ProductUpload />} />
            <Route path="/loading" element={<LoadingPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<MultiLogin />} />
            <Route
              path="/emaillogin"
              element={<EmailLogin setUserInfo={setUserInfo} />}
            />
            <Route path="/emailsignup" element={<EmailSignUp />} />
            <Route path="/setprofile" element={<SetProfile />} />
            <Route path="*" element={<ErrorPage />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
