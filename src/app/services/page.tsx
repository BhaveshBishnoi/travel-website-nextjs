"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Car, Hotel, Map, Utensils, Clipboard, CalendarCheck, ChevronRight, Phone, HeartPulse, Camera, SunSnow, Footprints } from "lucide-react";

const services = [
  {
    title: "Customized Tour Packages",
    description: "Tailor-made travel experiences designed specifically to your preferences, budget, and schedule.",
    icon: <Map className="w-12 h-12 text-blue-600" />,
  },
  {
    title: "Transportation Services",
    description: "Comfortable and reliable transportation with experienced drivers familiar with the local terrain.",
    icon: <Car className="w-12 h-12 text-blue-600" />,
  },
  {
    title: "Accommodation Booking",
    description: "From luxury resorts to budget-friendly stays, we arrange the best accommodations at competitive prices.",
    icon: <Hotel className="w-12 h-12 text-blue-600" />,
  },
  {
    title: "Pilgrimage Packages",
    description: "Spiritual journeys to sacred sites with knowledgeable guides and comfortable arrangements.",
    icon: <Footprints className="w-12 h-12 text-blue-600" />,
  },
  {
    title: "Adventure Activities",
    description: "Thrilling activities including trekking, rafting, camping, and more with certified instructors and safety measures.",
    icon: <SunSnow className="w-12 h-12 text-blue-600" />,
  },
  {
    title: "Photography Tours",
    description: "Specialized tours for photography enthusiasts to capture the most picturesque spots in Uttarakhand.",
    icon: <Camera className="w-12 h-12 text-blue-600" />,
  },
  {
    title: "Meal Arrangements",
    description: "Experience authentic local cuisine with special dietary accommodations upon request.",
    icon: <Utensils className="w-12 h-12 text-blue-600" />,
  },
  {
    title: "Travel Insurance",
    description: "Comprehensive travel insurance options to ensure a worry-free journey.",
    icon: <HeartPulse className="w-12 h-12 text-blue-600" />,
  },
  {
    title: "Tour Guides",
    description: "Experienced, multilingual guides with deep knowledge of local history, culture, and hidden gems.",
    icon: <Clipboard className="w-12 h-12 text-blue-600" />,
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 pt-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/hero.webp"
          alt="Our Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end px-8 pb-16">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mb-6">
              Comprehensive travel solutions to make your Uttarakhand journey unforgettable
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Experience Seamless Travel with TheIndianRoamer
          </h2>
          <p className="text-gray-600">
            At TheIndianRoamer, we offer a comprehensive range of travel services to ensure your journey through Uttarakhand is comfortable, memorable, and hassle-free. From the moment you plan your trip until you return home, our team is dedicated to providing exceptional service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Services */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Corporate Retreats & Team Outings
            </h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src="/corporate-retreat.webp"
                    alt="Corporate Retreat"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Strengthen Team Bonds in the Himalayas</h3>
                  <p className="text-gray-600 mb-6">
                    We specialize in organizing corporate retreats and team-building activities in the serene environments of Uttarakhand. Our corporate packages include:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CalendarCheck className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Customized itineraries based on company objectives</span>
                    </li>
                    <li className="flex items-start">
                      <CalendarCheck className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Team-building activities and adventure sports</span>
                    </li>
                    <li className="flex items-start">
                      <CalendarCheck className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Conference facilities with modern amenities</span>
                    </li>
                    <li className="flex items-start">
                      <CalendarCheck className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Luxury accommodations and dining experiences</span>
                    </li>
                    <li className="flex items-start">
                      <CalendarCheck className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Transportation and logistics management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose TheIndianRoamer Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Local Expertise",
              description: "Our team has extensive knowledge of Uttarakhand's geography, culture, and hidden gems.",
            },
            {
              title: "24/7 Support",
              description: "We're always available to assist you during your journey, ensuring a smooth travel experience.",
            },
            {
              title: "Best Pricing",
              description: "Competitive rates with no hidden costs. We offer the best value for your travel investment.",
            },
            {
              title: "Personalized Service",
              description: "Every itinerary is customized to match your specific preferences, interests, and requirements.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Plan Your Ultimate Uttarakhand Adventure?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your travel needs and get a customized quote for your dream vacation.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link href="/contact">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
                Contact Us Now
                <ChevronRight size={20} className="ml-2" />
              </button>
            </Link>
            <a 
              href="tel:+911234567890" 
              className="inline-flex items-center text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white/10 transition-colors"
            >
              <Phone size={20} className="mr-2" />
              +91 123-456-7890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
