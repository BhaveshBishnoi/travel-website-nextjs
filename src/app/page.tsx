"use client";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold">Explore the World with TravelX</h1>
      <p className="text-lg text-gray-600">
        Find your next adventure with our amazing tour packages.
      </p>
      <Button asChild size="lg">
        <Link href="/tour">View Tours</Link>
      </Button>

      {/* Featured Tours */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Paris, France</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Explore the beauty of Paris with our exclusive travel packages.
            </p>
            <Button asChild variant="outline" className="mt-3">
              <Link href="/tour/1">View Details</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bali, Indonesia</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Relax in the tropical paradise of Bali with guided tours.</p>
            <Button asChild variant="outline" className="mt-3">
              <Link href="/tour/2">View Details</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>New York, USA</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Experience the vibrant city life of New York with us.</p>
            <Button asChild variant="outline" className="mt-3">
              <Link href="/tour/3">View Details</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
