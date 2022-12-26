import styled from "styled-components";
import css_sprite from "../../assets/images/css_sprites.png";
import { useModal } from "../../hooks/useModal";
import ModalContainer from "../../components/Modal/ModalContainer";
import ModalList from "../../components/Modal/ModalList";
import { useNavigate } from "react-router-dom";

const VerticalBtn = styled.button`
  margin-left: auto;
  width: 24px;
  height: 24px;
  background: url(${css_sprite}) -102px -54px;
`;

export default function Vertical() {
  const { isModal, handleModal } = useModal();
  const navigate = useNavigate();

  return (
    <>
      <VerticalBtn onClick={handleModal}>
        <span className="ir">버티컬 버튼</span>
      </VerticalBtn>
      {isModal && (
        <ModalContainer onClick={handleModal}>
          <ModalList onClick={() => navigate("/chatlist")}>
            채팅방 나가기
          </ModalList>
        </ModalContainer>
      )}
    </>
  );
}
