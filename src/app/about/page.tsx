// pages/about.tsx
"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <Separator className="mb-6" />
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
        Welcome to TravelX, your go-to travel partner for exploring the world’s
        most amazing destinations. Our goal is to make travel easy, exciting,
        and unforgettable.
      </p>
      <div className="mt-10 flex flex-col md:flex-row gap-6">
        <Card className="w-full md:w-1/2">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At TravelX, we believe in creating experiences that last a
              lifetime. We provide tailored travel packages that suit every
              traveler’s need.
            </p>
          </CardContent>
        </Card>
        <Card className="w-full md:w-1/2">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <p className="text-gray-600">
              We offer the best deals, expert travel advice, and a seamless
              booking experience, ensuring that your journey is hassle-free.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
