"use client";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const VolunteerForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    availability: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      try {
        console.log("Sending email...");
        const result = await emailjs.sendForm(
          'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          formRef.current,
          'YOUR_USER_ID'      // Replace with your EmailJS user ID
        );
        console.log("Email sent successfully:", result.text);
        alert("Form submitted successfully!");
      } catch (error) {
        console.error("Error sending email:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <section className="relative top-[20px]">
      <div className="max-w-2xl p-8 bg-white rounded-md shadow-md mx-auto">
        <h2 className="text-2xl font-bold mb-6">Volunteer Sign Up</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="123-456-7890"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Main St, Anytown, USA"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
              Availability
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              placeholder="Weekdays, Weekends"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us why you want to volunteer..."
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-700 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-75"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default VolunteerForm;
