"use client";
import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader2 className="animate-spin w-12 h-12 text-blue-500" />
    </div>
  );
};

export default Loader;
