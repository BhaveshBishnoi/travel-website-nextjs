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
    description: "Welcome to the sacred land of Uttarakhand! Upon arrival at Dehradun Airport or Haridwar railway station, transfer to your hotel. In the evening, attend the mesmerizing Ganga Aarti at Har Ki Pauri in Haridwar or Triveni Ghat in Rishikesh.",
    location: "Haridwar/Rishikesh",
    duration: "Full Day",
  },
  {
    day: 2,
    title: "Haridwar/Rishikesh to Barkot",
    description: "After breakfast, drive to Barkot (7-8 hour journey). En route, visit Kempty Falls in Mussoorie. Check into your hotel in Barkot for overnight stay.",
    location: "Barkot",
    duration: "7-8 hours",
  },
  {
    day: 3,
    title: "Barkot to Yamunotri and back to Barkot",
    description: "Early morning drive to Janki Chatti, followed by a 6km trek to Yamunotri Temple. After darshan and rituals, trek back to Janki Chatti and return to Barkot for overnight stay.",
    location: "Yamunotri - Barkot",
    duration: "Full Day",
  },
  {
    day: 4,
    title: "Barkot to Uttarkashi",
    description: "Drive from Barkot to Uttarkashi (4-5 hours). Visit Vishwanath Temple and explore the holy town. Overnight stay at Uttarkashi.",
    location: "Uttarkashi",
    duration: "4-5 hours",
  },
  {
    day: 5,
    title: "Uttarkashi to Gangotri and back to Uttarkashi",
    description: "Early morning drive to Gangotri (4-5 hours). After darshan at Gangotri Temple and rituals at the holy Ganges, return to Uttarkashi for overnight stay.",
    location: "Gangotri - Uttarkashi",
    duration: "Full Day",
  },
  {
    day: 6,
    title: "Uttarkashi to Guptkashi",
    description: "Drive from Uttarkashi to Guptkashi (8-9 hours). Check into your hotel for overnight stay.",
    location: "Guptkashi",
    duration: "8-9 hours",
  },
  {
    day: 7,
    title: "Guptkashi to Kedarnath and back",
    description: "Early morning, drive to Sonprayag or Phata (helicopter base). Either trek from Sonprayag via Gaurikund (16km) or take a helicopter to Kedarnath. After darshan at Kedarnath Temple, return to Guptkashi for overnight stay.",
    location: "Kedarnath - Guptkashi",
    duration: "Full Day",
  },
  {
    day: 8,
    title: "Guptkashi to Badrinath",
    description: "Drive from Guptkashi to Badrinath (7-8 hours). Enjoy the beautiful views of the Himalayas. Check into your hotel at Badrinath for overnight stay.",
    location: "Badrinath",
    duration: "7-8 hours",
  },
  {
    day: 9,
    title: "Badrinath Visit",
    description: "Morning darshan at Badrinath Temple. Visit Mana Village (last Indian village before Tibet border), Vyas Gufa, and Bhim Pul. Evening aarti at Badrinath Temple. Overnight stay at Badrinath.",
    location: "Badrinath",
    duration: "Full Day",
  },
  {
    day: 10,
    title: "Badrinath to Rudraprayag",
    description: "After breakfast, drive to Rudraprayag (7-8 hours). Visit the confluence of Alaknanda and Mandakini rivers. Overnight stay at Rudraprayag.",
    location: "Rudraprayag",
    duration: "7-8 hours",
  },
  {
    day: 11,
    title: "Rudraprayag to Haridwar/Rishikesh",
    description: "Drive from Rudraprayag to Haridwar/Rishikesh (5-6 hours). Enjoy some free time for shopping. Overnight stay at Haridwar/Rishikesh.",
    location: "Haridwar/Rishikesh",
    duration: "5-6 hours",
  },
  {
    day: 12,
    title: "Departure",
    description: "After breakfast, transfer to Dehradun Airport or Haridwar railway station for your onward journey with blessed memories of your Char Dham Yatra.",
    location: "Haridwar/Rishikesh",
    duration: "Morning",
  },
];

const pricingOptions = [
  { people: "6 People", vehicle: "Innova / Tempo Traveller", price: "29,999" },
  { people: "4 People", vehicle: "Innova", price: "31,999" },
  { people: "2 People", vehicle: "Sedan", price: "35,999" },
  { people: "10+ People", vehicle: "Tempo Traveller", price: "25,999" },
];

const costIncludes = [
  "Meeting and assistance on arrival",
  "11 nights accommodation in hotels/camps/guesthouses (as per availability)",
  "Daily breakfast and dinner",
  "Transportation in private vehicle as per itinerary",
  "All applicable taxes and service charges",
  "Driver's allowance, parking fees, and fuel charges",
  "Basic first aid kit",
  "Temple visit arrangements and VIP darshan where possible",
];

const costExcludes = [
  "Airfare / train fare",
  "Helicopter charges for Kedarnath (if opted)",
  "Pony / Doli / Porter charges for Yamunotri and Kedarnath treks",
  "Entry fees and photography charges",
  "Donations at temples",
  "Personal expenses and tips",
  "Any meals not mentioned in inclusions",
  "Travel insurance",
  "Any additional expenses due to unforeseen circumstances, natural calamities, or roadblocks",
  "Guide services",
];

const reviews = [
  {
    id: 1,
    name: "Manoj Goyal",
    location: "Delhi, India",
    date: "July 2024",
    rating: 5,
    comment: "Our Char Dham Yatra with TravelX was flawless. From comfortable accommodations to timely transfers, everything was well-organized. The guides were knowledgeable and helped us understand the spiritual significance of each temple. Highly recommended!",
  },
  {
    id: 2,
    name: "Sushila Patel",
    location: "Ahmedabad, India",
    date: "June 2024",
    rating: 4,
    comment: "TravelX made our spiritual journey comfortable despite the challenging terrains. The staff was courteous and always ready to help. The accommodations were decent considering the remote locations. The only suggestion would be to add more rest days in the itinerary.",
  },
  {
    id: 3,
    name: "Raman Sharma",
    location: "Jaipur, India",
    date: "May 2024",
    rating: 5,
    comment: "This was my second Char Dham Yatra, but first with TravelX, and I must say the difference was remarkable. The smooth coordination, timely departures, and spiritual guidance made this journey truly memorable. Will definitely choose them for future pilgrimages.",
  },
  {
    id: 4,
    name: "Anita Desai",
    location: "Mumbai, India",
    date: "August 2024",
    rating: 5,
    comment: "Being elderly, we were concerned about the difficult terrain, but TravelX took excellent care of us. The team was patient, helpful, and made special arrangements whenever needed. The journey was spiritually fulfilling and physically comfortable. Thank you!",
  },
];

const CharDhamYatra = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/Tours/char-dham-yatra-2025.webp"
          alt="Char Dham Yatra"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end px-8 pb-16">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
              Char Dham Yatra 2025
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mb-6">
              An ultimate spiritual journey to the four sacred shrines of Yamunotri, Gangotri, Kedarnath & Badrinath
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar size={18} className="text-white mr-2" />
                <span className="text-white">12 Days, 11 Nights</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin size={18} className="text-white mr-2" />
                <span className="text-white">1,200+ Km journey</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users size={18} className="text-white mr-2" />
                <span className="text-white">₹25,999 - ₹35,999 per person</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            About Char Dham Yatra
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-600 mb-4">
              The Char Dham Yatra is the most sacred pilgrimage in Hinduism, consisting of four holy shrines located in the Garhwal Himalayas of Uttarakhand. These four shrines - Yamunotri, Gangotri, Kedarnath, and Badrinath - represent the abodes of important deities and the sources of India's holiest rivers.
            </p>
            <p className="text-gray-600 mb-4">
              Yamunotri is the source of the Yamuna River and dedicated to Goddess Yamuna. Gangotri is the origin of the sacred Ganges (Ganga) River. Kedarnath is dedicated to Lord Shiva and is one of the 12 Jyotirlingas. Badrinath is dedicated to Lord Vishnu and is one of the 108 Divya Desams.
            </p>
            <p className="text-gray-600">
              Completing the Char Dham Yatra is believed to wash away all sins and lead to salvation (Moksha). The journey takes you through breathtaking landscapes, challenging terrains, and spiritually charged atmospheres that transform both body and soul.
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
      <ReviewsSection tourName="Char Dham Yatra" reviews={reviews} />

      {/* Book Now Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Your Ultimate Spiritual Journey?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Book your Char Dham Yatra now and embark on a once-in-a-lifetime pilgrimage to the four sacred shrines in the Himalayas.
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

export default CharDhamYatra;