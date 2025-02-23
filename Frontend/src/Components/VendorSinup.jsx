import { useState } from "react";

const MultiStepSignup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Step {step} of 3
        </h2>
        {step === 1 && (
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 mb-3 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 mb-3 border rounded-lg"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-3 mb-3 border rounded-lg"
            />
            <button
              className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Business Name"
              className="w-full p-3 mb-3 border rounded-lg"
            />
            <input
              type="text"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              placeholder="Business Type"
              className="w-full p-3 mb-3 border rounded-lg"
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Business Address"
              className="w-full p-3 mb-3 border rounded-lg"
              rows="3"
            ></textarea>
            <div className="flex justify-between">
              <button className="bg-gray-300 p-3 rounded-lg" onClick={prevStep}>
                Back
              </button>
              <button
                className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 mb-3 border rounded-lg"
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full p-3 mb-3 border rounded-lg"
            />
            <div className="flex justify-between">
              <button className="bg-gray-300 p-3 rounded-lg" onClick={prevStep}>
                Back
              </button>
              <button className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepSignup;
