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
    title: "Arrival at Chakrata",
    description: "Start your journey from Dehradun and reach Chakrata (around 3 hours drive). Check-in at your hotel and relax. In the evening, take a stroll through the local market for a feel of the quaint hill station life.",
    location: "Chakrata",
    duration: "3 hours drive",
  },
  {
    day: 2,
    title: "Tiger Falls & Deoban",
    description: "After breakfast, visit the magnificent Tiger Falls – one of the highest direct waterfalls in India (312 feet). Then proceed to Deoban, known for its dense deodar forests and panoramic views of the snow-capped Himalayas. Enjoy a packed lunch amidst nature.",
    location: "Tiger Falls & Deoban",
    duration: "Full Day",
  },
  {
    day: 3,
    title: "Kanasar & Mundali",
    description: "Visit Kanasar, home to some of the oldest and tallest deodar trees in Asia. Continue to Mundali, offering breathtaking views of the Himalayan ranges. Trek through the beautiful trails and enjoy a picnic lunch surrounded by stunning natural beauty.",
    location: "Kanasar & Mundali",
    duration: "Full Day",
  },
  {
    day: 4,
    title: "Chilmiri Neck & Devban Temple",
    description: "Explore Chilmiri Neck, a vantage point offering a magnificent view of the snow-covered Himalayan ranges. Visit the ancient Devban Temple dedicated to the forest deity. Enjoy bird watching and photography in this pristine environment.",
    location: "Chilmiri Neck & Devban Temple",
    duration: "Full Day",
  },
  {
    day: 5,
    title: "Departure",
    description: "After breakfast, check out from the hotel and drive back to Dehradun. Your tour concludes here with memories to cherish for a lifetime.",
    location: "Chakrata to Dehradun",
    duration: "3 hours drive",
  },
];

const pricingOptions = [
  { people: "6 People", vehicle: "Innova", price: "7,999" },
  { people: "4 People", vehicle: "Sedan", price: "8,999" },
  { people: "2 People", vehicle: "Sedan", price: "10,999" },
  { people: "10+ People", vehicle: "Tempo Traveller", price: "6,999" },
];

const costIncludes = [
  "4 nights accommodation in hotel/resort (as per selected package)",
  "Daily breakfast and dinner",
  "All transfers and sightseeing by private vehicle",
  "Experienced driver throughout the journey",
  "All applicable taxes",
  "Parking and toll charges",
  "Basic first aid kit",
];

const costExcludes = [
  "Airfare / train fare",
  "Personal expenses like tips, laundry, telephone calls",
  "Camera fees and entrance fees at monuments/parks",
  "Any adventure activities and related equipment rentals",
  "Lunch and any meals not mentioned in the inclusions",
  "Expenses due to any unforeseen circumstances or natural calamities",
  "Travel insurance",
  "Anything not mentioned in the inclusions",
];

const reviews = [
  {
    id: 1,
    name: "Vipul Mehra",
    location: "New Delhi, India",
    date: "April 2024",
    rating: 5,
    comment: "Our trip to Chakrata was simply amazing. TravelX arranged everything perfectly - from comfortable accommodations to well-planned sightseeing. Tiger Falls was the highlight of our journey, truly mesmerizing.",
  },
  {
    id: 2,
    name: "Kavita Singh",
    location: "Chandigarh, India",
    date: "March 2024",
    rating: 4,
    comment: "Chakrata is a hidden gem compared to crowded hill stations like Mussoorie. TravelX ensured we experienced the best of this pristine location. The tour plan was well-balanced between adventure and relaxation.",
  },
  {
    id: 3,
    name: "Rohit Joshi",
    location: "Gurgaon, India",
    date: "May 2024",
    rating: 5,
    comment: "As a nature photographer, Chakrata was paradise for me. TravelX's guide knew exactly which spots would offer the best photography opportunities. The views from Chilmiri Neck were spectacular!",
  },
  {
    id: 4,
    name: "Anjali Gupta",
    location: "Lucknow, India",
    date: "February 2024",
    rating: 5,
    comment: "We were looking for a peaceful retreat away from crowded tourist spots, and TravelX's Chakrata tour delivered exactly that. The deodar forests in Kanasar were like something out of a fairy tale. Highly recommended!",
  },
];

const ChakrataTour = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/Tours/chakrata-tour.webp"
          alt="Chakrata Tour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end px-8 pb-16">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
              Chakrata - The Hidden Himalayan Gem
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mb-6">
              Discover untouched natural beauty, majestic waterfalls, and dense deodar forests in this serene hill station
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar size={18} className="text-white mr-2" />
                <span className="text-white">5 Days, 4 Nights</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin size={18} className="text-white mr-2" />
                <span className="text-white">88 Km from Dehradun</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users size={18} className="text-white mr-2" />
                <span className="text-white">₹6,999 - ₹10,999 per person</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            About Chakrata
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-600 mb-4">
              Nestled in the Dehradun district of Uttarakhand, Chakrata is a serene hill station situated at an elevation of 7,000-7,500 feet above sea level. Once a summer retreat of the British, this lesser-known destination offers untouched natural beauty away from the hustle and bustle of popular tourist spots.
            </p>
            <p className="text-gray-600 mb-4">
              Chakrata is renowned for its ancient deodar and oak forests, magnificent waterfalls, and panoramic views of the Himalayan peaks. The region is also home to diverse flora and fauna, making it a paradise for nature lovers and adventure enthusiasts.
            </p>
            <p className="text-gray-600">
              With its pristine environment, Chakrata offers various activities like trekking, bird watching, and photography. The town retains its old-world charm with colonial-era architecture and a peaceful atmosphere that allows visitors to reconnect with nature.
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
      <ReviewsSection tourName="Chakrata Tour" reviews={reviews} />

      {/* Book Now Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore Chakrata?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Book your Chakrata tour now and experience the untouched beauty of this hidden Himalayan gem.
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

export default ChakrataTour;