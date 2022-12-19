import { Route, Routes } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import MultiLogin from "./pages/MultiLogin";
import EmailLogin from "./pages/EmailLogin";
import Profile from "./pages/Profile";
import SetProfile from "./pages/SetProfile";
import PostDetail from "./pages/PostDetail";
import PostUpload from "./pages/PostUpload";
import Home from "./pages/Home";
import ProductUpload from "./pages/ProductUpload";
import Follow from "./pages/Follow";
import ErrorPage from "./pages/ErrorPage";
import Search from "./pages/Search";
import ChatRoom from "./pages/ChatRoom";
import ChatList from "./pages/ChatList";
import EmailSignUp from "./pages/EmailSignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/multilogin" element={<MultiLogin />} />
        <Route path="/emaillogin" element={<EmailLogin />} />
        <Route path="/emailsignup" element={<EmailSignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<SetProfile />} />
        <Route path="/postupload" element={<PostUpload />} />
        <Route path="/postdetail" element={<PostDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/productupload" element={<ProductUpload />} />
        <Route path="/profile/:accountname/following" element={<Follow />} />
        <Route path="/profile/:accountname/follower" element={<Follow />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/chatlist" element={<ChatList />} />
      </Routes>
    </div>
  );
}

export default App;
