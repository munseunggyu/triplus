import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import Vertical from "../../components/Header/Vertical";
import Navbar from "../../components/Navbar";
import ChattingList from "./ChattingList";

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

export default function ChatList() {
	return (
		<>
			<Header h1Ir="채팅 리스트 페이지">
				<Prev />
				<Vertical />
			</Header>
			<MainChatSection>
				<ChatContainer>
					<ChattingList />
				</ChatContainer>
			</MainChatSection>
			<Navbar />
		</>
	);
}
