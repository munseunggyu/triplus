import { Map } from "react-kakao-maps-sdk";
import x_icon from "../../assets/images/x.png";
import styled from "styled-components";

export const MapModalContainer = styled.article`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const MapContainer = styled(Map)`
  width: 100%;
  height: 300px;
`;

export const MapSearchSection = styled.div`
  padding: 12px;
  overflow: hidden;
  background-color: #bfd8ffee;
  border-radius: 10px 10px 0 0;
`;

export const MapSearchTitle = styled.h2`
  font-size: 20px;
  color: ${(props) => props.theme.grayColor};
  margin-bottom: 18px;
`;

export const MapSearchInput = styled.input`
  padding: 8px;
  border: 0;
  width: 75%;
  margin-right: 5px;
`;

export const MapSearchBtn = styled.button`
  width: 60px;
  height: 30px;
  color: white;
  font-size: 1em;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 50px;
`;

export const MaModalpCloseBtn = styled.button`
  background: ${`url(${x_icon})`};
  background-size: 22px;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const MapSearchResultUl = styled.ul`
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
`;

export const MapSearchResultLi = styled.li`
  position: relative;
  padding: 16px 7px 0;
  border-top: 1px solid #777;
  min-height: fit-content;
  display: flex;
  :last-child {
    padding-bottom: 16px;
  }
`;

export const MapSearchResultInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const MapSearchResultName = styled.strong`
  font-weight: 700;
  font-size: 16px;
`;
export const MapSearchResultAddress = styled.address`
  font-size: 12px;
`;
export const MapSelectBtn = styled.button`
  width: 60px;
  height: 30px;
  color: white;
  font-size: 1em;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 50px;
  margin-left: auto;
`;

export const MapWrap = styled.div`
  width: 358px;
  margin: auto;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  border-radius: 10px;
`;
