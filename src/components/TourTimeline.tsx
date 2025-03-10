"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Clock, ArrowRight, Image as ImageIcon, Sun, Moon } from "lucide-react";
import Image from "next/image";

interface TimelineEvent {
  day: number;
  title: string;
  description: string;
  location?: string;
  duration?: string;
  image?: string;
}

interface TourTimelineProps {
  events: TimelineEvent[];
}

const TourTimeline = ({ events }: TourTimelineProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  // Function to manually set active day
  const setActiveDay = (index: number) => {
    setActiveIndex(index);
    if (timelineRefs.current[index]) {
      timelineRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

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
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Day-By-Day Itinerary</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>
      
      {/* Day Selection Pills - Desktop */}
      <div className="hidden md:flex justify-center mb-12 space-x-2 overflow-x-auto px-4">
        {events.map((event, index) => (
          <button
            key={`day-pill-${index}`}
            onClick={() => setActiveDay(index)}
            className={`py-2 px-4 rounded-full transition-all duration-300 whitespace-nowrap ${
              activeIndex === index 
              ? "bg-blue-600 text-white shadow-md" 
              : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
            }`}
          >
            <span className="font-medium">Day {event.day}</span>
          </button>
        ))}
      </div>
      
      {/* Day Selection Dropdown - Mobile */}
      <div className="md:hidden mb-8 px-4">
        <select 
          className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          value={activeIndex}
          onChange={(e) => setActiveDay(parseInt(e.target.value))}
        >
          {events.map((event, index) => (
            <option key={`day-option-${index}`} value={index}>
              Day {event.day}: {event.title}
            </option>
          ))}
        </select>
      </div>
      
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-44 md:top-52 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></div>
      
      {/* Timeline Events */}
      <div className="relative z-10">
        {events.map((event, index) => (
          <div
            key={index}
            ref={(el) => {
              timelineRefs.current[index] = el;
            }}
            className="relative mb-16 last:mb-0"
            id={`timeline-day-${event.day}`}
          >
            {/* Day Number (Circle) */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-20">
              <div 
                className={`flex items-center justify-center w-12 h-12 rounded-full border-4 
                  ${activeIndex === index 
                    ? "border-blue-600 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg scale-110" 
                    : "border-gray-300 bg-white text-gray-800 hover:border-blue-400"
                  } transition-all duration-500 cursor-pointer`}
                onClick={() => setActiveDay(index)}
              >
                <span className="text-sm font-bold">
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
              <div className={`hidden md:block absolute top-6 h-0.5 bg-gradient-to-r ${
                index % 2 === 0 
                  ? "from-blue-600 to-blue-400 left-[calc(50%+12px)] -translate-x-0 w-16" 
                  : "from-blue-400 to-blue-600 right-[calc(50%+12px)] translate-x-0 w-16"
              } ${activeIndex === index ? "opacity-100" : "opacity-70"} transition-all duration-300`}></div>
              
              {/* Event Content */}
              <div className={`pl-16 md:pl-0 ${
                index % 2 === 0 
                  ? "md:w-1/2 md:pl-24" 
                  : "md:w-1/2 md:pr-24"
              }`}>
                <div 
                  className={`bg-white p-6 rounded-xl shadow-md transform transition-all duration-500 
                    ${activeIndex === index 
                      ? "translate-y-0 opacity-100 shadow-lg" 
                      : "translate-y-4 opacity-80 scale-98"
                    } hover:shadow-xl hover:-translate-y-1 border-t-4 
                    ${index % 2 === 0 ? "border-blue-600" : "border-indigo-500"}
                    group
                  `}
                >
                  {/* Day/Night Indicator */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <Calendar size={18} className={`${index % 2 === 0 ? "text-blue-600" : "text-indigo-500"} mr-2`} />
                      <span className="text-sm font-medium text-gray-500">Day {event.day}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Sun size={16} className="text-amber-500" />
                      <span className="text-xs text-gray-500 mx-1">→</span>
                      <Moon size={16} className="text-indigo-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">
                    {event.title}
                  </h3>
                  
                  {/* Image (if available) */}
                  {event.image && (
                    <div className="mb-4 relative h-48 w-full overflow-hidden rounded-lg">
                      <Image 
                        src={event.image} 
                        alt={event.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                    </div>
                  )}
                  
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
                  
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                  
                  {index < events.length - 1 && (
                    <div className="flex items-center justify-end mt-4 text-sm font-medium text-gray-500">
                      <div className="flex items-center group-hover:translate-x-1 transition-transform">
                        <span>{index % 2 === 0 ? "Continue to Day " + events[index + 1].day : "Continue to Day " + events[index + 1].day}</span>
                        <ArrowRight size={16} className={`ml-1 ${index % 2 === 0 ? "text-blue-600" : "text-indigo-500"}`} />
                      </div>
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
