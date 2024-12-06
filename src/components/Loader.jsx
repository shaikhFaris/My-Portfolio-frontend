import React from "react";

const Loader = () => {
  return (
    <div
      className="h-screen absolute z-30 bg-slate-700 w-full flex justify-center items-center"
      id="loader"
    >
      <div className="flex-row justify-center items-center">
        <span className="loader"></span>
        <h1 className="bg-transparent mt-2">Loading....</h1>
      </div>
    </div>
  );
};

export default Loader;
