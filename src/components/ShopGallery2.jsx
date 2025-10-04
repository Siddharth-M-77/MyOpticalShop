import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Store } from "lucide-react";
import pic1 from "../assets/shop1.jpeg";
import pic2 from "../assets/shop2.jpeg";
import pic3 from "../assets/shop3.jpeg";
import pic4 from "../assets/shop4.jpeg";
import pic5 from "../assets/shop5.jpeg";
import pic6 from "../assets/shop6.jpeg";

const ShopGallery2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Yahan apni shop ki photos add karo
  const shopGallery = [
    {
      id: 1,
      url: pic1,
      title: "Store Front View",
      category: "exterior",
      description: "Modern and welcoming storefront design",
    },
    {
      id: 2,
      url: pic2,
      title: "Interior Design",
      category: "interior",
      description: "Spacious and elegant interior layout",
    },
    {
      id: 3,
      url: pic3,
      title: "Eyewear Collection",
      category: "products",
      description: "Premium eyewear on display",
    },
    {
      id: 4,
      url: pic4,
      title: "Consultation Area",
      category: "interior",
      description: "Private consultation rooms",
    },
    {
      id: 5,
      url: pic5,
      title: "Premium Frames Display",
      category: "products",
      description: "Designer frames showcase",
    },
    {
      id: 6,
      url: pic6,
      title: "Eye Testing Equipment",
      category: "equipment",
      description: "State-of-the-art testing equipment",
    },
  ];

  const categories = [
    { id: "all", name: "All Photos", count: shopGallery.length },
    {
      id: "exterior",
      name: "Exterior",
      count: shopGallery.filter((img) => img.category === "exterior").length,
    },
    {
      id: "interior",
      name: "Interior",
      count: shopGallery.filter((img) => img.category === "interior").length,
    },
    {
      id: "products",
      name: "Products",
      count: shopGallery.filter((img) => img.category === "products").length,
    },
    {
      id: "equipment",
      name: "Equipment",
      count: shopGallery.filter((img) => img.category === "equipment").length,
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? shopGallery
      : shopGallery.filter((img) => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    if (direction === "next") {
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex]);
    } else {
      const prevIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex]);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Store className="h-5 w-5" />
            Virtual Tour
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Visit Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Premium Store
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a virtual tour of our state-of-the-art facility. Experience the
            elegance, comfort, and professionalism that sets us apart.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
              onClick={() => openLightbox(image)}
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn className="h-5 w-5 text-teal-600" />
                </div>
              </div>

              {/* Content */}

              {/* Category Badge */}
              {/* <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                {image.category}
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all z-50"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all z-50"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all z-50"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="max-w-6xl w-full">
            <div className="relative">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                      {selectedImage.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-lg text-gray-200">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ShopGallery2;
