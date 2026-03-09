import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ position, size }) => {
  const { top = "50%", left = "50%" } = position || {};
  const { width = "400px", height = "400px" } = size || {};

  return (
    <div
      className="absolute pointer-events-none -z-10"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-full h-full bg-purple-500 opacity-20 rounded-full blur-[120px] animate-blob"></div>
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;