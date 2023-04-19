import React from "react";

export default function Trending() {
  const images = [1, 2, 3, 4];
  return (
    <div>
      <p className="text-md font-bold">Trending Today</p>
      <div className="flex gap-3 mt-3">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[201px] h-[120px] bg-neutral300 rounded-[4px] cursor-pointer hover:scale-[1.02] transition-all"
            ></div>
          );
        })}
      </div>
    </div>
  );
}
