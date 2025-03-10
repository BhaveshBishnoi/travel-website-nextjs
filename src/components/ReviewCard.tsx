"use client";

import { Star } from "lucide-react";
import Image from "next/image";

interface ReviewCardProps {
  name: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: string;
}

const ReviewCard = ({ name, location, date, rating, comment, avatar }: ReviewCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start space-x-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-200 flex-shrink-0">
          {avatar ? (
            <Image src={avatar} alt={name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white font-semibold text-lg">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-gray-800">{name}</h4>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <p className="text-sm text-gray-500 mb-2">{location}</p>
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < rating 
                    ? "text-yellow-400 fill-yellow-400" 
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-700">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
