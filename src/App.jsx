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
import Search from "./pages/Search";
import ChatRoom from "./pages/ChatRoom";
import ChatList from "./pages/ChatList";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/profile" element={<Profile />} />
				<Route path="/editprofile" element={<SetProfile />} />
				<Route path="/snslogin" element={<SNSLogin />} />
				<Route path="/postupload" element={<PostUpload />} />
				<Route path="/postdetail" element={<PostDetail />} />
				<Route path="/" element={<Home />} />
				<Route path="/splash" element={<SplashScreen />} />
				<Route path="/productupload" element={<ProductUpload />} />
				<Route path="/follow" element={<Follow />} />
				<Route path="/404" element={<ErrorPage />} />
				<Route path="/search" element={<Search />} />
				<Route path="/chatroom" element={<ChatRoom />} />
				<Route path="/chatlist" element={<ChatList />} />
			</Routes>
		</div>
	);
}

export default App;
