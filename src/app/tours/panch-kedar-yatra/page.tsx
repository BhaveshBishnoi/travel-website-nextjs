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
    title: "Arrival at Haridwar",
    description: "Arrive at Haridwar, the gateway to the sacred sites in Uttarakhand. Check-in at your hotel and spend the evening attending the mesmerizing Ganga Aarti ceremony at Har Ki Pauri.",
    location: "Haridwar",
    duration: "Arrival Day",
  },
  {
    day: 2,
    title: "Haridwar to Guptkashi",
    description: "After breakfast, start your journey to Guptkashi (approx. 8-9 hours drive). Enjoy the scenic beauty of the Himalayan range along the way. Check-in at your hotel in Guptkashi and rest for the night.",
    location: "Guptkashi",
    duration: "8-9 hours drive",
  },
  {
    day: 3,
    title: "Kedarnath Temple",
    description: "Early morning, drive to Sonprayag and then trek to Kedarnath Temple (16 km trek or opt for helicopter services). Visit the sacred Kedarnath Temple, one of the 12 Jyotirlingas. Return to Guptkashi for overnight stay.",
    location: "Kedarnath & Guptkashi",
    duration: "Full Day",
  },
  {
    day: 4,
    title: "Guptkashi to Ukhimath - Madhyamaheshwar",
    description: "Drive to Ukhimath and then trek to Madhyamaheshwar Temple (approx. 20 km trek). Madhyamaheshwar represents the middle (madhya) part of Lord Shiva. Overnight stay in tents near the temple.",
    location: "Madhyamaheshwar",
    duration: "Trekking Day",
  },
  {
    day: 5,
    title: "Madhyamaheshwar to Ukhimath - Tungnath",
    description: "Return to Ukhimath and drive to Chopta. From Chopta, trek to Tungnath Temple (4 km trek), the highest temple of Lord Shiva. Continue 1.5 km to Chandrashila peak for panoramic Himalayan views. Return to Chopta for overnight stay.",
    location: "Tungnath & Chopta",
    duration: "Trekking Day",
  },
  {
    day: 6,
    title: "Chopta to Rudraprayag - Kalpeshwar",
    description: "Drive to Helang and then trek to Kalpeshwar Temple (approx. 2 km). Kalpeshwar is where the matted hair (Jata) of Lord Shiva is worshipped. Overnight stay at Rudraprayag.",
    location: "Kalpeshwar & Rudraprayag",
    duration: "Trekking & Driving Day",
  },
  {
    day: 7,
    title: "Rudraprayag to Badrinath - Rudranath",
    description: "Drive to Joshimath and trek to Rudranath Temple (approx. 20 km trek). Rudranath is where the face of Lord Shiva is worshipped. This is one of the most challenging treks of the Panch Kedar circuit. Overnight stay in tents near the temple.",
    location: "Rudranath",
    duration: "Trekking Day",
  },
  {
    day: 8,
    title: "Return to Joshimath",
    description: "Trek back to Joshimath and rest at the hotel. You can explore the local market and the Shankaracharya Math in Joshimath.",
    location: "Joshimath",
    duration: "Trekking Day",
  },
  {
    day: 9,
    title: "Joshimath to Haridwar",
    description: "After breakfast, begin your return journey to Haridwar. Enjoy the scenic beauty of the Himalayas one last time. Arrive at Haridwar by evening.",
    location: "Haridwar",
    duration: "8-9 hours drive",
  },
  {
    day: 10,
    title: "Departure from Haridwar",
    description: "After breakfast, check out from the hotel and depart with memories of your divine Panch Kedar Yatra.",
    location: "Haridwar",
    duration: "Departure Day",
  },
];

const pricingOptions = [
  { people: "6 People", vehicle: "Innova", price: "25,999" },
  { people: "4 People", vehicle: "Sedan", price: "29,999" },
  { people: "2 People", vehicle: "Sedan", price: "35,999" },
  { people: "10+ People", vehicle: "Tempo Traveller", price: "22,999" },
];

const costIncludes = [
  "9 nights accommodation (hotels and tents as per itinerary)",
  "Daily breakfast and dinner",
  "All transfers and sightseeing by private vehicle",
  "Experienced driver throughout the journey",
  "English-speaking guide for the treks",
  "Necessary permits for the treks",
  "Basic first aid kit",
  "All applicable taxes and service charges",
];

const costExcludes = [
  "Airfare / train fare",
  "Helicopter services to Kedarnath (optional)",
  "Personal expenses like tips, laundry, telephone calls",
  "Camera fees and entrance fees at monuments/temples",
  "Travel insurance (highly recommended for trekking)",
  "Porter/mule charges for personal luggage during treks",
  "Lunch and any meals not mentioned in the inclusions",
  "Any expenses arising out of unforeseen circumstances like landslides, roadblocks, bad weather, etc.",
];

const reviews = [
  {
    id: 1,
    name: "Mohan Sharma",
    location: "Mumbai, India",
    date: "July 2024",
    rating: 5,
    comment: "The Panch Kedar Yatra was a life-changing experience. TravelX handled everything perfectly despite the challenging terrain. Our guide was knowledgeable about all the religious significance of each temple. Highly recommended for spiritual seekers!",
  },
  {
    id: 2,
    name: "Lata Mishra",
    location: "Lucknow, India",
    date: "June 2024",
    rating: 4,
    comment: "A spiritually enriching journey that tested our physical limits. Some of the treks were quite challenging, but the divine energy at each temple made it all worthwhile. TravelX arranged good accommodation even in remote locations.",
  },
  {
    id: 3,
    name: "Rakesh Tiwari",
    location: "Indore, India",
    date: "May 2024",
    rating: 5,
    comment: "As senior citizens, we were concerned about undertaking such a challenging pilgrimage, but TravelX customized the itinerary to our needs. They arranged helicopter services and porters whenever needed. The spiritual experience was profound.",
  },
  {
    id: 4,
    name: "Sarita Agarwal",
    location: "Kolkata, India",
    date: "August 2024",
    rating: 5,
    comment: "This was our second time with TravelX and they didn't disappoint. The Panch Kedar circuit is less crowded than Char Dham, which made for a more personal and peaceful spiritual experience. The arrangements were flawless despite the remote locations.",
  },
];

const PanchKedarYatra = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/Tours/panch-kedar-yatra.webp"
          alt="Panch Kedar Yatra"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end px-8 pb-16">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
              Panch Kedar Yatra
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mb-6">
              A divine pilgrimage to the five sacred abodes of Lord Shiva nestled in the majestic Himalayas
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar size={18} className="text-white mr-2" />
                <span className="text-white">10 Days, 9 Nights</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin size={18} className="text-white mr-2" />
                <span className="text-white">Uttarakhand</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users size={18} className="text-white mr-2" />
                <span className="text-white">₹22,999 - ₹35,999 per person</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            About Panch Kedar Yatra
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-600 mb-4">
              The Panch Kedar (Five Kedars) refers to five Hindu temples dedicated to Lord Shiva, located in the Garhwal Himalayan region of Uttarakhand, India. According to legend, the Pandavas sought Lord Shiva to atone for their sins after the Kurukshetra War. Lord Shiva avoided them by taking the form of a bull and diving into the ground.
            </p>
            <p className="text-gray-600 mb-4">
              Different parts of his body appeared at five different locations, which now constitute the five Kedar shrines: Kedarnath (hump), Madhyamaheshwar (navel), Tungnath (arms), Rudranath (face), and Kalpeshwar (hair).
            </p>
            <p className="text-gray-600">
              This pilgrimage circuit is considered one of the most sacred journeys in Hinduism, offering not only spiritual fulfillment but also breathtaking Himalayan landscapes, challenging treks, and a deep connection with ancient mythology and culture.
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

      {/* Sacred Sites Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            The Five Sacred Kedars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Kedarnath",
                description: "The main temple of the Panch Kedar, representing Lord Shiva's hump. Located at an altitude of 3,583 meters, it is the highest of the five temples.",
                elevation: "3,583 meters",
                significance: "The hump of Lord Shiva",
              },
              {
                title: "Madhyamaheshwar",
                description: "The fourth temple to be visited in the Panch Kedar pilgrimage, representing Lord Shiva's navel (middle part).",
                elevation: "3,289 meters",
                significance: "The navel of Lord Shiva",
              },
              {
                title: "Tungnath",
                description: "The highest Shiva temple in the world, representing Lord Shiva's arms. The trek to Tungnath is relatively easier compared to other Kedar temples.",
                elevation: "3,680 meters",
                significance: "The arms of Lord Shiva",
              },
              {
                title: "Rudranath",
                description: "The most difficult to reach of all Panch Kedar temples, representing Lord Shiva's face. The trek passes through dense forests and meadows.",
                elevation: "2,286 meters",
                significance: "The face of Lord Shiva",
              },
              {
                title: "Kalpeshwar",
                description: "The smallest and most accessible of the Panch Kedar temples, representing Lord Shiva's hair (jata).",
                elevation: "2,200 meters",
                significance: "The hair of Lord Shiva",
              },
            ].map((site, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{site.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-1" />
                    <span>{site.elevation}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{site.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-700 font-medium">Significance: {site.significance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewsSection tourName="Panch Kedar Yatra" reviews={reviews} />

      {/* Book Now Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for a Divine Spiritual Journey?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Book your Panch Kedar Yatra now and embark on a transformative pilgrimage to the sacred abodes of Lord Shiva in the Himalayas.
          </p>
          <Link href="/contact">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
              Book Your Pilgrimage Now
              <ChevronRight size={20} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PanchKedarYatra;