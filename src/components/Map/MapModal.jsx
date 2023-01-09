import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import x_icon from "../../assets/images/x.png";
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
  width: 100%;
  height: 300px;
`;
const MapSearchSection = styled.div`
  padding: 12px;
  overflow: hidden;
  background-color: #bfd8ffee;
  border-radius: 10px 10px 0 0;
  h2 {
    font-size: 20px;
    color: ${(props) => props.theme.grayColor};
    margin-bottom: 18px;
  }
  input {
    padding: 8px;
    border: 0;
    width: 75%;
    margin-right: 5px;
  }
  button {
    width: 60px;
    height: 30px;
    color: white;
    font-size: 1em;
    background-color: ${(props) => props.theme.mainColor};
    border-radius: 50px;
  }
`;
const MaModalpCloseBtn = styled.button`
  background: ${`url(${x_icon})`};
  background-size: 22px;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 8px;
  right: 8px;
`;
const MapResultList = styled.ul`
  width: 358px;
  max-height: 60%;
  height: min(fit-content, 60%);
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
        width: 60px;
        height: 30px;
        color: white;
        font-size: 1em;
        background-color: ${(props) => props.theme.mainColor};
        border-radius: 50px;
        margin-left: auto;
      }
    }
  }
`;
const MapWrap = styled.div`
  width: 358px;
  margin: auto;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
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
            <h2>장소 검색</h2>

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
              검색
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
          <MaModalpCloseBtn type="button" onClick={handleModal}>
            <span className="ir">장소 검색창 닫기</span>
          </MaModalpCloseBtn>
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
