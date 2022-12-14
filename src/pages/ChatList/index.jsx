import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import Vertical from "../../components/Header/Vertical";
import Navbar from "../../components/Navbar";
import userImg from "../../assets/images/user_img_big.png";

const MainChatSection = styled.section`
	width: 358px;
	margin: 48px auto 0;
	padding: 24px 16px 0 16px;
`;

const ChatContainer = styled.ul`
	display: block;
	margin: 0 auto;
	max-width: 358px;
	height: 42px;
	background-color: #fff;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		width: 12px;
		height: 12px;
		top: 0;
		left: 0;
		background: ${(props) => props.theme.mainColor};
		border-radius: 50%;
	}
`;

const ChattingList = styled.li`
	display: flex;
	flex-grow: 0;
	width: 100%;
	margin-bottom: 20px;
	overflow: hidden;
	align-items: center;
`;

const UserProfileImg = styled.img`
	width: 42px;
	height: 42px;
	position: relative;
`;

const UserInfo = styled.span`
	display: flex;
	flex-direction: column;
	margin-left: 12px;
`;

const UserName = styled.strong`
	color: black;
	font-size: 14px;
	line-height: 17px;
	margin-top: 2px;
`;

const ChatContents = styled.span`
	display: flex;
	flex-direction: row;
	width: 304px;
	align-items: baseline;
	justify-content: space-between;
`;

const UserChat = styled.p`
	color: ${(props) => props.theme.grayColor};
	font-size: 12px;
	line-height: 15px;
	margin-top: 4px;
	display: block;
	width: 238px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

const ChatDate = styled.p`
	font-size: 10px;
	line-height: 13px;
	width: 53px;
	color: ${(props) => props.theme.borderColor};
`;

export default function ChatList() {
	return (
		<>
			<Header h1Ir="채팅 리스트 페이지">
				<Prev />
				<Vertical />
			</Header>
			<MainChatSection>
				<ChatContainer>
					<ChattingList>
						<UserProfileImg src={userImg} alt="유저 프로필 이미지" />
						<UserInfo>
							<UserName>애월읍 위니브 감귤농장</UserName>
							<ChatContents>
								<UserChat>이번에 정정 언제하맨마씸?</UserChat>
								<ChatDate>2020.10.25</ChatDate>
							</ChatContents>
						</UserInfo>
					</ChattingList>
					<ChattingList>
						<UserProfileImg src={userImg} alt="유저 프로필 이미지" />
						<UserInfo>
							<UserName>제주감귤마을</UserName>
							<ChatContents>
								<UserChat>깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지</UserChat>
								<ChatDate>2020.10.25</ChatDate>
							</ChatContents>
						</UserInfo>
					</ChattingList>
					<ChattingList>
						<UserProfileImg src={userImg} alt="유저 프로필 이미지" />
						<UserInfo>
							<UserName>누구네 농장 친환경 한라봉</UserName>
							<ChatContents>
								<UserChat>
									내 차는 내가 평가한다. 오픈 이벤트에 참여 하
								</UserChat>
								<ChatDate>2020.10.25</ChatDate>
							</ChatContents>
						</UserInfo>
					</ChattingList>
				</ChatContainer>
			</MainChatSection>
			<Navbar />
		</>
	);
}
