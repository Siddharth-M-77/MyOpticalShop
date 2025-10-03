import {
  Calendar,
  X,
  Check,
  User,
  Mail,
  Phone,
  Clock,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

const DoctorHighlight = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Expert Eye Care At Your Service
              </h2>
              <p className="text-xl mb-8 text-teal-50">
                Book appointments with certified optometrists. Get comprehensive
                eye examinations, prescription updates, and expert
                consultations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">
                      Comprehensive Eye Tests
                    </div>
                    <div className="text-teal-100">
                      Complete vision assessment with latest technology
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">
                      Expert Consultations
                    </div>
                    <div className="text-teal-100">
                      Personalized advice from experienced professionals
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">
                      Easy Online Booking
                    </div>
                    <div className="text-teal-100">
                      Schedule appointments at your convenience
                    </div>
                  </div>
                </li>
              </ul>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment Now
              </button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop"
                  alt="Optometrist"
                  className="rounded-2xl w-full"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl text-gray-900">
                <div className="text-3xl font-bold text-teal-600 mb-1">50+</div>
                <div className="text-sm font-semibold">Certified Doctors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-blue-600 text-white p-6 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">Book Your Appointment</h3>
                  <p className="text-teal-50 mt-1">
                    Fill in your details below
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <User className="h-5 w-5 text-teal-600" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none transition"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Mail className="h-5 w-5 text-teal-600" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <Phone className="h-5 w-5 text-teal-600" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                      <Calendar className="h-5 w-5 text-teal-600" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                      <Clock className="h-5 w-5 text-teal-600" />
                      Preferred Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none transition"
                    >
                      <option value="">Select time</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                    <MessageSquare className="h-5 w-5 text-teal-600" />
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-600 focus:outline-none transition resize-none"
                    placeholder="Any specific concerns or requirements..."
                  />
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition"
                >
                  Confirm Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center">
            <div className="bg-gradient-to-br from-teal-500 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-white" strokeWidth={3} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Appointment Confirmed!
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Your appointment has been successfully booked. We have sent a
              confirmation email to{" "}
              <span className="font-semibold text-teal-600">
                {formData.email}
              </span>
            </p>
            <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Date:</span>
                <span className="font-semibold text-gray-900">
                  {formData.date
                    ? new Date(formData.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : ""}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Time:</span>
                <span className="font-semibold text-gray-900">
                  {formData.time}
                </span>
              </div>
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorHighlight;
