import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <span className="inline-block w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
    </div>
  );
};

export default Loader;
