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
    title: "Arrival at New Tehri Town",
    description: "Depart from Dehradun/Rishikesh and drive to New Tehri Town (approx. 4-5 hours). Check-in at your hotel offering breathtaking views of Tehri Lake. In the evening, enjoy a leisurely walk around the town and watch the sunset over the lake.",
    location: "New Tehri Town",
    duration: "4-5 hours drive",
  },
  {
    day: 2,
    title: "Tehri Lake Adventure Day",
    description: "After breakfast, head to Tehri Lake for a day full of water sports and adventure activities. Enjoy jet skiing, banana boat rides, kayaking, and more. Take a boat ride across the vast lake and enjoy a picnic lunch with a view of the surrounding mountains.",
    location: "Tehri Lake",
    duration: "Full Day",
  },
  {
    day: 3,
    title: "Tehri Dam & Chandrabadni Temple",
    description: "Visit the majestic Tehri Dam - one of the highest dams in Asia. Learn about its construction and significance. Later, visit the ancient Chandrabadni Temple located at an altitude of 2,277 meters, offering panoramic views of the Himalayas and Tehri Lake.",
    location: "Tehri Dam & Chandrabadni",
    duration: "Full Day",
  },
  {
    day: 4,
    title: "Kanatal & Surkanda Devi Temple",
    description: "Drive to the scenic hill station of Kanatal (approx. 1-2 hours). Trek to the famous Surkanda Devi Temple, situated at an altitude of 9,995 feet. Enjoy the magnificent views of the Himalayan ranges and surrounding forests. Return to your hotel by evening.",
    location: "Kanatal & Surkanda Devi",
    duration: "Full Day",
  },
  {
    day: 5,
    title: "Departure",
    description: "After breakfast, check out from the hotel and begin your return journey to Dehradun/Rishikesh with memories of your beautiful Tehri Lake adventure.",
    location: "New Tehri to Dehradun/Rishikesh",
    duration: "4-5 hours drive",
  },
];

const pricingOptions = [
  { people: "6 People", vehicle: "Innova", price: "8,999" },
  { people: "4 People", vehicle: "Sedan", price: "9,999" },
  { people: "2 People", vehicle: "Sedan", price: "11,999" },
  { people: "10+ People", vehicle: "Tempo Traveller", price: "7,999" },
];

const costIncludes = [
  "4 nights accommodation in lake view hotel/resort",
  "Daily breakfast and dinner",
  "All transfers and sightseeing by private vehicle",
  "Experienced driver throughout the journey",
  "Basic water sports activities at Tehri Lake (jet ski, banana boat, kayaking)",
  "Boat ride at Tehri Lake",
  "All applicable taxes",
  "Parking and toll charges",
];

const costExcludes = [
  "Airfare / train fare",
  "Personal expenses like tips, laundry, telephone calls",
  "Camera fees and entrance fees at monuments",
  "Additional adventure activities not mentioned in inclusions",
  "Lunch and any meals not mentioned in the inclusions",
  "Expenses due to any unforeseen circumstances or natural calamities",
  "Travel insurance",
  "Anything not mentioned in the inclusions",
];

const reviews = [
  {
    id: 1,
    name: "Prakash Verma",
    location: "Ghaziabad, India",
    date: "June 2024",
    rating: 5,
    comment: "The Tehri Lake Tour organized by TravelX exceeded our expectations. The lake view hotel was stunning, and the water sports were so much fun for our entire family. Seeing the massive Tehri Dam up close was truly impressive!",
  },
  {
    id: 2,
    name: "Sunita Rawat",
    location: "Dehradun, India",
    date: "May 2024",
    rating: 4,
    comment: "A wonderful weekend getaway from Dehradun. The boat ride on the turquoise waters of Tehri Lake was the highlight of our trip. TravelX's arrangements were smooth and their team was very responsive.",
  },
  {
    id: 3,
    name: "Aditya Negi",
    location: "Delhi, India",
    date: "April 2024",
    rating: 5,
    comment: "Having visited most hill stations in Uttarakhand, Tehri Lake was something unique and refreshing. The adventure activities were well organized, and the views from our hotel room were simply breathtaking. Thanks, TravelX!",
  },
  {
    id: 4,
    name: "Manisha Joshi",
    location: "Noida, India",
    date: "July 2024",
    rating: 5,
    comment: "This was our first time visiting Tehri Lake, and it won't be our last! The combination of mountains and the massive lake creates a magical setting. The trek to Surkanda Devi Temple was challenging but the views were absolutely worth it.",
  },
];

const TehriLakeTour = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/Tours/tehri-lake-tour.webp"
          alt="Tehri Lake Tour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end px-8 pb-16">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
              Tehri Lake - Adventure Paradise
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mb-6">
              Experience the breathtaking beauty of Asia's largest man-made lake combined with thrilling water sports and mountain adventures
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar size={18} className="text-white mr-2" />
                <span className="text-white">5 Days, 4 Nights</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin size={18} className="text-white mr-2" />
                <span className="text-white">100 Km from Dehradun</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users size={18} className="text-white mr-2" />
                <span className="text-white">₹7,999 - ₹11,999 per person</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            About Tehri Lake
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-600 mb-4">
              Tehri Lake is one of Asia's largest man-made lakes, formed by the construction of the Tehri Dam on the confluence of Bhagirathi and Bhilangana rivers in Uttarakhand. With a water spread area of around 42 square kilometers, this turquoise blue lake offers a unique combination of water sports and mountain adventures.
            </p>
            <p className="text-gray-600 mb-4">
              The stunning lake is surrounded by the magnificent Garhwal Himalayas, creating a breathtaking landscape that captivates visitors. New Tehri Town, situated on the banks of the lake, provides modern amenities and accommodations with spectacular views.
            </p>
            <p className="text-gray-600">
              Tehri Lake has rapidly emerged as Uttarakhand's premiere water sports destination, offering activities like jet skiing, banana boat rides, kayaking, canoeing, and boating. The area also provides opportunities for trekking, camping, and visits to ancient temples, making it a perfect blend of adventure, spirituality, and natural beauty.
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

      {/* Adventure Activities Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Adventure Activities at Tehri Lake
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Jet Skiing",
                description: "Experience the thrill of speeding across the vast lake on a powerful jet ski.",
                icon: "🏄‍♂️",
              },
              {
                title: "Boating",
                description: "Take a relaxing boat ride and admire the breathtaking surroundings of mountains and blue waters.",
                icon: "🚤",
              },
              {
                title: "Kayaking",
                description: "Paddle at your own pace and explore the serene corners of this massive lake.",
                icon: "🛶",
              },
              {
                title: "Banana Boat",
                description: "Enjoy the fun-filled ride on a banana boat with friends and family.",
                icon: "🍌",
              },
            ].map((activity, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewsSection tourName="Tehri Lake Tour" reviews={reviews} />

      {/* Book Now Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for an Adventure at Tehri Lake?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Book your Tehri Lake tour now and experience the perfect blend of mountain views and thrilling water adventures.
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

export default TehriLakeTour;