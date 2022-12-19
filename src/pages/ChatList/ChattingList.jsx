import React from "react";
import styled from "styled-components";
import userImg from "../../assets/images/user_img_big.png";
import circle from "../../assets/images/circle.png";

const ChattingListWrap = styled.li`
	display: flex;
	flex-grow: 0;
	width: 100%;
	margin-bottom: 20px;
	overflow: hidden;
	align-items: center;
	position: relative;
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

const ReadCircle = styled.div`
	background-image: url(${circle});
	width: 12px;
	height: 12px;
	position: absolute;
	top: 0;
	z-index: 10;
`;

function User({ user }) {
	return (
		<>
			<ChattingListWrap>
				{user.read === false && <ReadCircle />}
				<UserProfileImg src={userImg} alt="유저 프로필 이미지" />
				<UserInfo>
					<UserName>{user.username}</UserName>
					<ChatContents>
						<UserChat>{user.txt}</UserChat>
						<ChatDate>{user.date}</ChatDate>
					</ChatContents>
				</UserInfo>
			</ChattingListWrap>
		</>
	);
}

export default function ChattingList() {
	const users = [
		{
			username: "애월읍 위니브 감귤농장",
			txt: "오늘 눈이 왔어요",
			date: "2022.12.15",
			read: false,
		},
		{
			username: "제주감귤냠냠",
			txt: "눈사람 만들러 가실분 선착 123명",
			date: "2022.12.19",
			read: true,
		},
		{
			username: "멍멍",
			txt: "멍멍멍",
			date: "2022.12.20",
			read: false,
		},
	];
	return (
		<>
			{users.map((user) => (
				<User key={user.username} user={user} />
			))}
		</>
	);
}
