import { useState } from "react";
import imageCompression from "browser-image-compression";

export const useGetPreview = (loadFile) => {
  const [previewImgUrl, setPreviewImgUrl] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const getPreview = async (loadFile, e) => {
    const files = e.target.files;
    const compressedImg = await imageCompression(files[0], {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 340,
    });
    const reader = new FileReader();
    reader.readAsDataURL(compressedImg);
    reader.onload = () => {
      setPreviewImgUrl([...previewImgUrl, reader.result]);
    };
    setIsActive(true);
  };

  return { isActive, setIsActive, previewImgUrl, setPreviewImgUrl, getPreview };
};
