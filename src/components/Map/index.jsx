import { useState } from "react";
import { MapMarker } from "react-kakao-maps-sdk";
import * as S from "./style";
const { kakao } = window;

export default function MapModal({ setMapSelect, handleModal }) {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [searchVal, setSearchVal] = useState(null);
  const [centerPosition, setCenterPosition] = useState({
    lat: 37.566826,
    lng: 126.9786567,
  });

  const handleMouseOver = (marker) => {
    setCenterPosition(marker.position);
    setInfo(marker);
  };
  const handlLocationSearch = () => {
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchVal, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (let i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
            address: data[i].address_name,
          });
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        map.setBounds(bounds);
      }
    });
  };

  return (
    <S.MapModalContainer>
      <S.MapWrap>
        <div>
          <S.MapSearchSection>
            <S.MapSearchTitle>장소 검색</S.MapSearchTitle>

            <S.MapSearchInput
              id="search"
              type="text"
              placeholder="장소를 입력해주세요."
              value={searchVal}
              onChange={(e) => {
                setSearchVal(e.target.value);
              }}
            />
            <S.MapSearchBtn type="button" onClick={handlLocationSearch}>
              검색
            </S.MapSearchBtn>
          </S.MapSearchSection>
          <S.MapContainer center={centerPosition} level={3} onCreate={setMap}>
            {markers.map((marker) => (
              <MapMarker
                key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                position={marker.position}
                onClick={() => setInfo(marker)}
              >
                {info && info.content === marker.content && (
                  <S.MapMarkerStrong>{marker.content}</S.MapMarkerStrong>
                )}
              </MapMarker>
            ))}
          </S.MapContainer>
          <S.MaModalpCloseBtn type="button" onClick={handleModal}>
            <span className="ir">장소 검색창 닫기</span>
          </S.MaModalpCloseBtn>
        </div>
        <S.MapSearchResultUl>
          {markers &&
            markers.map((marker) => {
              return (
                <S.MapSearchResultLi
                  onMouseOver={() => handleMouseOver(marker)}
                >
                  <S.MapSearchResultInfoContainer>
                    <S.MapSearchResultName>
                      {marker.content}
                    </S.MapSearchResultName>
                    <S.MapSearchResultAddress>
                      {marker.address}{" "}
                    </S.MapSearchResultAddress>
                  </S.MapSearchResultInfoContainer>
                  <S.MapSelectBtn
                    onClick={() => {
                      setMapSelect(marker);
                      handleModal();
                    }}
                  >
                    선택
                  </S.MapSelectBtn>
                </S.MapSearchResultLi>
              );
            })}
        </S.MapSearchResultUl>
      </S.MapWrap>
    </S.MapModalContainer>
  );
}
