import React from "react";
import styled from "styled-components";
import userImg from "../../assets/images/user_img_big.png";

const ChattingListWrap = styled.li`
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

export default function ChattingList() {
	return (
		<>
			<ChattingListWrap>
				<UserProfileImg src={userImg} alt="유저 프로필 이미지" />
				<UserInfo>
					<UserName>애월읍 위니브 감귤농장</UserName>
					<ChatContents>
						<UserChat>이번에 정정 언제하맨마씸?</UserChat>
						<ChatDate>2020.10.25</ChatDate>
					</ChatContents>
				</UserInfo>
			</ChattingListWrap>

			<ChattingListWrap>
				<UserProfileImg src={userImg} alt="유저 프로필 이미지" />
				<UserInfo>
					<UserName>제주감귤마을</UserName>
					<ChatContents>
						<UserChat>깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지</UserChat>
						<ChatDate>2020.10.25</ChatDate>
					</ChatContents>
				</UserInfo>
			</ChattingListWrap>

			<ChattingListWrap>
				<UserProfileImg src={userImg} alt="유저 프로필 이미지" />
				<UserInfo>
					<UserName>누구네 농장 친환경 한라봉</UserName>
					<ChatContents>
						<UserChat>내 차는 내가 평가한다. 오픈 이벤트에 참여 하</UserChat>
						<ChatDate>2020.10.25</ChatDate>
					</ChatContents>
				</UserInfo>
			</ChattingListWrap>
		</>
	);
}
