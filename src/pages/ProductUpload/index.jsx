import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import saveBtn from "../../assets/images/save_button.png";
import imgFile from "../../assets/images/file_gray.png";

const SaveBtn = styled.button`
	background-image: ${saveBtn};
	background-size: 90px;
	margin-left: auto;
	width: 90px;
	height: 32px;
`;

export default function ProductUpload() {
	return (
		<div>
			<Header>
				<Prev />
				<SaveBtn />
			</Header>
		</div>
	);
}
