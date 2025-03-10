"use client";

import { useState } from "react";
import ReviewCard from "./ReviewCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: number;
  name: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: string;
}

interface ReviewsSectionProps {
  tourName: string;
  reviews: Review[];
}

const ReviewsSection = ({ tourName, reviews }: ReviewsSectionProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const currentReviews = reviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  return (
    <div className="bg-gray-50 py-16" id="reviews">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What Our Pilgrims Say
            </h2>
            <p className="text-gray-600 mt-2">
              Read what other travelers experienced during their {tourName} journey
            </p>
          </div>
          
          {totalPages > 1 && (
            <div className="flex space-x-2 mt-4 md:mt-0">
              <button 
                onClick={prevPage}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-blue-50 transition-colors"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              <button 
                onClick={nextPage}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-blue-50 transition-colors"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentReviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              location={review.location}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
              avatar={review.avatar}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">Have you experienced our {tourName}?</p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Share Your Experience
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
