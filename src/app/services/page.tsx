import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tours = [
  {
    id: 1,
    title: "Paris Getaway",
    description: "A romantic trip to the city of love.",
  },
  {
    id: 2,
    title: "Swiss Alps Adventure",
    description: "Explore the breathtaking mountain landscapes.",
  },
  {
    id: 3,
    title: "Bali Paradise",
    description: "Relax and unwind on the tropical beaches of Bali.",
  },
];

export default function Services() {
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <Card
            key={tour.id}
            className="shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle>{tour.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{tour.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
