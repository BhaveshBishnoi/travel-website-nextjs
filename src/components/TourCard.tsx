"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TourCard = ({
  tour,
}: {
  tour: {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
  };
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{tour.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-48 object-cover rounded-md"
        />
        <p className="text-gray-600 mt-2">
          {tour.description.substring(0, 100)}...
        </p>
        <p className="text-blue-600 font-bold mt-2">${tour.price}</p>
        <Button asChild className="mt-4 w-full">
          <Link href={`/tour/${tour.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default TourCard;
