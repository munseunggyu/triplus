import React from "react";
import * as S from "./style";
import marker_icon from "../../assets/images/marker_icon.svg";

export default function LocationInfo({ mapSelect }) {
  return (
    <S.LocationInfoContainer>
      <img src={marker_icon} alt="마커 이미지" />
      <div>
        <strong>{mapSelect.content}</strong>
        <address>{mapSelect.address}</address>
      </div>

      <a
        href={`https://map.kakao.com/link/to/${mapSelect.content} ,${mapSelect.position.lat},${mapSelect.position.lng}`}
        target="_blank"
      >
        길찾기
      </a>
    </S.LocationInfoContainer>
  );
}
