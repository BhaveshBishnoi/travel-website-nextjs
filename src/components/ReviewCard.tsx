"use client";

import { Star, Quote, ThumbsUp, Calendar } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ReviewCardProps {
  name: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: string;
}

const ReviewCard = ({ name, location, date, rating, comment, avatar }: ReviewCardProps) => {
  const [isHelpful, setIsHelpful] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(Math.floor(Math.random() * 20) + 1);

  const handleHelpfulClick = () => {
    if (!isHelpful) {
      setHelpfulCount(helpfulCount + 1);
    } else {
      setHelpfulCount(helpfulCount - 1);
    }
    setIsHelpful(!isHelpful);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-50 rounded-full opacity-50"></div>
      <div className="absolute top-0 right-0 w-6 h-24 bg-gradient-to-b from-blue-100 to-transparent opacity-40"></div>
      
      {/* Quote icon */}
      <div className="absolute -top-1 -left-1 text-blue-100">
        <Quote size={40} />
      </div>
      
      <div className="relative">
        <div className="flex items-start space-x-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full bg-gray-200 flex-shrink-0 ring-2 ring-offset-2 ring-blue-100">
            {avatar ? (
              <Image src={avatar} alt={name} fill className="object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold text-lg">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-800 text-lg">{name}</h4>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar size={14} className="mr-1" />
                <span>{date}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-1">{location}</p>
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`${
                    i < rating 
                      ? "text-yellow-400 fill-yellow-400" 
                      : "text-gray-300"
                  } mr-0.5 transition-transform hover:scale-110`}
                />
              ))}
              <span className="ml-2 text-sm font-medium text-gray-600">{rating}.0</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 bg-blue-50 p-4 rounded-lg relative">
          <p className="text-gray-700 italic leading-relaxed">{comment}</p>
        </div>
        
        {/* Helpful button */}
        <div className="mt-4 flex justify-end">
          <button 
            onClick={handleHelpfulClick}
            className={`flex items-center space-x-1 text-sm px-3 py-1 rounded-full transition-colors ${
              isHelpful ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <ThumbsUp size={14} className={isHelpful ? 'text-blue-600 fill-blue-600' : ''} />
            <span>{isHelpful ? 'Helpful' : 'Mark as helpful'}</span>
            <span className="ml-1 text-xs bg-white px-2 py-0.5 rounded-full">
              {helpfulCount}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
