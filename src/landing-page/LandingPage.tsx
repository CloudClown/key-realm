import CustomerReviews from "./components/CustomerReviews";
import OurServices from "./components/OurServices";
import CustomKeyboard from "./components/CustomKeyboard";
import Hero from "./components/Hero";
import LatestKeyboard from "./components/LatestKeyboard";
import ShopBy from "./components/ShopBy";

const LandingPage = () => {
  return (
    <div className="font-landingPageFont">
      <Hero />
      <div className="container mx-auto">
        <ShopBy />
      </div>
      <CustomKeyboard />
      <div className="container mx-auto">
      <LatestKeyboard />
      <CustomerReviews />
      <OurServices />
      </div>
    </div>
  );
};

export default LandingPage;
