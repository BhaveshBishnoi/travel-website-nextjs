"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Clock, Users, ChevronRight } from "lucide-react";
import TourTimeline from "@/components/TourTimeline";
import PricingTable, { IncludesExcludes } from "@/components/PricingTable";
import ReviewsSection from "@/components/ReviewsSection";

const timelineEvents = [
  {
    day: 1,
    title: "Arrival in Bhubaneswar",
    description: "Arrive at Bhubaneswar airport/railway station. Check-in at your hotel and visit the magnificent Lingaraj Temple, Rajarani Temple, and Mukteshwar Temple. Overnight stay in Bhubaneswar.",
    location: "Bhubaneswar",
    duration: "Arrival Day",
  },
  {
    day: 2,
    title: "Bhubaneswar to Puri",
    description: "After breakfast, drive to Puri (approx. 60 km). Visit Konark Sun Temple, a UNESCO World Heritage Site, en route. Check-in at your hotel in Puri and spend the evening at Puri Beach. Overnight stay in Puri.",
    location: "Puri",
    duration: "3-4 hours drive",
  },
  {
    day: 3,
    title: "Jagannath Temple Darshan",
    description: "Early morning, visit the sacred Jagannath Temple for darshan. Spend time exploring the temple complex and learning about its history and significance. In the evening, attend the mesmerizing Aarti ceremony. Overnight stay in Puri.",
    location: "Puri",
    duration: "Full Day",
  },
  {
    day: 4,
    title: "Chilika Lake Excursion",
    description: "Embark on a day trip to Chilika Lake, Asia's largest brackish water lagoon. Enjoy a boat ride to spot the rare Irrawaddy dolphins and visit Kalijai Island. Return to Puri for overnight stay.",
    location: "Chilika Lake & Puri",
    duration: "Full Day",
  },
  {
    day: 5,
    title: "Puri to Bhubaneswar",
    description: "After breakfast, check-out from your hotel and drive back to Bhubaneswar. En route, visit the ancient Dhauli Buddhist Stupa and the Pipli Crafts Village, famous for its appliqué work. Drop-off at Bhubaneswar airport/railway station for departure.",
    location: "Bhubaneswar",
    duration: "3-4 hours drive",
  },
];

const pricingOptions = [
  {
    people: "1-2 People",
    vehicle: "Sedan",
    price: "₹15,999/person",
  },
  {
    people: "3-5 People",
    vehicle: "SUV",
    price: "₹22,999/person",
  },
  {
    people: "6-10 People",
    vehicle: "Tempo Traveller",
    price: "₹32,999/person",
  },
];

const includes = [
  "Accommodation as per selected package",
  "Meals as mentioned in the selected package",
  "All transfers and sightseeing in AC vehicle",
  "Expert local guide for temple visits",
  "Chilika Lake boat ride",
  "All applicable taxes",
  "24/7 on-tour assistance",
];

const excludes = [
  "Airfare or train fare",
  "Personal expenses such as laundry, telephone calls, etc.",
  "Camera fees at monuments (if applicable)",
  "Travel insurance",
  "Any meals not mentioned in the inclusions",
  "Optional activities mentioned in the itinerary",
  "Tips and gratuities",
  "Any items or services not specified in the inclusions",
];

const reviews = [
  {
    id: 1,
    name: "Rajeev Malhotra",
    location: "Delhi, India",
    rating: 5,
    date: "January 2025",
    comment:
      "Our Jagannath Puri Yatra with TheIndianRoamer was incredible! The temple visits were well-organized and our guide was very knowledgeable about the history and significance of each site. The hotel arrangements were excellent and the food was delicious. Highly recommend!",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    location: "Bangalore, India",
    rating: 5,
    date: "December 2024",
    comment:
      "A truly divine experience! The darshan at Jagannath Temple was seamless thanks to the special arrangements made by TheIndianRoamer. The Chilika Lake excursion was breathtaking and we were lucky to spot the dolphins. The entire trip was hassle-free and spiritually fulfilling.",
  },
  {
    id: 3,
    name: "Vikram Patel",
    location: "Ahmedabad, India",
    rating: 4,
    date: "November 2024",
    comment:
      "Very good tour package. The accommodation and transportation were comfortable. Our guide was excellent and provided deep insights into the cultural and spiritual aspects of the temples. The only improvement could be more free time for shopping in Puri. Overall, a memorable journey.",
  },
];

const JagannathPuriYatra = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <Image
          src="/Tours/Jaganath-Puri-Yatra-scaled.webp"
          alt="Jagannath Puri Temple"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Jagannath Puri Yatra
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-6">
            Experience the divine journey to Lord Jagannath's sacred abode in Puri, Odisha
          </p>
          <div className="flex flex-wrap gap-4 text-white/90 text-sm md:text-base">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>5 Days, 4 Nights</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Bhubaneswar, Puri, Konark, Chilika</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>Best Time: October to March</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>Group & Private Tours Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Overview */}
        <div className="mb-16 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            About Jagannath Puri Yatra
          </h2>
          <p className="text-gray-600 mb-6">
            The Jagannath Puri Yatra is a sacred pilgrimage to one of the most revered Char Dham pilgrimage sites in India. This spiritual journey takes you to the coastal town of Puri in Odisha, home to the magnificent Jagannath Temple, dedicated to Lord Jagannath, a form of Lord Vishnu.
          </p>
          <p className="text-gray-600 mb-6">
            The temple, built in the 12th century, is renowned for its annual Rath Yatra (Chariot Festival), which attracts millions of devotees from around the world. Our carefully crafted Jagannath Puri Yatra takes you through the spiritual and cultural richness of Odisha, visiting not only the Jagannath Temple but also other significant sites like the Konark Sun Temple, a UNESCO World Heritage Site, and the serene Chilika Lake.
          </p>
          <p className="text-gray-600">
            This journey offers a perfect blend of spiritual enlightenment, architectural marvels, natural beauty, and cultural experiences, making it a holistic and fulfilling pilgrimage for devotees and travelers alike.
          </p>
        </div>

        {/* Tour Plan Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Tour Itinerary
          </h2>
          <TourTimeline events={timelineEvents} />
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Tour Packages
          </h2>
          <PricingTable options={pricingOptions} />
        </div>

        {/* Includes/Excludes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Cost Includes & Excludes
          </h2>
          <IncludesExcludes includes={includes} excludes={excludes} />
        </div>

        {/* Top Attractions Section */}
        <div className="mb-16 bg-blue-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Sacred Sites of Jagannath Puri Yatra
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Jagannath Temple",
                  description: "The main temple dedicated to Lord Jagannath, his brother Balabhadra and sister Subhadra. Known for its magnificent architecture and the famous Rath Yatra festival.",
                  location: "Puri",
                  highlight: "Home of Lord Jagannath",
                },
                {
                  title: "Konark Sun Temple",
                  description: "A 13th-century UNESCO World Heritage Site, this architectural marvel is designed in the form of a chariot of the Sun God, with 12 pairs of wheels and 7 horses.",
                  location: "Konark",
                  highlight: "UNESCO World Heritage Site",
                },
                {
                  title: "Chilika Lake",
                  description: "Asia's largest brackish water lagoon, home to the endangered Irrawaddy dolphins, migratory birds, and the sacred Kalijai Temple located on an island within the lake.",
                  location: "Chilika",
                  highlight: "Largest coastal lagoon in India",
                },
                {
                  title: "Lingaraj Temple",
                  description: "An ancient temple dedicated to Lord Shiva, showcasing intricate Kalinga architecture. The temple stands tall at about 180 feet and is surrounded by numerous smaller temples.",
                  location: "Bhubaneswar",
                  highlight: "Largest temple in Bhubaneswar",
                },
                {
                  title: "Puri Beach",
                  description: "A sacred beach where devotees take a holy dip before visiting the Jagannath Temple. The golden sands and the sunrise views make it a serene and spiritual experience.",
                  location: "Puri",
                  highlight: "Sacred bathing spot for pilgrims",
                },
                {
                  title: "Dhauli Buddhist Stupa",
                  description: "The site where Emperor Ashoka embraced Buddhism after the Kalinga War. The peace pagoda (Shanti Stupa) and ancient rock edicts highlight its historical significance.",
                  location: "Bhubaneswar",
                  highlight: "Historical site of Ashoka's transformation",
                },
              ].map((site, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{site.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin size={16} className="mr-1" />
                      <span>{site.location}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{site.description}</p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-blue-700 font-medium">Highlight: {site.highlight}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mb-16 bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Important Information
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>Non-Hindus are not allowed inside the main Jagannath Temple. They can view the temple from outside.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>Dress modestly when visiting temples. Men should wear long pants and women should wear clothes that cover their shoulders and knees.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>Photography is prohibited inside the main sanctum of the Jagannath Temple.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>The boat ride at Chilika Lake is subject to weather conditions.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>If visiting during the Rath Yatra festival (usually in June-July), book well in advance as accommodations fill up quickly.</span>
            </li>
          </ul>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Pilgrim Reviews
          </h2>
          <ReviewsSection tourName="Jagannath Puri Yatra" reviews={reviews} />
        </div>

        {/* Book Now CTA */}
        <div className="container mx-auto px-6 py-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for a Divine Experience?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Book your Jagannath Puri Yatra today and embark on a spiritual journey to Lord Jagannath's sacred abode.
            </p>
            <Link href="/contact">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
                Book Your Yatra Now
                <ChevronRight size={20} className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JagannathPuriYatra;