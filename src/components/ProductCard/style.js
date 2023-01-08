import styled from "styled-components";

export const ProfileMidSectionImg = styled.img`
  width: 140px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
`;
export const ProfileMidSectionTxt = styled.strong`
  font-size: 14px;
  line-height: 18px;
  display: block;
  padding: 6px 0 4px;
  font-weight: 700;
`;
export const ProfileMidSectionPrice = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.theme.mainColor};
`;
