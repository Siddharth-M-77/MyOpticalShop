import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Circle, Play, Pause } from "lucide-react";

const PremiumSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState("next");

  // Yahan apni slider images add karo
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1920&h=1080&fit=crop",
      title: "Premium Eyewear Collection",
      subtitle: "Discover Your Perfect Style",
      description:
        "Explore our exclusive range of designer frames crafted with precision",
      buttonText: "Shop Now",
      buttonLink: "#products",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1920&h=1080&fit=crop",
      title: "Luxury Meets Comfort",
      subtitle: "Experience Excellence",
      description: "Premium quality frames designed for your lifestyle",
      buttonText: "View Collection",
      buttonLink: "#collection",
    },
    {
      image:
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1920&h=1080&fit=crop",
      title: "Trendsetting Sunglasses",
      subtitle: "Make a Statement",
      description: "Bold designs that reflect your personality",
      buttonText: "Explore More",
      buttonLink: "#sunglasses",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1920&h=1080&fit=crop",
      title: "Professional Eye Care",
      subtitle: "Expert Consultation",
      description: "Book your appointment with certified optometrists",
      buttonText: "Book Now",
      buttonLink: "#appointment",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlay]);

  const handleNext = () => {
    setDirection("next");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : direction === "next"
                ? "opacity-0 scale-105 -translate-x-full"
                : "opacity-0 scale-105 translate-x-full"
            }`}
          >
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Dark Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  {/* Animated Subtitle */}
                  <div
                    className={`transform transition-all duration-1000 delay-200 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    <span className="inline-block bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-300 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                      {slide.subtitle}
                    </span>
                  </div>

                  {/* Animated Title */}
                  <h1
                    className={`text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-300 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    {slide.title}
                  </h1>

                  {/* Animated Description */}
                  <p
                    className={`text-xl md:text-2xl text-gray-300 mb-8 transform transition-all duration-1000 delay-500 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    {slide.description}
                  </p>

                  {/* Animated Button */}
                  <div
                    className={`transform transition-all duration-1000 delay-700 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    <a
                      href={slide.buttonLink}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-teal-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-teal-500/50 hover:scale-105 group"
                    >
                      {slide.buttonText}
                      <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 group border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 group border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Dot Indicators */}
            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group relative"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === currentSlide ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-teal-400 blur-lg opacity-60"></div>
                      <div className="relative w-12 h-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
                    </div>
                  ) : (
                    <div className="w-3 h-3 bg-white/40 rounded-full hover:bg-white/60 transition-all duration-300 hover:scale-125"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-white/20"
              aria-label={isAutoPlay ? "Pause autoplay" : "Start autoplay"}
            >
              {isAutoPlay ? (
                <>
                  <Pause className="h-4 w-4" />
                  <span className="text-sm font-semibold">Pause</span>
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" />
                  <span className="text-sm font-semibold">Play</span>
                </>
              )}
            </button>

            {/* Slide Counter */}
            <div className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/20">
              <span className="text-sm font-bold">
                {String(currentSlide + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30">
        <div
          className="h-full bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default PremiumSlider;
