import React from "react";
import { Target } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex flex-row gap-2">
      <Target />
      <p className="font-bold text-lg">Inventory Managent</p>
    </div>
  );
};

export default Logo;
