import { useState, useEffect, useRef } from "react";
import {
  Store,
  MapPin,
  Clock,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ShopGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Yahan apni shop ki photos add karo
  const shopPhotos = {
    all: [
      {
        url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        title: "Store Front View",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop",
        title: "Interior Design",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&h=600&fit=crop",
        title: "Eyewear Collection",
        category: "products",
      },
      {
        url: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=600&fit=crop",
        title: "Consultation Area",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=600&fit=crop",
        title: "Premium Frames",
        category: "products",
      },
      {
        url: "https://images.unsplash.com/photo-1560472355-109703aa3edc?w=800&h=600&fit=crop",
        title: "Eye Testing Equipment",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop",
        title: "Sunglasses Display",
        category: "products",
      },
      {
        url: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=600&fit=crop",
        title: "Store Ambiance",
        category: "interior",
      },
    ],
  };

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "exterior", name: "Exterior" },
    { id: "interior", name: "Interior" },
    { id: "products", name: "Products" },
  ];

  const filteredPhotos =
    activeCategory === "all"
      ? shopPhotos.all
      : shopPhotos.all.filter((photo) => photo.category === activeCategory);

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let scrollAmount = 0;
    const scrollStep = 0.5;
    const scrollInterval = 20;

    const autoScroll = setInterval(() => {
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    }, scrollInterval);

    return () => clearInterval(autoScroll);
  }, [isPaused, activeCategory]);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Store className="h-4 w-4" />
            Virtual Tour
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Our <span className="text-teal-600">Premium Store</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the elegance of our showroom and discover why thousands
            trust us for their eyewear needs
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Container */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur p-3 rounded-full shadow-xl hover:bg-white transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur p-3 rounded-full shadow-xl hover:bg-white transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 via-gray-50/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-100 via-gray-100/50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Gallery */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-hidden scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...filteredPhotos, ...filteredPhotos].map((photo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-96 h-80 relative group/card cursor-pointer"
              >
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image */}
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover/card:opacity-90 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300 translate-y-2 group-hover/card:translate-y-0">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 transform transition-all duration-300 translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {photo.title}
                      </h3>
                      <p className="text-teal-300 text-sm font-medium capitalize">
                        {photo.category}
                      </p>
                    </div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    View Details
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Store Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-7 w-7 text-teal-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">
              123 Fashion Street, Bhopal
              <br />
              Madhya Pradesh, India
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Opening Hours
            </h3>
            <p className="text-gray-600">
              Mon - Sat: 10:00 AM - 8:00 PM
              <br />
              Sunday: 11:00 AM - 6:00 PM
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Contact Us</h3>
            <p className="text-gray-600">
              +91 98765 43210
              <br />
              info@eyewearstore.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopGallery;
