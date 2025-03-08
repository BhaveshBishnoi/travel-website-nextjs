"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black border-b border-black shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold">
          TravelX
        </Link>

        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>

        <nav
          className={`md:flex space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className="relative text-lg font-medium group transition-all"
            >
              {name}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-800 group-hover:w-full transition-all duration-300 ease-in-out mt-[1px]" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
