import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Prev from "../../components/Header/Prev";
import imgFile from "../../assets/images/file_gray.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
const ProductUploadForm = styled.form``;
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
	color: ${(props) => props.theme.mainColor};
	&:focus {
		outline: 0;
		border-bottom: 1px solid ${(props) => props.theme.mainColor};
	}
`;
const ProdutPriceInput = styled.input`
	width: 100%;
	border: 0;
	border-bottom: 1px solid ${(props) => props.theme.borderColor};
	font-size: 14px;
	color: ${(props) => props.theme.mainColor};
	&:focus {
		outline: 0;
		border-bottom: 1px solid ${(props) => props.theme.mainColor};
	}
`;
const SalelinkInput = styled.input`
	width: 100%;
	border: 0;
	border-bottom: 1px solid ${(props) => props.theme.borderColor};
	font-size: 14px;
	color: ${(props) => props.theme.mainColor};
	&:focus {
		outline: 0;
		border-bottom: 1px solid ${(props) => props.theme.mainColor};
	}
`;

export default function ProductUpload({ useRef, ...props }) {
	const [imageSrc, setImageSrc] = useState("");
	const [price, setPrice] = useState("");
	const [itemName, setItemName] = useState("");
	const [link, setLink] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);
	const userInfo = JSON.parse(localStorage.getItem("userinfo"));

	const navigate = useNavigate();

	useEffect(() => {
		//상품 판매 링크 유효성 검사
		const checkLink =
			/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

		if (
			itemName.length > 1 &&
			price.length !== 0 &&
			checkLink.test(link) &&
			imageSrc.length !== 0
		) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	});

	const inputPriceFormat = (str) => {
		const comma = (str) => {
			str = String(str);
			return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
		};
		const uncomma = (str) => {
			str = String(str);
			return str.replace(/[^\d]+/g, "");
		};
		return comma(uncomma(str));
	};
	function handleChange(e) {
		const inputType = e.target.id.slice(6);
		inputType === "price" && setPrice(inputPriceFormat(e.target.value));
		inputType === "product" && setItemName(e.target.value);
		inputType === "salelink" && setLink(e.target.value);
	}

	const uploadFile = (e) => {
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			setImageSrc(reader.result);
		};
	};

	function handleSubmit(e) {
		e.preventDefault();

		async function sendProduct() {
			try {
				const res = await axios.post(
					`${process.env.REACT_APP_API_KEY}/product`,
					{
						product: {
							itemName: itemName,
							price: parseInt(price.replace(/[^0-9]/g, ""), 10),
							link: link,
							itemImage: imageSrc,
						},
					},
					{
						headers: {
							Authorization: `Bearer ${userInfo.token}`,
							"Content-type": "application/json",
						},
					}
				);
				console.log(res.data);
			} catch (err) {
				console.error(err);
			}
		}
		sendProduct();
		navigate(`/`);
	}

	return (
		<div>
			<Header>
				<Prev />
				<SaveBtn isActive={isActive} onClick={handleSubmit}>
					저장
				</SaveBtn>
			</Header>
			<MainUploadSection>
				<ProductUploadForm onSubmit={handleSubmit}>
					<h2 className="ir">상품 등록 페이지</h2>
					<ImageSave>이미지 등록</ImageSave>
					<ImgPreview
						type="file"
						{...props}
						onChange={uploadFile}
						ref={useRef}
						accept="image/*"
						imageSrc={imageSrc}
					></ImgPreview>
					<ProductName>
						<ProductNameLabel>상품명</ProductNameLabel>
						<ProdutNameInput
							placeholder="2~15자 이내여야 합니다."
							type="text"
							id="input-product"
							maxLength="15"
							minLength="2"
							onChange={handleChange}
							value={itemName}
						></ProdutNameInput>
					</ProductName>
					<ProductPrice>
						<ProductPriceLabel>가격</ProductPriceLabel>
						<ProdutPriceInput
							id="input-price"
							type="text"
							placeholder="숫자만 입력 가능합니다."
							onChange={handleChange}
							value={price}
							maxLength="12"
						></ProdutPriceInput>
					</ProductPrice>
					<SaleLink>
						<SaleLinkLabel>판매 링크</SaleLinkLabel>
						<SalelinkInput
							placeholder="URL을 입력해 주세요"
							type="text"
							id="input-salelink"
							onChange={handleChange}
							value={link}
						></SalelinkInput>
					</SaleLink>
				</ProductUploadForm>
			</MainUploadSection>
		</div>
	);
}
