// ProcessCard.tsx
import React from "react";

interface Props {
  id: number;
  title: string;
  text: string;
  className?: string;
}

export const ProcessCard = ({ id, title, text, className }: Props) => {
  return (
    <div
      className={`flex shadow-md rounded-xl p-4 max-w-[500px] ${
        className ?? ""
      }`}
    >
      <h4 className="text-9xl font-bold text-ld-teal mb-3">{id}</h4>
      <div className="flex ml-4 flex-col justify-center">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
};
