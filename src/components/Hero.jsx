import { Eye, Calendar } from "lucide-react";
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              See The World <span className="text-teal-600">Clearly</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Premium eyewear collection with expert eye care. Book appointments
              with certified optometrists and find your perfect frames.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/products"
                className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
              >
                Shop Now
              </a>
              <a
                href="/doctors"
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold border-2 border-teal-600 hover:bg-teal-50 transition flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
              </a>
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
  );
};

export default Hero;
