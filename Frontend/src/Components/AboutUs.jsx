import React from "react";

const services = [
  {
    title: "Exam Preparation",
    description:
      "Access a variety of study materials and resources for effective exam preparation.",
  },
  {
    title: "Mock Tests",
    description:
      "Take mock exams to assess your knowledge and improve your performance.",
  },
  {
    title: "Real-Time Results",
    description:
      "Get instant results and performance feedback after completing your exams.",
  },
  {
    title: "24/7 Support",
    description:
      "Our support team is available anytime to help with exam-related queries.",
  },
  {
    title: "Secure Exam Environment",
    description:
      "We ensure a safe and secure exam environment with anti-cheating measures.",
  },
  {
    title: "Exam Analytics",
    description:
      "Track your progress with detailed analytics and insights on your exam performance.",
  },
];

const AboutUs = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center font-bold bg-black-100 px-6">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-5xl font-font-extrabold text-4xl text-gray-800 mb-10">
          About Examify
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-extrabold text-gray-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
