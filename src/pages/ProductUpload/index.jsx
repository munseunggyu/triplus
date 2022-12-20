import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import imgFile from "../../assets/images/file_gray.svg";

const SaveBtn = styled.button`
	background-color: ${(props) =>
		props.isActive ? props.theme.mainColor : "#90bcff"};
	color: #fff;
	margin-left: auto;
	border-radius: 32px;
	font-size: 14px;
	width: 90px;
	height: 32px;
`;
const MainUploadSection = styled.section`
	margin: 48px auto 0;
	padding: 34px 34px 0 34px;
	width: 322px;
`;
const ImageSave = styled.p`
	font-size: 12px;
	line-height: 14px;
	margin-bottom: 18px;
	color: ${(props) => props.theme.grayColor};
`;
const ImgPreview = styled.input`
	color: transparent;
	position: relative;
	width: 100%;
	height: 204px;
	background: #f2f2f2;
	border: 0.5px solid ${(props) => props.theme.borderColor};
	border-radius: 10px;
	margin-bottom: 30px;
	cursor: pointer;

	${(props) =>
		props.imageSrc
			? `
					background-image: url(${props.imageSrc});
					background-repeat: no-repeat;
					background-size: contain;
					background-position: center;`
			: `
					background-color: #f2f2f2;`}

	&::after {
		content: "";
		background-image: url(${imgFile});
		position: absolute;
		width: 36px;
		height: 36px;
		right: 12px;
		bottom: 12px;
	}
	&::-webkit-file-upload-button {
		display: none;
	}
`;
const ProductName = styled.strong`
	display: block;
	width: 100%;
	margin-bottom: 16px;
`;
const ProductPrice = styled.span`
	display: block;
	width: 100%;
	margin-bottom: 16px;
`;
const SaleLink = styled.span`
	width: 100%;
`;
const ProductNameLabel = styled.label`
	display: block;
	color: ${(props) => props.theme.grayColor};
	font-size: 12px;
	line-height: 15px;
	margin-bottom: 10px;
`;
const ProductPriceLabel = styled.label`
	display: block;
	color: ${(props) => props.theme.grayColor};
	font-size: 12px;
	line-height: 15px;
	margin-bottom: 10px;
`;
const SaleLinkLabel = styled.label`
	display: block;
	color: ${(props) => props.theme.grayColor};
	font-size: 12px;
	line-height: 15px;
	margin-bottom: 10px;
`;
const ProdutNameInput = styled.input`
	width: 100%;
	border: 0;
	border-bottom: 1px solid ${(props) => props.theme.borderColor};
	font-size: 14px;
	color: ${(props) => props.theme.borderColor};
`;
const ProdutPriceInput = styled.input`
	width: 100%;
	border: 0;
	border-bottom: 1px solid ${(props) => props.theme.borderColor};
	font-size: 14px;
	color: ${(props) => props.theme.borderColor};
`;
const SalelinkInput = styled.input`
	width: 100%;
	border: 0;
	border-bottom: 1px solid ${(props) => props.theme.borderColor};
	font-size: 14px;
	color: ${(props) => props.theme.borderColor};
`;

export default function ProductUpload({ setImageData, useRef, ...props }) {
	const [imageSrc, setImageSrc] = useState("");

	const UploadFile = (e) => {
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			setImageSrc(reader.result);
		};
	};

	return (
		<div>
			<Header>
				<Prev />
				<SaveBtn>저장</SaveBtn>
			</Header>
			<MainUploadSection>
				<h2 className="ir">상품 등록 페이지</h2>
				<ImageSave>이미지 등록</ImageSave>
				<ImgPreview
					type="file"
					{...props}
					onChange={UploadFile}
					setImageData={setImageData}
					ref={useRef}
					accept="*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic"
					imageSrc={imageSrc}
				></ImgPreview>
				<ProductName>
					<ProductNameLabel>상품명</ProductNameLabel>
					<ProdutNameInput placeholder="2~15자 이내여야 합니다."></ProdutNameInput>
				</ProductName>
				<ProductPrice>
					<ProductPriceLabel>가격</ProductPriceLabel>
					<ProdutPriceInput placeholder="숫자만 입력 가능합니다."></ProdutPriceInput>
				</ProductPrice>
				<SaleLink>
					<SaleLinkLabel>판매 링크</SaleLinkLabel>
					<SalelinkInput placeholder="URL을 입력해 주세요"></SalelinkInput>
				</SaleLink>
			</MainUploadSection>
		</div>
	);
}
