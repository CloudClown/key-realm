import Hero from "./components/Hero";
import ShopBy from "./components/ShopBy";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto">
        <ShopBy />
      </div>
    </div>
  );
};

export default LandingPage;
