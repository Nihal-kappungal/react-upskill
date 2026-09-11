import axios from "axios";
import React, { useEffect, useState } from "react";

const ImageContainer = ({ data }) => {
  return (
    <div className="flex-1 min-h-0 grid  bg-zinc-900 divide-x divide-y sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {data.map((item) => (
        <div key={item.id} className="min-h-0 flex flex-col">
          {/* Image */}
          <div className="flex-1 min-h-0 bg-white flex flex-col items-center justify-center">
            <img
              className="w-1/2 h-1/2 object-cover "
              src={item.download_url}
              alt=""
            />
          </div>

          {/* Info */}
          <div className="shrink-0 w-full p-2 px-8 flex items-center justify-between bg-white">
            <h4>{item.author}</h4>
            <span>{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageContainer;
