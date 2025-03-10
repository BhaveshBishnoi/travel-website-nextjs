"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

interface TimelineEvent {
  day: number;
  title: string;
  description: string;
  location?: string;
  duration?: string;
}

interface TourTimelineProps {
  events: TimelineEvent[];
}

const TourTimeline = ({ events }: TourTimelineProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = timelineRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, options);
    
    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="py-12 relative">
      {/* Timeline Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Day-By-Day Itinerary</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>
      
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-24 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></div>
      
      {/* Timeline Events */}
      <div className="relative z-10">
        {events.map((event, index) => (
          <div
            key={index}
            ref={(el) => {
              timelineRefs.current[index] = el;
            }}
            className="relative mb-16 last:mb-0"
          >
            {/* Day Number (Circle) */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-20">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 ${
                activeIndex === index 
                  ? "border-blue-600 bg-white shadow-lg" 
                  : "border-gray-300 bg-white"
              } transition-all duration-500 hover:scale-110`}>
                <span className="text-sm font-bold text-gray-800">
                  {event.day}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className={`md:flex ${
              index % 2 === 0 
                ? "md:flex-row" 
                : "md:flex-row-reverse"
            }`}>
              {/* Empty space for alignment on the opposite side */}
              <div className="hidden md:block md:w-1/2"></div>
              
              {/* Timeline connector */}
              <div className={`hidden md:block absolute top-5 h-0.5 bg-blue-500 w-12 ${
                index % 2 === 0 
                  ? "left-[calc(50%+10px)] -translate-x-0" 
                  : "right-[calc(50%+10px)] translate-x-0"
              }`}></div>
              
              {/* Event Content */}
              <div className={`pl-16 md:pl-0 ${
                index % 2 === 0 
                  ? "md:w-1/2 md:pl-20" 
                  : "md:w-1/2 md:pr-20"
              }`}>
                <div className={`bg-white p-6 rounded-xl shadow-md transform transition-all duration-500 ${
                  activeIndex === index 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-4 opacity-70"
                } hover:shadow-xl hover:-translate-y-1 border-t-4 ${
                  index % 2 === 0 ? "border-blue-600" : "border-indigo-500"
                }`}>
                  <div className="flex items-center mb-3">
                    <Calendar size={18} className={`${index % 2 === 0 ? "text-blue-600" : "text-indigo-500"} mr-2`} />
                    <span className="text-sm font-medium text-gray-500">Day {event.day}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="flex flex-col gap-2 mb-4">
                    {event.location && (
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className={`mr-2 ${index % 2 === 0 ? "text-blue-600" : "text-indigo-500"}`} />
                        <span>{event.location}</span>
                      </div>
                    )}
                    
                    {event.duration && (
                      <div className="flex items-center text-gray-600">
                        <Clock size={16} className={`mr-2 ${index % 2 === 0 ? "text-blue-600" : "text-indigo-500"}`} />
                        <span>{event.duration}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600">
                    {event.description}
                  </p>
                  
                  {index < events.length - 1 && (
                    <div className="hidden md:flex items-center justify-end mt-4 text-sm font-medium text-gray-500">
                      {index % 2 === 0 ? (
                        <div className="flex items-center">
                          <span>Next Day</span>
                          <ArrowRight size={16} className="ml-1 text-blue-600" />
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <ArrowRight size={16} className="mr-1 text-indigo-500 transform rotate-180" />
                          <span>Next Day</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourTimeline;
