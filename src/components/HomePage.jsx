import Header from "./Header";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import DoctorHighlight from "./DoctorHighlight";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <DoctorHighlight />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
