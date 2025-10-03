import { Star } from "lucide-react";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer",
      text: "Amazing experience! The doctor was very professional and the glasses quality is top-notch. Highly recommend!",
      rating: 5,
      avatar: "PS",
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Business Owner",
      text: "Best optical store in the city. Great collection and excellent customer service. My entire family shops here.",
      rating: 5,
      avatar: "RV",
    },
    {
      id: 3,
      name: "Anita Desai",
      role: "Teacher",
      text: "Love my new glasses! The online booking system made it so easy to schedule an eye test. Very satisfied!",
      rating: 5,
      avatar: "AD",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="bg-teal-100 text-teal-600 font-bold w-12 h-12 rounded-full flex items-center justify-center">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
