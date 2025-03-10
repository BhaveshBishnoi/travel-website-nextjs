"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 text-gray-800 backdrop-blur-sm shadow-md py-3"
          : "bg-white text-gray-800 py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            <span>T</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">
            TravelX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "Tours", path: "/tours" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className="relative text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
            >
              {name}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-300 ease-in-out" />
            </Link>
          ))}
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <a 
            href="tel:+917503885223" 
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all"
          >
            <Phone size={18} />
            <span className="font-medium">+91 7503885223</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 transition-all duration-300 ease-in-out">
          <nav className="flex flex-col space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "Tours", path: "/tours" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            ))}
            <a 
              href="tel:+911234567890" 
              className="flex items-center space-x-2 text-blue-600 font-medium"
            >
              <Phone size={18} />
              <span>+91 123-456-7890</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
