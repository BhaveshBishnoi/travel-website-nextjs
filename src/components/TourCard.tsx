"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CardProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

export default function TourCard({
  name,
  image,
  description,
  link,
}: CardProps) {
  return (
    <Link href={link} className="group block">
      <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] h-full flex flex-col">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={500}
            height={300}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
            {name}
          </h2>
          <p className="text-gray-600 flex-grow">{description}</p>
          <div className="mt-4 flex items-center text-blue-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-0 group-hover:translate-x-1">
            <span>Explore tour</span>
            <ArrowRight size={18} className="ml-1" />
          </div>
        </div>
        <div className="h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
      </div>
    </Link>
  );
}
