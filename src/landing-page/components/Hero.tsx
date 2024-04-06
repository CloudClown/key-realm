import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import keyboardOne from "../../assets/landing-page-img/img-1.webp";
import keyboardTwo from "../../assets/landing-page-img/img-2.jpg";
import keyboardThree from "../../assets/landing-page-img/img-3.webp";

const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    fade: true,
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <Slider {...settings}>
        <div>
          <img
            className="h-screen w-screen object-cover blur-sm"
            src={keyboardOne}
            alt="img"
          />
        </div>
        <div>
          <img
            className="h-screen w-screen object-cover"
            src={keyboardTwo}
            alt="img"
          />
        </div>
        <div>
          <img
            className="h-screen w-screen object-cover"
            src={keyboardThree}
            alt="img"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
