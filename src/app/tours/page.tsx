"use client";

import TourCard from "@/components/TourCard";

const tours = [
  {
    name: "Chardham Yatra",
    image: "/images/chardham-yatra.jpg",
    description:
      "Experience the sacred journey to Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    link: "/tours/char-dham-yatra",
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

export default function Tours() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Tours
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>
      </div>
    </div>
  );
}
