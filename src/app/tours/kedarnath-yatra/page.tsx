"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar } from "lucide-react";

import TourTimeline from "@/components/TourTimeline";
import PricingTable from "@/components/PricingTable";
import IncludesExcludes from "@/components/IncludesExcludes";
import ReviewsSection from "@/components/ReviewsSection";

const KedarnathYatraPage = () => {
  // Timeline events for the tour
  const timelineEvents = [
    {
      day: 1,
      title: "Arrival in Haridwar",
      description:
        "Arrive in Haridwar, the gateway to the Char Dham. Check into your hotel and spend the evening experiencing the mesmerizing Ganga Aarti at Har Ki Pauri.",
      location: "Haridwar",
      duration: "Full Day",
    },
    {
      day: 2,
      title: "Haridwar to Guptkashi",
      description:
        "After breakfast, drive to Guptkashi (approx. 200 km), offering stunning views of the Himalayan ranges. En route, visit Devprayag, the confluence of the Alaknanda and Bhagirathi rivers. Overnight stay in Guptkashi.",
      location: "Guptkashi",
      duration: "8-9 hours",
    },
    {
      day: 3,
      title: "Guptkashi to Sonprayag to Kedarnath",
      description:
        "Early morning drive to Sonprayag. From here, take a shared jeep to Gaurikund, the starting point of the trek to Kedarnath. Begin your 16 km trek or choose a helicopter ride (additional cost). Overnight stay in Kedarnath.",
      location: "Kedarnath",
      duration: "6-7 hours trek",
    },
    {
      day: 4,
      title: "Kedarnath Temple Darshan",
      description:
        "Early morning visit to the sacred Kedarnath Temple for darshan. Explore the temple complex and surrounding area. Spend time in spiritual contemplation in this divine abode of Lord Shiva.",
      location: "Kedarnath",
      duration: "Full Day",
    },
    {
      day: 5,
      title: "Kedarnath to Guptkashi",
      description:
        "Early morning, trek down from Kedarnath to Gaurikund (16 km). Take a shared jeep to Sonprayag and then drive back to Guptkashi. Overnight stay in Guptkashi.",
      location: "Guptkashi",
      duration: "7-8 hours",
    },
    {
      day: 6,
      title: "Guptkashi to Haridwar",
      description:
        "After breakfast, begin your return journey to Haridwar. En route, visit Rudraprayag and enjoy the scenic beauty of the Himalayan valleys. Arrive in Haridwar by evening.",
      location: "Haridwar",
      duration: "8-9 hours",
    },
    {
      day: 7,
      title: "Departure from Haridwar",
      description:
        "After breakfast, check out from the hotel. Explore local markets for souvenirs. Transfer to railway station/airport for your onward journey with beautiful memories of your Kedarnath pilgrimage.",
      location: "Haridwar",
      duration: "Half Day",
    },
  ];

  // Pricing options for the tour
  const pricingOptions = [
    {
      people: "1 Person",
      vehicle: "Sedan",
      price: "32,999",
    },
    {
      people: "2-3 People",
      vehicle: "Sedan",
      price: "18,999",
    },
    {
      people: "4-5 People",
      vehicle: "SUV",
      price: "16,999",
    },
    {
      people: "6-9 People",
      vehicle: "Tempo Traveller",
      price: "14,999",
    },
  ];

  // What's included and what's not
  const includes = [
    "Accommodation in hotels/camps on sharing basis",
    "Meals (breakfast and dinner) as per the itinerary",
    "All transfers and sightseeing by private vehicle",
    "Experienced driver and fuel costs",
    "All applicable taxes and service charges",
    "Basic first aid kit",
    "Tour guide for Kedarnath Temple visit",
  ];

  const excludes = [
    "Airfare or train tickets to/from Haridwar",
    "Helicopter tickets for Kedarnath (can be arranged at additional cost)",
    "Porter or pony charges during the trek",
    "Personal expenses and tips",
    "Travel insurance",
    "Any meals not mentioned in the inclusions",
    "Additional sightseeing or activities not mentioned in the itinerary",
    "VIP darshan tickets",
  ];

  // Reviews for the tour
  const reviews = [
    {
      id: 1,
      name: "Rajesh Sharma",
      date: "August 2024",
      rating: 5,
      comment:
        "One of the most spiritually fulfilling journeys I've ever undertaken. The arrangements by TheIndianRoamer were impeccable, from comfortable stays to knowledgeable guides who shared fascinating stories about the temple's history.",
      avatar: "/avatars/avatar-1.png",
      location: "New Delhi",
    },
    {
      id: 2,
      name: "Priya Patel",
      date: "July 2024",
      rating: 4,
      comment:
        "Very well organized tour to Kedarnath. The accommodations were comfortable considering the remote locations. Would have appreciated more time at the temple, but overall a memorable pilgrimage.",
      avatar: "/avatars/avatar-2.png",
      location: "Mumbai",
    },
    {
      id: 3,
      name: "Aditya Kapoor",
      date: "June 2024",
      rating: 5,
      comment:
        "Kedarnath has been on my bucket list for years and TheIndianRoamer made it possible in the most comfortable way. The trek was tough but the views and spiritual experience were unmatched. Highly recommend!",
      avatar: "/avatars/avatar-3.png",
      location: "Bangalore",
    },
    {
      id: 4,
      name: "Sunita Gupta",
      date: "May 2024",
      rating: 5,
      comment:
        "As a senior citizen, I was worried about the journey, but TheIndianRoamer arranged everything perfectly. They even helped arrange a helicopter ride for me. The darshan was divine and worth every effort.",
      avatar: "/avatars/avatar-4.png",
      location: "Pune",
    },
  ];

  return (
    <div className="bg-gray-50 pt-24">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/Tours/kedarnath-Yatra-scaled.webp"
          alt="Kedarnath Temple"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end px-8 pb-16">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
              Kedarnath Yatra
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mb-6">
              Embark on a sacred journey to one of the holiest shrines of Lord Shiva in the majestic Himalayas
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                <Calendar className="w-5 h-5 mr-2" />
                <span>7 Days | 6 Nights</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                <span>Starting from ₹14,999 per person</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Tour Overview</h2>
          <p className="text-gray-600 mb-4">
            The Kedarnath Yatra is a sacred pilgrimage to one of the twelve Jyotirlingas of Lord Shiva. Located in the Rudraprayag district of Uttarakhand at an altitude of 3,583 meters above sea level, the Kedarnath Temple stands against the backdrop of the magnificent Kedarnath peak.
          </p>
          <p className="text-gray-600 mb-4">
            This 7-day journey takes you through scenic Himalayan landscapes, along the banks of the holy Mandakini River, culminating in a spiritually enriching visit to the ancient temple. The trek to Kedarnath is a challenging but rewarding experience that combines physical endurance with spiritual enlightenment.
          </p>
          <p className="text-gray-600 mb-4">
            The best time to visit Kedarnath is from May to June and September to October when the weather is pleasant and the temple is open to devotees. The temple remains closed during winter months due to heavy snowfall.
          </p>
        </div>

        {/* Timeline/Itinerary */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Tour Itinerary</h2>
          <TourTimeline events={timelineEvents} />
        </div>

        {/* Pricing Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Tour Pricing</h2>
          <PricingTable options={pricingOptions} />
          <p className="text-sm text-gray-500 mt-4">
            * Prices are per person on twin sharing basis. Single occupancy will attract an additional charge.
            <br />* Prices are subject to change during peak season (May-June) and festival times.
          </p>
        </div>

        {/* Includes/Excludes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Cost Includes & Excludes
          </h2>
          <IncludesExcludes includes={includes} excludes={excludes} />
        </div>

        {/* Important Notes */}
        <div className="mb-16 bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Important Information
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>The Kedarnath Temple is situated at a high altitude. Acclimatization is essential to avoid altitude sickness.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>Helicopter services are subject to weather conditions and availability.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>Carry necessary medications, warm clothes, rain protection, comfortable trekking shoes, and water bottles.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>Mobile network connectivity is limited in the Kedarnath region.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>The trek to Kedarnath is approximately 16 km and can be challenging. Pony and doli services are available at additional cost.</span>
            </li>
          </ul>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Traveller Reviews
          </h2>
          <ReviewsSection reviews={reviews} tourName="Kedarnath Yatra" />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Embark on Your Spiritual Journey?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Book your Kedarnath Yatra package today and experience one of the most sacred pilgrimages in Hinduism.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KedarnathYatraPage;