import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";
import { useNavigate, useMatch } from "react-router-dom";

const IconsUl = styled.ul`
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 14px;
  border-top: 0.5px solid #dbdbdb;
`;

const Iconli = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 60px;
  gap: 4px;
`;

const HomeIcon = styled.button`
  width: 24px;
  height: 24px;
  &.active {
    background: ${(props) => props.tabActiveImg};
  }
  background: ${(props) => props.tabImg};
  border: 0px;
  margin: 0 auto;
`;

const NavSpan = styled.span`
  display: block;
  font-size: 10px;
  color: #767676;
  &.active {
    color: ${(props) => props.theme.mainColor};
  }
`;

export default function Navbar() {
  const userInfo = JSON.parse(localStorage.getItem("userinfo"));
  const navigate = useNavigate();
  const matchHome = useMatch("/");
  const matchChatList = useMatch("/chatlist");
  const matchProfile = useMatch(`/profile/${userInfo.accountname}`);

  const navbarData = [
    {
      id: 1,
      url: "/",
      name: "홈",
      match: matchHome,
      tabImg: `url(${css_sprite}) -98px -102px`,
      tabActiveImg: `url(${css_sprite}) -146px -10px`,
    },
    {
      id: 2,
      url: "/chatlist",
      name: "채팅",
      match: matchChatList,
      tabImg: `url(${css_sprite}) -146px -54px`,
      tabActiveImg: `url(${css_sprite}) -146px -98px`,
    },
    {
      id: 3,
      url: "/postupload",
      name: "게시물 작성",
      match: null,
      tabImg: `url(${css_sprite}) -10px -102px`,
      tabActiveImg: null,
    },
    {
      id: 4,
      url: `/profile/${userInfo.accountname}`,
      name: "프로필",
      match: matchProfile,
      tabImg: `url(${css_sprite}) -54px -146px`,
      tabActiveImg: `url(${css_sprite}) -98px -146px`,
    },
  ];

  return (
    <IconsUl>
      {navbarData.map((navData) => {
        return (
          <Iconli key={navData.id}>
            <HomeIcon
              tabImg={navData.tabImg}
              tabActiveImg={navData.tabActiveImg}
              className={navData.match !== null ? "active" : ""}
              onClick={() => {
                navigate(navData.url);
              }}
            />
            <NavSpan className={navData.match !== null ? "active" : ""}>
              {navData.name}
            </NavSpan>
          </Iconli>
        );
      })}
    </IconsUl>
  );
}
