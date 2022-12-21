import { useState } from "react";

export const useModal = () => {
  const [isModal, setIsModal] = useState(false);
  const [isMyContent, setisMyContent] = useState(true);
  const [isModalAlert, setIsModalAlert] = useState(false);
  console.log(isModalAlert);
  const handleModal = (e) => {
    setIsModal((prev) => !prev);
  };

  const handleAlert = (e, txt) => {
    e.stopPropagation();
    setIsModalAlert(txt);
  };

  const handlCloseClick = () => {
    setIsModalAlert(false);
    setIsModal(false);
  };

  return {
    isModal,
    isMyContent,
    isModalAlert,
    handleModal,
    handleAlert,
    handlCloseClick,
  };
};
