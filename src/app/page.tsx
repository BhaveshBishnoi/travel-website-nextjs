"use client";

import TourCard from "@/components/TourCard";
import Link from "next/link";

const tours = [
  {
    name: "Chardham Yatra",
    image: "/images/chardham-yatra.jpg",
    description:
      "Experience the sacred journey to Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    link: "/tours/chardham-yatra",
  },
  {
    name: "Do Dham Yatra",
    image: "/images/do-dham-yatra.jpg",
    description:
      "Visit the divine shrines of Kedarnath and Badrinath in this spiritual journey.",
    link: "/tours/do-dham-yatra",
  },
  {
    name: "Panch Kedar Yatra",
    image: "/images/panch-kedar-yatra.jpg",
    description:
      "Explore the five sacred temples of Lord Shiva in the Himalayas.",
    link: "/tours/panch-kedar-yatra",
  },
  {
    name: "Mussoorie Tour",
    image: "/images/mussoorie-tour.jpg",
    description:
      "Enjoy the Queen of Hills with stunning views, waterfalls, and colonial charm.",
    link: "/tours/mussoorie-tour",
  },
  {
    name: "Chakrata Tour",
    image: "/images/chakrata-tour.jpg",
    description:
      "A hidden gem in Uttarakhand with beautiful landscapes and adventure activities.",
    link: "/tours/chakrata-tour",
  },
  {
    name: "Tehri Lake Tour",
    image: "/images/tehri-lake-tour.jpg",
    description:
      "Discover Tehri Lake with boating, water sports, and breathtaking scenery.",
    link: "/tours/tehri-lake-tour",
  },
];

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold">Explore the World with TravelX</h1>
      <p className="text-lg text-gray-600">
        Find your next adventure with our amazing tour packages.
      </p>
      <Link href="/tours">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          View Tours
        </button>
      </Link>

      {/* Featured Tours Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {tours.slice(0, 3).map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </div>
    </div>
  );
}
