import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex">
      <Image src="images/logo.svg" alt="Logo" width={32} height={32} />
      <h1 className="text-3xl font-bold">LEYE</h1>
    </div>
  );
};

export default Logo;
