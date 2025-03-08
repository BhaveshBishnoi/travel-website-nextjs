"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
        Have any questions? Feel free to get in touch with us using the form
        below.
      </p>
      <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded-md shadow-md">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <Input type="text" placeholder="Your Name" className="w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <Input type="email" placeholder="Your Email" className="w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <Textarea placeholder="Your Message" className="w-full" />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
