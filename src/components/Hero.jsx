import {
  Eye,
  Calendar,
  X,
  User,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const scrollRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
    concern: "",
  });

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 30;

    const autoScroll = setInterval(() => {
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    }, scrollInterval);

    return () => clearInterval(autoScroll);
  }, []);

  const photos = [
    "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=400&h=300&fit=crop",
  ];

  const doctors = [
    "Dr. Rajesh Sharma - Eye Specialist",
    "Dr. Priya Patel - Optometrist",
    "Dr. Amit Kumar - Pediatric Eye Care",
    "Dr. Sneha Gupta - Retina Specialist",
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Booked:", formData);
    alert("Appointment booked successfully! We'll contact you soon.");
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      doctor: "",
      concern: "",
    });
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                See The World <span className="text-teal-600">Clearly</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Premium eyewear collection with expert eye care. Book
                appointments with certified optometrists and find your perfect
                frames.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/products"
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
                >
                  Shop Now
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold border-2 border-teal-600 hover:bg-teal-50 transition flex items-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-teal-600">500+</div>
                  <div className="text-gray-600">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600">50+</div>
                  <div className="text-gray-600">Doctors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600">10k+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=600&fit=crop"
                  alt="Stylish glasses"
                  className="rounded-2xl w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Eye className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Free Eye Test</div>
                    <div className="text-sm text-gray-600">
                      With every purchase
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Auto-Scrolling Photo Banner */}
      <section className="relative bg-white py-12 overflow-hidden">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our Premium <span className="text-teal-600">Collection</span>
          </h2>
          <p className="text-gray-600">
            Discover the latest trends in eyewear fashion
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...photos, ...photos].map((photo, idx) => (
              <div key={idx} className="flex-shrink-0 w-80 h-64 relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg h-full">
                  <img
                    src={photo}
                    alt={`Eyewear ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-bold text-lg">Premium Frame</p>
                      <p className="text-sm">View Details →</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Appointment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-teal-600 to-blue-600 text-white p-8 rounded-t-3xl">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur">
                  <Calendar className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-1">Book Appointment</h2>
                  <p className="text-teal-100">
                    Schedule your eye care consultation
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <User className="h-5 w-5 text-teal-600" />
                  Personal Information
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-teal-600" />
                  Appointment Details
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Doctor *
                  </label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Choose a doctor</option>
                    {doctors.map((doctor, idx) => (
                      <option key={idx} value={doctor}>
                        {doctor}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brief Description of Concern
                  </label>
                  <textarea
                    name="concern"
                    value={formData.concern}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your eye care needs..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:from-teal-700 hover:to-blue-700 transition shadow-lg hover:shadow-xl"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
