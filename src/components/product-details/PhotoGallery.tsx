import Slider from "react-slick";
// import "./PhotoGallery.scss";
// import styles from "./PhotoGallery.module.scss";
import key1 from "../../assets/landing-page-img/keyboard-layout/60keyboard.webp";
import key2 from "../../assets/landing-page-img/keyboard-layout/65keyboard.webp";
import key3 from "../../assets/landing-page-img/keyboard-layout/75keyboard.webp";
import key4 from "../../assets/landing-page-img/keyboard-layout/tklKeyboard.webp";

const PhotoGallery = () => {
  const keys = [key1, key2, key3, key4];

  const settings = {
    customPaging: function (i: number) {
      return (
        <a className="inline-block">
          <img
            src={keys[i]}
            alt={`key${i + 1}`}

            // style={{ width: "32px !important" }}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots",
    trackClass: "slick-track",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="container mx-auto">
      <style>
        {`
          .slick-slider,
          .slick-list,
          .slick-track,
          .slick-slide,
          .slick-slide > div {
            margin: 0 auto;
            padding: 0;
            width: 80%;
          }

          .slick-track {
            display: flex;
            align-items: center;
          }

          .slick-dots {
            position: unset;
            display: flex !important;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
            align-items: center;
          }
          .slick-dots li {
            background: none;
            width: 132px;
            height: auto;
          }

          .slick-dots li button img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>
      <Slider {...settings}>
        <div>
          <img src={key1} alt="key1" />
        </div>
        <div>
          <img src={key2} alt="key2" />
        </div>
        <div>
          <img src={key3} alt="key3" />
        </div>
        <div>
          <img src={key4} alt="key4" />
        </div>
      </Slider>
    </div>
  );
};

export default PhotoGallery;
