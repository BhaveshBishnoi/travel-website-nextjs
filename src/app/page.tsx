"use client";

import TourCard from "@/components/TourCard";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Star, Calendar, Users } from "lucide-react";

const featuredTours = [
  {
    name: "Chardham Yatra",
    image: "/Tours/chardham-yatra.webp",
    description:
      "Experience the sacred journey to Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    link: "/tours/char-dham-yatra",
  },
  {
    name: "Kedarnath Yatra",
    image: "/Tours/kedarnath-Yatra-scaled.webp",
    description:
      "Embark on a spiritual journey to the majestic Kedarnath temple in the Himalayas.",
    link: "/tours/kedarnath-yatra",
  },
  {
    name: "Do Dham Yatra",
    image: "/Tours/Do-dham-yatra-2025.webp",
    description:
      "Visit the divine shrines of Kedarnath and Badrinath in this spiritual journey.",
    link: "/tours/do-dham-yatra",
  },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "Mumbai",
    quote: "The Chardham Yatra was a life-changing experience. TheIndianRoamer made every part of our journey comfortable and memorable.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    location: "Delhi",
    quote: "I'm grateful to the TheIndianRoamer team for making my Kedarnath pilgrimage so smooth. Their attention to detail was impressive!",
    rating: 5,
  },
  {
    name: "Arjun Singh",
    location: "Bangalore",
    quote: "Professional service, knowledgeable guides, and thoughtful planning. I highly recommend TheIndianRoamer for any spiritual journey.",
    rating: 4,
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden -mt-4">
        <Image
          src="/Tours/jungal-footer-background-scaled.webp"
          alt="Sacred Destinations"
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-8 md:px-16">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Discover Your Spiritual Journey in India
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Embark on sacred pilgrimages and spiritual adventures across India's most divine destinations with expert guidance and comfortable travel
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/tours">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium">
                  Explore Tours <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 font-medium">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tours Section */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Featured Sacred Journeys
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Discover our most popular spiritual journeys, carefully curated to provide both divine experience and comfortable travel
            </p>
          </div>
          <Link href="/tours">
            <button className="mt-4 md:mt-0 flex items-center text-blue-600 font-medium group">
              View All Tours
              <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose TheIndianRoamer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <MapPin size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Local Guides</h3>
              <p className="text-gray-600">
                Our guides have deep knowledge of each destination's culture, history, and spiritual significance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Calendar size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Schedules</h3>
              <p className="text-gray-600">
                We offer various durations and dates to suit your personal schedule and requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Experience</h3>
              <p className="text-gray-600">
                We cater to both individual pilgrims and groups, ensuring a personalized journey for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-6 py-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Pilgrims Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500 text-sm flex items-center">
                  <MapPin size={14} className="mr-1" /> {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative py-16 bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/Tours/mountains.jpg"
            alt="Mountains background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today to plan your perfect pilgrimage to India's most sacred destinations.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
