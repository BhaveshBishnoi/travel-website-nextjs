"use client";
import React from "react";
import Image from "next/image";
import { Calendar, Users, Globe, MapPin, Heart, Shield, Star, Award, Smile, ThumbsUp } from "lucide-react";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sumit Samantray",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in the travel industry, Sumit founded TheIndianRoamer to help people discover the beauty of India's landscapes and heritage.",
      image: "/team/founder.webp",
    },
    {
      name: "Lalit Thuwal",
      role: "Travel Expert",
      bio: "Lalit has explored more than 100 destinations across India and specializes in crafting unforgettable Himalayan adventures.",
      image: "/team/travel-expert.webp",
    },
    {
      name: "Bhavesh Bishnoi",
      role: "Operations Manager",
      bio: "Bhavesh ensures that every aspect of your journey is meticulously planned and executed with precision and care.",
      image: "/team/operations.webp",
    },
    {
      name: "Dikshita Rawat",
      role: "Customer Experience",
      bio: "Dikshita is dedicated to providing exceptional service and making sure every traveler feels supported throughout their journey.",
      image: "/team/customer.webp",
    },
  ];

  const values = [
    {
      icon: <Heart className="w-12 h-12 text-rose-500" />,
      title: "Passion",
      description: "We're passionate about travel and committed to providing exceptional experiences that inspire and delight.",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Reliability",
      description: "Count on us for dependable service, transparent pricing, and professional expertise at every step.",
    },
    {
      icon: <Smile className="w-12 h-12 text-amber-500" />,
      title: "Customer Delight",
      description: "Your satisfaction is our priority. We go above and beyond to exceed your expectations.",
    },
    {
      icon: <Globe className="w-12 h-12 text-emerald-500" />,
      title: "Sustainability",
      description: "We're committed to responsible tourism practices that respect local communities and preserve natural environments.",
    },
  ];

  const achievements = [
    {
      number: "10k+",
      label: "Happy Travelers",
      icon: <Users className="w-6 h-6 text-indigo-500" />,
    },
    {
      number: "250+",
      label: "Destinations",
      icon: <MapPin className="w-6 h-6 text-rose-500" />,
    },
    {
      number: "8+",
      label: "Years Experience",
      icon: <Calendar className="w-6 h-6 text-amber-500" />,
    },
    {
      number: "50+",
      label: "Partner Hotels",
      icon: <Star className="w-6 h-6 text-emerald-500" />,
    },
  ];

  const testimonials = [
    {
      quote: "TravelX made our family trip to Uttarakhand absolutely perfect. Everything from accommodations to guided tours exceeded our expectations!",
      author: "Ravi & Sunita Kapoor",
      location: "Delhi",
      image: "/avatars/avatar-1.png",
    },
    {
      quote: "As a solo traveler, safety was my concern. TravelX not only ensured I felt secure throughout my journey but also helped me create unforgettable memories.",
      author: "Meera Joshi",
      location: "Bangalore",
      image: "/avatars/avatar-2.png",
    },
    {
      quote: "The level of personalization and attention to detail that TravelX provides is unmatched. They truly understand what travelers need.",
      author: "Arjun Nair",
      location: "Mumbai",
      image: "/avatars/avatar-3.png",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/hero.webp"
          alt="Beautiful mountain landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end items-center text-center px-8 pb-16">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 animate-fade-in-up">
            Discover the Story of TravelX
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl animate-fade-in-up animation-delay-300">
            Your trusted companion for extraordinary adventures across India
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/about/our-story.webp"
                  alt="TravelX journey"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-xl font-bold">Est. 2016</p>
                <p>8+ years of creating travel memories</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The TravelX Story</h2>
              <p className="text-gray-600 mb-6">
                TravelX was born out of a deep passion for India's diverse landscapes and rich cultural heritage. What started as a small venture by a group of travel enthusiasts in 2016 has grown into one of North India's most trusted travel companies.
              </p>
              <p className="text-gray-600 mb-6">
                Our founder, Rahul Gupta, after years of corporate life, decided to pursue his love for travel and showcase the hidden gems of India to the world. He brought together a team of like-minded professionals who shared his vision of providing authentic, immersive travel experiences.
              </p>
              <p className="text-gray-600">
                Today, TravelX specializes in curating personalized journeys that connect travelers with the true essence of each destination. We take pride in our deep local knowledge, attention to detail, and commitment to responsible tourism practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-1">{achievement.number}</h3>
                <p className="text-gray-600">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              What Drives Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every experience we create for our travelers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px] duration-300">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-blue-50 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              The Faces Behind TravelX
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A dedicated group of travel enthusiasts committed to creating unforgettable experiences for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:translate-y-[-5px] duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Traveler Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it—hear what our travelers have to say about their experiences with TravelX.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 6.66675V20.0001C16.6667 23.6834 13.6834 26.6667 10.0001 26.6667H6.66675V20.0001H10.0001V6.66675H16.6667ZM33.3334 6.66675V20.0001C33.3334 23.6834 30.3501 26.6667 26.6667 26.6667H23.3334V20.0001H26.6667V6.66675H33.3334Z" fill="#E5E7EB"/>
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      width={48} 
                      height={48} 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="absolute left-0 top-0 h-full" width="206" height="424" viewBox="0 0 206 424" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-72 99C-18.6667 149 150.4 290.2 206 424" stroke="rgba(255,255,255,0.1)" strokeWidth="40" />
              </svg>
              <svg className="absolute right-0 bottom-0 h-full" width="206" height="424" viewBox="0 0 206 424" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M278 325C224.667 275 55.6 133.8 0 0" stroke="rgba(255,255,255,0.1)" strokeWidth="40" />
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Adventure?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Let us help you create memories that will last a lifetime. Contact us today to plan your next journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Contact Us
                </a>
                <a href="/tours" className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Explore Tours
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
