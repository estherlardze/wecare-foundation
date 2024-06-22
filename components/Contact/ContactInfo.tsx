import { contacts } from "../../utils/data";


const ContactInfo = () => {



  return (
    <section className="my-[100px] text-black/80 grid grid-cols-5 gap-10 md:gap-5 w-[90%] sm:w-[90%] mx-auto items-center">
      <div className=" w-full h-full col-span-5 md:col-span-3" data-aos="fade-right">
        <h1 className="text-2xl font-semibold">contact us</h1>
        <h2 className="text-3xl font-bold my-3">Get in Touch</h2>
        <p className="2xl:text-lg">
          We are excited to connect with you! Whether you have a question,
          feedback, or just want to say hello, we are here to listen and assist.
          Please reach out to us using the contact form below, and one of our
          team members will get back to you as soon as possible. We value your
          input and look forward to hearing from you.
        </p>
      </div>

      <div className="mt-4 col-span-5 md:col-span-2" aos-data="fade-left">
        {contacts.map((contact) => (
          <article
            key={contact.id}
            className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-3"
            data-aos="fade-left"
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
