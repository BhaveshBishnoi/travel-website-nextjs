"use client";

import React from "react";
import Image from "next/image";
import { Calendar, MapPin, Clock, Users, ChevronRight } from "lucide-react";
import TourTimeline from "@/components/TourTimeline";
import PricingTable, { IncludesExcludes } from "@/components/PricingTable";
import ReviewsSection from "@/components/ReviewsSection";
import Link from "next/link";

const timelineEvents = [
  {
    day: 1,
    title: "Arrival at Haridwar/Rishikesh",
    description: "Welcome to Devbhumi Uttarakhand! Arrive at Dehradun Airport or Haridwar railway station. Transfer to your hotel and attend the Ganga Aarti at Har Ki Pauri Ghat in the evening. Overnight stay at the hotel.",
    location: "Haridwar/Rishikesh",
    duration: "Full Day",
  },
  {
    day: 2,
    title: "Haridwar/Rishikesh to Guptkashi",
    description: "Early morning departure for Guptkashi (8-9 hour drive). Enjoy scenic views of the Himalayas. Check in to your hotel and rest for the night.",
    location: "Guptkashi",
    duration: "8-9 hours",
  },
  {
    day: 3,
    title: "Guptkashi to Kedarnath",
    description: "Travel to Kedarnath either by helicopter from Phata or by trekking from Gaurikund (6-7 hours). Attend the evening aarti at Kedarnath Temple. Overnight stay at Kedarnath.",
    location: "Kedarnath",
    duration: "6-7 hours trek",
  },
  {
    day: 4,
    title: "Kedarnath to Guptkashi",
    description: "Early morning temple darshan at Kedarnath. After breakfast, return to Guptkashi by trek or helicopter. Rest for the night at your hotel.",
    location: "Guptkashi",
    duration: "6-7 hours trek",
  },
  {
    day: 5,
    title: "Guptkashi to Badrinath",
    description: "Morning departure for Badrinath (7-8 hour drive). Arrive in the evening, check into your hotel and rest for the night.",
    location: "Badrinath",
    duration: "7-8 hours",
  },
  {
    day: 6,
    title: "Badrinath Temple Visit",
    description: "Early morning darshan at Badrinath Temple. Explore nearby attractions including Mana Village (the last Indian village) and Vasudhara Falls. Attend evening aarti at the temple.",
    location: "Badrinath",
    duration: "Full Day",
  },
  {
    day: 7,
    title: "Badrinath to Haridwar/Rishikesh",
    description: "After breakfast, start the return journey to Haridwar/Rishikesh (10-11 hours). Check into your hotel and rest for the night.",
    location: "Haridwar/Rishikesh",
    duration: "10-11 hours",
  },
  {
    day: 8,
    title: "Departure",
    description: "After breakfast, depart from Haridwar/Rishikesh with memories of your sacred Do Dham Yatra pilgrimage.",
    location: "Haridwar/Rishikesh",
    duration: "Morning",
  },
];

const pricingOptions = [
  { people: "6 People", vehicle: "Ertiga / Innova", price: "13,999" },
  { people: "4 People", vehicle: "Sedan", price: "15,999" },
  { people: "2 People", vehicle: "Sedan", price: "19,999" },
  { people: "10+ People", vehicle: "Traveller Tempo", price: "10,999" },
];

const costIncludes = [
  "Meeting and assistance on arrival",
  "Accommodations in Deluxe rooms at hotels",
  "Daily fixed Menu breakfast & dinner",
  "Air-conditioned Vehicle for sightseeing and excursions",
  "Driver allowance, toll tax and parking charges",
  "All applicable taxes",
  "Kedarnath and Badrinath temple visit arrangements",
];

const costExcludes = [
  "Air fare / train fare",
  "Helicopter charges for Kedarnath (if opted)",
  "Coolie / porter charges",
  "Camera charges",
  "Donations at temples",
  "Extended stay due to any reason",
  "Any meals other than those specified in Cost Includes",
  "Personal expenses such as tips, telephone calls, laundry",
  "Guide & entrance fees during sightseeing",
];

const reviews = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Mumbai, India",
    date: "May 2024",
    rating: 5,
    comment: "The Do Dham Yatra was a life-changing experience. TravelX made every part of our journey comfortable and memorable. The guides were knowledgeable about the spiritual significance of each place we visited.",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Delhi, India",
    date: "June 2024",
    rating: 5,
    comment: "I'm grateful to the TravelX team for making my Kedarnath and Badrinath pilgrimage so smooth. Their attention to detail was impressive, and they handled all the logistics perfectly!",
  },
  {
    id: 3,
    name: "Arjun Singh",
    location: "Bangalore, India",
    date: "April 2024",
    rating: 4,
    comment: "Professional service, knowledgeable guides, and thoughtful planning. The accommodations were comfortable considering the remote locations. I highly recommend TravelX for any spiritual journey.",
  },
  {
    id: 4,
    name: "Meera Reddy",
    location: "Chennai, India",
    date: "July 2024",
    rating: 5,
    comment: "TravelX ensured our Do Dham Yatra was both spiritually fulfilling and comfortable. They took care of all arrangements, allowing us to focus on the divine experience. Will definitely travel with them again!",
  },
];

const DoDhamYatra = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/Tours/Do-dham-yatra-2025.webp"
          alt="Do Dham Yatra"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end px-8 pb-16">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
              Do Dham Yatra 2025
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mb-6">
              A sacred journey to the divine shrines of Kedarnath & Badrinath in the magnificent Himalayas
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar size={18} className="text-white mr-2" />
                <span className="text-white">8 Days, 7 Nights</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin size={18} className="text-white mr-2" />
                <span className="text-white">752 Km from Haridwar</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users size={18} className="text-white mr-2" />
                <span className="text-white">₹8,000 - ₹10,000 per person</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            About Do Dham Yatra
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-600 mb-4">
              The Do Dham Yatra is a sacred pilgrimage to two of the most revered shrines in the Char Dham circuit - Kedarnath and Badrinath. Located in the majestic Himalayan ranges of Uttarakhand, these temples are dedicated to Lord Shiva and Lord Vishnu respectively.
            </p>
            <p className="text-gray-600 mb-4">
              Kedarnath, situated at an altitude of 3,583 meters, is one of the twelve Jyotirlingas of Lord Shiva. The ancient temple is surrounded by breathtaking mountain peaks and meadows, accessible only by a trek from Gaurikund or by helicopter.
            </p>
            <p className="text-gray-600">
              Badrinath, located at an elevation of 3,133 meters, is dedicated to Lord Vishnu. The temple is situated along the banks of the Alaknanda River and is surrounded by the Nar and Narayan mountain ranges.
            </p>
          </div>
        </div>
      </div>

      {/* Tour Plan Timeline */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Your Journey Itinerary
          </h2>
          <TourTimeline events={timelineEvents} />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Tour Pricing
        </h2>
        <div className="max-w-4xl mx-auto">
          <PricingTable options={pricingOptions} />
          
          <div className="mt-16 space-y-12">
            <IncludesExcludes 
              includes={costIncludes} 
              excludes={costExcludes} 
            />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewsSection tourName="Do Dham Yatra" reviews={reviews} />

      {/* Book Now Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Book your Do Dham Yatra now and embark on a divine pilgrimage to the sacred shrines of Kedarnath and Badrinath.
          </p>
          <Link href="/contact">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
              Book Your Tour Now
              <ChevronRight size={20} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoDhamYatra;
