import Header from "./Header";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import DoctorHighlight from "./DoctorHighlight";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import PremiumSlider from "./Slider";
import ShopGallery2 from "./ShopGallery2";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ShopGallery2 />
      <PremiumSlider />

      <FeaturedProducts />
      <DoctorHighlight />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
