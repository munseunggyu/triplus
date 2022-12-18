import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProfileMidSec = styled.section`
  border-bottom: 8px solid #f2f2f2;
  display: flex;
  justify-content: center;
`;
const ProfileMidSectionCon = styled.div`
  width: 390px;
  padding: 20px 0 20px 16px;
`;
const ProfileMidSectionH2 = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
`;
const ProfileMidSectionUl = styled.ul`
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-top: 16px;
`;

const ProfileMidSectionImg = styled.img`
  width: 140px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
`;
const ProfileMidSectionTxt = styled.strong`
  font-size: 14px;
  line-height: 18px;
  display: block;
  padding: 6px 0 4px;
  font-weight: 700;
`;
const ProfileMidSectionPrice = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.theme.mainColor};
`;
export default function ProfileMidSection() {
  const [productData, setProductData] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTMzNWY1MTdhZTY2NjU4MWMxZTIwYiIsImV4cCI6MTY3NjI2MzM5MywiaWF0IjoxNjcxMDc5MzkzfQ.xsbzJ5VLoY6BdOS0dccJLUDTfzdg5p0dfE0J0Kmrez0"; // 임시 토큰

  const getProductList = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_KEY}/product/sfne.sae`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      }
    );
    return res.data.product;
  };
  const setData = async () => {
    const res = await getProductList();
    setProductData(res);
  };
  useEffect(() => {
    setData();
  }, []);
  return (
    <ProfileMidSec>
      <ProfileMidSectionCon>
        <ProfileMidSectionH2>판매중인 상품</ProfileMidSectionH2>
        <ProfileMidSectionUl>
          {productData.map((product) => {
            return (
              <li key={product.id}>
                <ProfileMidSectionImg
                  src={product.itemImage}
                  alt="상품 이미지"
                />
                <ProfileMidSectionTxt>{product.itemName} </ProfileMidSectionTxt>
                <ProfileMidSectionPrice>{product.price}</ProfileMidSectionPrice>
              </li>
            );
          })}
        </ProfileMidSectionUl>
      </ProfileMidSectionCon>
    </ProfileMidSec>
  );
}
