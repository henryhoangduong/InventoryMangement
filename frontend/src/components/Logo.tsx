import React from "react";
import { Target } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Target />
      <p className="font-bold text-[20px]">Inventory Managent</p>
    </div>
  );
};

export default Logo;
