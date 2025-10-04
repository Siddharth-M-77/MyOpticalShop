import Header from "./Header";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import DoctorHighlight from "./DoctorHighlight";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import ShopGallery from "./ShopGallery";
import PremiumSlider from "./Slider";

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* <ShopGallery /> */}
      <PremiumSlider />

      <FeaturedProducts />
      <DoctorHighlight />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
