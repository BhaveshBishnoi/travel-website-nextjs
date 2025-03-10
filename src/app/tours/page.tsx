"use client";

import TourCard from "@/components/TourCard";
import Image from "next/image";

const tours = [
  {
    name: "Chardham Yatra",
    image: "/Tours/chardham-yatra.webp",
    description:
      "Experience the sacred journey to Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    link: "/tours/char-dham-yatra",
  },
  {
    name: "Do Dham Yatra",
    image: "/Tours/Do-dham-yatra-2025.webp",
    description:
      "Visit the divine shrines of Kedarnath and Badrinath in this spiritual journey.",
    link: "/tours/do-dham-yatra",
  },
  {
    name: "Kedarnath Yatra",
    image: "/Tours/kedarnath-Yatra-scaled.webp",
    description:
      "Embark on a spiritual journey to the majestic Kedarnath temple in the Himalayas.",
    link: "/tours/kedarnath-yatra",
  },
  {
    name: "Mussoorie Tour",
    image: "/Tours/mountains.jpg",
    description:
      "Explore the Queen of Hills with stunning mountain views and colonial charm.",
    link: "/tours/mussoorie-tour",
  },
  {
    name: "Chakrata Tour",
    image: "/Tours/Gangotri-Yatra.webp",
    description:
      "Discover a hidden Himalayan gem with pristine forests and breathtaking views.",
    link: "/tours/Chakrata-tour",
  },
  {
    name: "Tehri Lake Tour",
    image: "/Tours/ganaga-aarti-evening-scaled.webp",
    description:
      "Experience the beauty of Asia's largest man-made lake and exciting water activities.",
    link: "/tours/Tehri-lake-tour",
  },
  {
    name: "Jagannath Puri Yatra",
    image: "/Tours/Jaganath-Puri-Yatra-scaled.webp",
    description:
      "Experience the divine aura of the famous Jagannath Temple in Puri.",
    link: "/tours/jagannath-puri-yatra",
  },
  {
    name: "Panch Kedar Yatra",
    image: "/Tours/Badrinath_Yatra.webp",
    description:
      "Visit the five sacred Shiva temples in the Garhwal Himalayas region.",
    link: "/tours/panch-kedar-yatra",
  },
];

export default function Tours() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src="/Tours/mountains.jpg"
          alt="Mountains"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <h1 className="text-5xl font-bold mb-4 text-center drop-shadow-lg">
            Discover Sacred Journeys
          </h1>
          <p className="text-xl max-w-2xl text-center drop-shadow-md">
            Embark on spiritual adventures to some of India's most revered destinations
          </p>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Our Sacred Tours
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Explore our carefully curated selection of spiritual journeys to India's most sacred destinations.
          Each tour is designed to provide a perfect blend of divine experience and comfortable travel.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>
      </div>
    </div>
  );
}
