import React from 'react'

const BouncingLoader = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="dot animate-loader"></div>
      <div className="dot animate-loader animation-delay-200"></div>
      <div className="dot animate-loader animation-delay-400"></div>
    </div>
  );
}

export default BouncingLoader