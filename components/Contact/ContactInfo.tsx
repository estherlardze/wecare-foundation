import React from "react";
import { contacts } from "../../utils/data";


const ContactInfo = () => {
  return (
    <section className="my-[100px] text-black/80 grid grid-cols-5 gap-10 md:gap-5 mx-[7%] w-[86%] items-center">
      <div className=" w-full h-full col-span-5 md:col-span-3">
        <h1 className="text-2xl font-semibold">contact us</h1>
        <h2 className="text-3xl font-bold my-3">Get in Touch</h2>
        <p>
          We are excited to connect with you! Whether you have a question,
          feedback, or just want to say hello, we are here to listen and assist.
          Please reach out to us using the contact form below, and one of our
          team members will get back to you as soon as possible. We value your
          input and look forward to hearing from you.
        </p>
      </div>

      <div className="mt-4 col-span-5 md:col-span-2">
        {contacts.map((contact) => (
          <article
            key={contact.id}
            className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-3"
          >
            <h1 className="">
              <contact.icon
                size={38}
                className="text-orange-600 bg-white p-2 rounded-full shadow-xl hover:text-orange-500 transition-all"
              />
            </h1>
            <div>
              <h1 className="text-xl font-bold mb-3">{contact.title}</h1>
              <p>{contact.content}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
