import React from "react";

const ImgComponent = ({ className, imgQr, alt }) => {
  return <img src={imgQr} className={className} alt={alt} />;
};

export default ImgComponent;
