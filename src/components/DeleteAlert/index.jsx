import React from "react";
import styled from "styled-components";

const DeleteAlertModal = styled.div`
	display: flex;
	width: 252px;
	height: 110px;
	background: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(3px);
	justify-content: center;
	align-items: center;
	z-index: 100;
`;

const DeleteAlertArticle = styled.article`
	width: 100%;
	height: 100%;
	background-color: white;
	border-radius: 10px;
`;

const AlertContents = styled.strong`
	display: block;
	width: 100%;
	height: 64px;
	padding: 22px;
	text-align: center;
	box-sizing: border-box;
	border-bottom: 0.5px solid rgba(219, 219, 219, 1);
	font-size: 16px;
	font-weight: 500;
`;

const CancelBtn = styled.button`
	width: 126px;
	height: 46px;
	background-color: white;
	padding: 0;
	border: transparent;
	font-weight: 400;
	font-size: 14px;
	cursor: pointer;
`;
const DeleteBtn = styled.button`
	width: 126px;
	height: 46px;
	background-color: white;
	padding: 0;
	border: none;
	border-left: 0.5px solid rgba(219, 219, 219, 1);
	font-size: 14px;
	font-weight: 500;
	color: #4d82d4;
	cursor: pointer;
`;

export default function DeleteAlert() {
	return (
		<DeleteAlertModal>
			<DeleteAlertArticle>
				<AlertContents>상품을 삭제할까요?</AlertContents>
				<CancelBtn>취소</CancelBtn>
				<DeleteBtn>삭제</DeleteBtn>
			</DeleteAlertArticle>
		</DeleteAlertModal>
	);
}
