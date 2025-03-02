import React from "react";

const services = [
  { title: "Wide Product Selection", description: "Explore a vast range of products across multiple categories, from fashion to electronics." },
  { title: "Fast & Reliable Delivery", description: "Get your orders delivered quickly with multiple shipping options." },
  { title: "Secure Payment Options", description: "Pay safely with credit/debit cards, UPI, net banking, and digital wallets." },
  { title: "24/7 Customer Support", description: "Our dedicated team is available round the clock for any assistance." },
  { title: "Easy Returns & Refunds", description: "Hassle-free return and refund policies for a seamless shopping experience." },
  { title: "Exclusive Deals & Discounts", description: "Enjoy seasonal sales, flash deals, and exclusive member discounts." },
];

const AboutUs = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center font-bold bg-black-100 px-6">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-5xl font-font-extrabold text-4xl text-gray-800 mb-10">About Us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-extrabold text-gray-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
