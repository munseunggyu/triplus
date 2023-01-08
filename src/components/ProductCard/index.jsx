import React from "react";
import * as S from "./style";
import { useModal } from "../../hooks/useModal";
import { useNavigate } from "react-router-dom";
import ModalContainer from "../Modal/ModalContainer";
import ModalList from "../Modal/ModalList";
import AlertModal from "../Modal/AlertModal";
import { handleDelete } from "../../utils/handleDelete";

export default function ProductCard({
  setData,
  accountname,
  productId,
  productLink,
  productItemImage,
  productItemName,
  productPrice,
}) {
  const navigate = useNavigate();
  const {
    isModal,
    isMyContent,
    isModalAlert,
    handleModal,
    handleAlert,
    handlCloseClick,
  } = useModal(accountname);
  const url = `${process.env.REACT_APP_API_KEY}/product/${productId}`;

  const handleDel = () => {
    setData((prev) => prev.filter((post) => post.id !== productId));
  };
  return (
    <div>
      <li key={productId} onClick={handleModal}>
        {/* <a href={productLink}> */}
        <S.ProfileMidSectionImg src={productItemImage} alt="상품 이미지" />
        <S.ProfileMidSectionTxt>{productItemName} </S.ProfileMidSectionTxt>
        <S.ProfileMidSectionPrice>
          {productPrice.toLocaleString("ko-KR")}원
        </S.ProfileMidSectionPrice>
        {/* </a> */}
      </li>
      {isModal && (
        <ModalContainer onClick={handleModal}>
          {isMyContent ? (
            <>
              <ModalList onClick={(e) => handleAlert(e, "삭제모달")}>
                삭제
              </ModalList>
              {/* <ModalList
                onClick={() => {
                  navigate(`/product/${productId}`, {
                    state: {
                      itemName: productItemName,
                      price: productPrice,
                      link: productLink,
                      itemImage: productItemImage,
                    },
                  });
                }}
              >
                수정
              </ModalList> */}
              <ModalList onClick={() => window.open(productLink)}>
                웹페이지로 이동
              </ModalList>
            </>
          ) : (
            <ModalList onClick={() => window.open(productLink)}>
              웹페이지로 이동
            </ModalList>
          )}
        </ModalContainer>
      )}
      {isModalAlert !== false
        ? isModalAlert === "삭제모달" && (
            <AlertModal
              title="게시글을 삭제할까요?"
              submitText="삭제"
              onCloseClick={handlCloseClick}
              onSubmitClick={(e) =>
                handleDelete(e, handlCloseClick, url, handleDel)
              }
            />
          )
        : null}
    </div>
  );
}
