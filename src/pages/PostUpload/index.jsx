import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import uploadBtn from "../../assets/images/upload_button.png";
import { MainContainer } from "../../components/MainContainer";
import smallProfile from "../../assets/images/user_img_small.png";
import uploadFile from "../../assets/images/upload-file.png";

const UploadBtn = styled.button`
	background: url(${uploadBtn}) no-repeat;
	background-size: 90px;
	margin-left: auto;
	width: 90px;
	height: 32px;
`;

const UploadContainer = styled.div`
	padding-top: 20px;
`;

const UploadImg = styled.div`
	background: ${smallProfile};
	background-size: 42px;
	display: inline-block;
	width: 42px;
	height: 42px;
`;

const UploadTextarea = styled.textarea`
	position: fixed;
	padding-left: 13px;
	width: 100%;
	height: 10vh;
	border: none;
	resize: none;
	&:focus {
		outline: none;
	}
`;

const UploadFileBtn = styled.button`
	display: inline-block;
	position: fixed;
	bottom: 16px;
	right: 16px;
	background: url(${uploadFile}) no-repeat;
	background-size: 50px;
	width: 50px;
	height: 50px;
`;

export default function PostUpload() {
	return (
		<div>
			<Header>
				<Prev />
				<UploadBtn />
			</Header>
			<MainContainer>
				<UploadContainer>
					<UploadImg />
					<UploadTextarea placeholder="게시글 입력하기..." />
					<UploadFileBtn />
				</UploadContainer>
			</MainContainer>
		</div>
	);
}
