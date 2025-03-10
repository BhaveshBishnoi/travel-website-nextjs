import React from "react";

const DoDhamYatra = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/dodham-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Do Dham Yatra 2025
          </h1>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center">
          Destinations: Kedarnath, Badrinath
        </h2>
        <p className="text-center text-lg mt-2">
          Duration: 8 Days, 7 Nights | Distance: 752 Km | Budget: ₹8,000 -
          ₹10,000
        </p>
      </div>

      {/* Tour Plan Section */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Tour Plan</h2>
        <div className="space-y-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">Day {i + 1}</h3>
              <p className="text-gray-600 mt-2">
                Details about the day's itinerary...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Table */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center">Our Pricing</h2>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-2 px-4">No. of Pax</th>
                <th className="py-2 px-4">Cab</th>
                <th className="py-2 px-4">Cost / Pax</th>
              </tr>
            </thead>
            <tbody>
              {[
                { pax: "6", cab: "Ertiga / Innova", cost: "₹13,999" },
                { pax: "4", cab: "Sedan", cost: "₹15,999" },
                { pax: "2", cab: "Sedan", cost: "₹19,999" },
                { pax: "10+", cab: "Traveller Tempo", cost: "₹10,999" },
              ].map((row, index) => (
                <tr key={index} className="text-center border">
                  <td className="py-2 px-4">{row.pax}</td>
                  <td className="py-2 px-4">{row.cab}</td>
                  <td className="py-2 px-4">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white text-center py-12">
        <h2 className="text-3xl font-semibold">Contact Us Anytime</h2>
        <p className="mt-2">Plan your perfect trip with The Indian Roamer</p>
        <button className="mt-4 bg-yellow-500 text-gray-900 px-6 py-2 rounded-md text-lg">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default DoDhamYatra;
