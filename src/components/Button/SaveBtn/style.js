import styled from "styled-components";

export const SaveButton = styled.button`
  background-color: ${(props) =>
    props.isActive ? props.theme.mainColor : "#90bcff"};
  color: #fff;
  margin-left: auto;
  border-radius: 32px;
  font-size: 14px;
  width: 90px;
  height: 32px;
`;
