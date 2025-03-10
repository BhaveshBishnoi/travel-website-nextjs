"use client";

import Link from "next/link";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Send
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Tours", href: "/tours" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Popular Tours",
      links: [
        { name: "Chardham Yatra", href: "/tours/char-dham-yatra" },
        { name: "Kedarnath Yatra", href: "/tours/kedarnath-yatra" },
        { name: "Do Dham Yatra", href: "/tours/do-dham-yatra" },
        { name: "Badrinath Yatra", href: "/tours/badrinath-yatra" },
        { name: "Gangotri Yatra", href: "/tours/gangotri-yatra" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Us */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">T</span>
              </div>
              <h3 className="text-2xl font-bold">TravelX</h3>
            </div>
            <p className="text-gray-300">
              Specializing in sacred journeys across India, we help pilgrims experience 
              spiritual destinations with comfort, expertise, and personalized service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links & Popular Tours */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center"
                    >
                      <span className="mr-2">›</span> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-blue-400" />
                <span>123 Pilgrim Street, Rishikesh, Uttarakhand, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-blue-400" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-blue-400" />
                <span>info@travelx.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3">Subscribe to Our Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-md flex-grow focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 rounded-r-md">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 py-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} TravelX. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
