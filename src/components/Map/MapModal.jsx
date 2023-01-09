import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
const { kakao } = window;

const MapModalContainer = styled.article`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const MapSearchContainer = styled.div``;

const MapContainer = styled(Map)`
  width: 358px;
  height: 300px;
`;
const MapSearchSection = styled.div``;
const MapResultList = styled.ul`
  width: 358px;
  max-height: 80%;
  height: min(fit-content, 80%);
  display: flex;
  flex-direction: column;
  position: fixed;
  gap: 12px;
  margin: 0px auto;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 0 0 8px 8px;
  background-color: #fff;

  li {
    position: relative;
    padding: 16px 7px 0;
    border-top: 1px solid #777;
    min-height: fit-content;
    :last-child {
      padding-bottom: 16px;
    }
    .info {
      display: flex;
      align-items: center;

      strong {
        font-weight: 700;
        font-size: 1.1em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      button {
        position: relative;
        width: 65px;
        height: 30px;
        color: white;
        font-size: 1em;
        background-color: ${(props) => props.theme.mainColor};
        border-radius: 50px;
        border: none;
        margin-left: auto;
      }
    }
  }
`;
const SearchLi = styled.li`
  width: 100%;
  height: 100px;
`;
const MapWrap = styled.div`
  margin: auto;
  position: absolute;
  width: 300px;
  height: 300px;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  background: white;
  border-radius: 10px;
`;
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
  const handleSearch = () => {
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
    <MapModalContainer>
      <MapWrap>
        <MapSearchContainer>
          <MapSearchSection>
            <label htmlFor="search">검색</label>
            <button type="button" onClick={handleModal}>
              x
            </button>
            <input
              id="search"
              type="text"
              value={searchVal}
              onChange={(e) => {
                setSearchVal(e.target.value);
              }}
            />
            <button
              type="button"
              onClick={(e) => {
                handleSearch();
              }}
            >
              go
            </button>
          </MapSearchSection>
          <MapContainer center={centerPosition} level={3} onCreate={setMap}>
            {markers.map((marker) => (
              <MapMarker
                key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                position={marker.position}
                onClick={() => setInfo(marker)}
              >
                {info && info.content === marker.content && (
                  <div>{marker.content}</div>
                )}
              </MapMarker>
            ))}
          </MapContainer>
        </MapSearchContainer>
        <MapResultList>
          {markers &&
            markers.map((marker) => {
              return (
                <li onMouseOver={() => handleMouseOver(marker)}>
                  <div className="info">
                    <strong>{marker.content}</strong>
                    <address>{marker.address} </address>

                    <button
                      onClick={() => {
                        setMapSelect(marker);
                        handleModal();
                      }}
                    >
                      선택
                    </button>
                  </div>
                </li>
              );
            })}
        </MapResultList>
      </MapWrap>
    </MapModalContainer>
  );
}

{
  /* <a
                      href={`https://map.kakao.com/link/to/${marker.content} ,${marker.position.lat},${marker.position.lng}`}
                      target="_blank"
                    >
                      길찾기
                    </a> */
}
