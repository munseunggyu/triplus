import styled from "styled-components";

export const CommentContainer = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 36px;
  padding: 13px 0;
  border-top: 0.5px solid ${(props) => props.theme.borderColor};
`;

export const CommentForm = styled.form`
  display: flex;
  width: 100%;
`;

export const CommentProfileImg = styled.img`
  width: 36px;
  padding: 0 18px 0 16px;
`;

export const CommentInput = styled.input`
  border: 0;
  &:focus {
    outline: none;
  }
  width: 100%;
  &::placeholder {
    font-size: 14px;
    color: #c4c4c4;
  }
`;

export const CommentBtn = styled.button`
  box-sizing: border-box;
  font-size: 14px;
  color: ${(props) => (props.txt ? props.theme.mainColor : "#c4c4c4")};
  width: 5em;
  text-align: center;
`;
