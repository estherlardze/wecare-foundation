"use client";

import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      try {
        // Get the current date and time
        const now = new Date();
        const dateTime = now.toLocaleString(); // You can customize the format if needed

        // Log the current date and time for debugging purposes
        console.log("Current date and time:", dateTime);

        // Send the email using EmailJS with the current date and time included
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
          // { da0teTime } // Include the dateTime as additional form data
        );
        toast.success("Form submitted successfully");
      } catch (error) {
        toast.error("Unable to submit form!");
      }
    }
  };

  return (
    <section className="mb-8">
      <ToastContainer position="top-center" />{" "}
      <div
        className="w-[90%] sm:max-w-2xl lg:w-[1500px] p-8 bg-white rounded-md shadow-md mx-auto"
        data-aos="zoom-in"
      >
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

        <form ref={form} onSubmit={handleSubmit} className="container">
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e: any) => setfirstName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e: any) => setlastName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e: any) => setMessage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-700 focus:border-red-700"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-700 border-2 border-red-700 text-white font-semibold transition-all duration-300 rounded-md shadow-md hover:bg-white hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-75"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
