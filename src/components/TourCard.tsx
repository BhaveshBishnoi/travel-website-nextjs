"use client";

import Link from "next/link";
import Image from "next/image";

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
    <Link href={link} className="group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <Image
          src={image}
          alt={name}
          width={400}
          height={250}
          className="w-full h-52 object-cover"
        />
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
            {name}
          </h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}
