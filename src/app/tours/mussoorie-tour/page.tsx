"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar } from "lucide-react";

import TourTimeline from "@/components/TourTimeline";
import PricingTable from "@/components/PricingTable";
import ReviewsSection from "@/components/ReviewsSection";

const MussoorieTourPage = () => {
  // Timeline events for the tour
  const timelineEvents = [
    {
      day: 1,
      title: "Arrival in Dehradun & Transfer to Mussoorie",
      description:
        "Arrive at Dehradun airport/railway station where our representative will meet you. Drive to Mussoorie (35 km), known as the 'Queen of Hills'. Check in to your hotel and spend the evening at leisure with a stroll on the famous Mall Road.",
      location: "Mussoorie",
      duration: "3-4 hours",
    },
    {
      day: 2,
      title: "Mussoorie Local Sightseeing",
      description:
        "After breakfast, visit Kempty Falls, Gun Hill (accessible by cable car), Lal Tibba (highest point in Mussoorie), and the picturesque Camel's Back Road. Enjoy the panoramic views of the Himalayan ranges. Evening free for shopping at Mall Road.",
      location: "Mussoorie",
      duration: "Full Day",
    },
    {
      day: 3,
      title: "Cloud's End & George Everest Point",
      description:
        "Visit Cloud's End, the geographical end of Mussoorie where the plains begin. Continue to Sir George Everest's House, the former Surveyor-General of India after whom Mt. Everest was named. Enjoy stunning views of the Doon Valley and the Himalayan ranges. Afternoon at leisure.",
      location: "Mussoorie",
      duration: "Half Day",
    },
    {
      day: 4,
      title: "Dhanaulti Excursion",
      description:
        "Day trip to Dhanaulti (25 km from Mussoorie), a serene hill station with deodar and oak forests. Visit the Eco Park and Surkanda Devi Temple. Enjoy a picnic lunch amidst pine forests before returning to Mussoorie by evening.",
      location: "Dhanaulti & Mussoorie",
      duration: "Full Day",
    },
    {
      day: 5,
      title: "Departure",
      description:
        "After breakfast, check out from the hotel and transfer to Dehradun airport/railway station for your onward journey with beautiful memories of your Mussoorie holiday.",
      location: "Dehradun",
      duration: "3-4 hours",
    },
  ];

  // Pricing options for the tour
  const pricingOptions = [
    {
      people: "1 Person",
      vehicle: "Sedan",
      price: "24,999",
    },
    {
      people: "2-3 People",
      vehicle: "Sedan",
      price: "15,999",
    },
    {
      people: "4-5 People",
      vehicle: "SUV",
      price: "12,999",
    },
    {
      people: "6-9 People",
      vehicle: "Tempo Traveller",
      price: "10,999",
    },
  ];

  // What's included and what's not
  const includes = [
    "Accommodation in hotels on twin sharing basis",
    "Daily breakfast and dinner",
    "All transfers and sightseeing by private vehicle",
    "Experienced driver and fuel costs",
    "All applicable taxes and service charges",
    "Parking and toll taxes",
    "Pick up and drop from Dehradun airport/railway station",
  ];

  const excludes = [
    "Airfare or train tickets",
    "Lunch and other meals not mentioned",
    "Entry tickets to monuments and attractions",
    "Cable car charges at Gun Hill",
    "Personal expenses and tips",
    "Travel insurance",
    "Anything not mentioned in inclusions",
  ];

  // Reviews for the tour
  const reviews = [
    {
      id: 1,
      name: "Anjali Mehta",
      date: "September 2024",
      rating: 5,
      comment:
        "Our Mussoorie trip was fantastic! TravelX took care of everything from hotel bookings to sightseeing. The views from Lal Tibba were breathtaking, and the hotel they arranged had an amazing view of the valley.",
      avatar: "/avatars/avatar-2.png",
      location: "Mumbai",
    },
    {
      id: 2,
      name: "Vivek Gupta",
      date: "August 2024",
      rating: 4,
      comment:
        "Excellent tour package to Mussoorie. Our driver was very knowledgeable and took us to some hidden viewpoints not usually covered in regular tours. Mall Road shopping was fun, and the weather was perfect.",
      avatar: "/avatars/avatar-3.png",
      location: "Delhi",
    },
    {
      id: 3,
      name: "Ritu Sharma",
      date: "July 2024",
      rating: 5,
      comment:
        "Traveling with two kids, I was worried about the arrangements, but TravelX made it completely hassle-free. The Kempty Falls visit was the highlight for the kids. Will definitely book through them again!",
      avatar: "/avatars/avatar-4.png",
      location: "Chandigarh",
    },
    {
      id: 4,
      name: "Arun Patel",
      date: "June 2024",
      rating: 5,
      comment:
        "Mussoorie is such a beautiful place, and this tour covered all the major attractions perfectly. The excursion to Dhanaulti was an unexpected highlight - so peaceful and untouched by commercial tourism.",
      avatar: "/avatars/avatar-1.png",
      location: "Ahmedabad",
    },
  ];

  return (
    <div className="bg-gray-50 pt-24">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/Tours/mussoorie-hero.webp"
          alt="Mussoorie Hill Station"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-end px-8 pb-16">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
              Mussoorie Tour
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mb-6">
              Experience the charm of the 'Queen of Hills' with breathtaking mountain views and colonial heritage
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                <Calendar className="w-5 h-5 mr-2" />
                <span>5 Days | 4 Nights</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                <span>Starting from ₹10,999 per person</span>
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
            Mussoorie, a picturesque hill station nestled in the foothills of the Garhwal Himalayan ranges, offers a perfect retreat from the hustle and bustle of city life. With its colonial architecture, stunning mountain views, and pleasant climate, it has been a favorite destination for tourists since the British era.
          </p>
          <p className="text-gray-600 mb-4">
            This 5-day tour takes you through the major attractions of Mussoorie, including the vibrant Mall Road, cascading Kempty Falls, and panoramic viewpoints offering breathtaking vistas of the Himalayas. You'll also explore the serene beauty of Dhanaulti, known for its peaceful ambiance and alpine forests.
          </p>
          <p className="text-gray-600 mb-4">
            The best time to visit Mussoorie is from March to June and September to November when the weather is pleasant, and the views are clear. During winter (December to February), you might experience snowfall, adding a magical touch to the landscape.
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
            <br />* Prices are subject to change during peak season (May-June) and weekends/holidays.
          </p>
        </div>

        {/* Includes/Excludes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Cost Includes & Excludes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                What's Included
              </h3>
              <ul className="space-y-3">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                What's Excluded
              </h3>
              <ul className="space-y-3">
                {excludes.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
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
              <span>Mussoorie can get crowded during peak season and weekends. Book your tour well in advance.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>The weather can change quickly in the mountains. Carry appropriate clothing for different conditions.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>Some activities like paragliding and horse riding are subject to weather conditions and availability.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>Mall Road is closed for vehicles from 6 PM to 11 PM to facilitate pedestrian movement.</span>
            </li>
            <li className="flex items-start">
              <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>Photography is not allowed in some parts of the Mussoorie Library and other heritage buildings.</span>
            </li>
          </ul>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Traveller Reviews
          </h2>
          <ReviewsSection reviews={reviews} tourName="Mussoorie Tour" />
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Queen of Hills?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Book your Mussoorie tour package today and enjoy a refreshing getaway in the Himalayan foothills.
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

export default MussoorieTourPage;