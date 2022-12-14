import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import SetProfile from "./pages/SetProfile";
import SNSLogin from "./pages/SNSLogin";
import PostDetail from "./pages/PostDetail";
import PostUpload from "./pages/PostUpload";
import Home from "./pages/Home";
import SplashScreen from "./pages/SplashScreen";
import ProductUpload from "./pages/ProductUpload";
import Follow from "./pages/Follow";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/ed" element={<Profile />} />
        <Route path="/fd" element={<SetProfile />} />
        <Route path="/dfs" element={<SNSLogin />} />
        <Route path="/fds" element={<PostUpload />} />
        <Route path="/asdf" element={<PostDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/jj" element={<ProductUpload />} />
        <Route path="/follow" element={<Follow />} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
