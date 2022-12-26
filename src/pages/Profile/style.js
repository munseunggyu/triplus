import { Link } from "react-router-dom";
import styled from "styled-components";

// topSection
export const ProfileTopSec = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 8px solid #f2f2f2;
  padding: 37px 0 26px;
`;
export const ProfileTopContainer = styled.div`
  max-width: 390px;
  padding-top: 30px;
  text-align: center;
  position: relative;
`;

export const ProfileUserImg = styled.img`
  width: 110px;
  height: 110px;
  margin: 0 auto;
  display: block;
`;
export const ProfileUserName = styled.strong`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: block;
  padding: 16px 0 6px;
`;
export const PofileUserId = styled.span`
  display: block;
  font-size: 12px;
  line-height: 15px;
`;
export const ProfileIntroduce = styled.p`
  padding: 16px 0 24px;
  font-size: 14px;
  line-height: 18px;
`;
export const ProfileFollowers = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const ProfileImgFollowBtnsCon = styled.div`
  display: flex;
  align-items: center;
  gap: 46px;
`;
export const ProfileFollowCount = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => (props.isfollowing ? props.theme.grayColor : "black")};
`;
export const ProfileFollowTxt = styled.span`
  font-size: 10px;
  color: ${(props) => props.theme.grayColor};
`;
