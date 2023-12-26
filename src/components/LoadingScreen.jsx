import React from 'react';
import { Spin } from "react-cssfx-loading";
const LoadingScreen = () => {
  

  return (
    <div className="w-full h-full bg-white bg-opacity-75 backdrop-blur-sm flex justify-center items-center">
      <div className="text-2xl text-gray-800"><Spin/></div>
    </div>
  );
};

export default LoadingScreen;