import styled from "styled-components";

export const LocationInfoContainer = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 10px;
  padding: 17px 16px;
  gap: 14px;
  max-width: 304px;
  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    strong {
      font-size: 16px;
    }
    address {
      font-size: 12px;
    }
  }
  a {
    align-self: flex-end;
    margin-left: auto;
    font-size: 14px;
  }
`;
