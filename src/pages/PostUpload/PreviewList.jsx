import styled from "styled-components";
import x from "../../assets/images/x.png";

const PreviewImg = styled.img`
  position: relative;
  width: 304px;
  height: 228px;
  object-fit: cover;
  border-radius: 10px;
`;

const DeleteBtn = styled.button`
  background: ${`url(${x})`} no-repeat;
  background-size: 22px;
  position: relative;
  bottom: 200px;
  left: -25px;
  width: 22px;
  height: 22px;
`;

export default function PreviewList({ mapData, onClick }) {
  return (
    <>
      {mapData !== null && !!mapData.length && (
        <ul>
          {mapData.map((image, index) => (
            <li key={index}>
              <PreviewImg src={image} alt={`${index + 1}번째 업로드 이미지`} />
              <DeleteBtn id={index} onClick={onClick} type="button" />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
