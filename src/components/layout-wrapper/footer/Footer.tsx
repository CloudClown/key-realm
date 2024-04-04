// import './Footer.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

import footerImg from "../../../assets/landing-page-img/footer.webp";

const Footer = () => {
  return (
    <footer className="bg-footerBg text-white">
      <div className="flex justify-center mt-14">
        <div>
          <img
            src={footerImg}
            alt="img"
            className="bg-slate-400 w-[521px] h-[421px] object-fit"
          />
        </div>
        <div className="flex justify-center flex-col text-center bg-slate-50">
          <div className="mx-auto w-[67%]">
            <h1 className="text-customBlue text-3xl font-semibold">
              STAY IN TOUCH
            </h1>
            <p className="text-black my-3">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <button className="font-semibold text-customBlue p-2 rounded-md my-5 hover:bg-customBlue hover:text-white hover:font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-black flex justify-start mt-16">
        <ul className="mr-[80px]">
          <h3 className="text-lg font-medium mb-5">Product</h3>
          <li className="text-footerText font-medium">Privacy Policy</li>
          <li className="text-footerText font-medium">Term of Service</li>
          <li className="text-footerText font-medium">FAQ</li>
        </ul>
        <ul className="mr-[80px]">
          <h3 className="text-lg font-medium mb-5">Resource</h3>
          <li className="text-footerText font-medium">Documentation</li>
          <li className="text-footerText font-medium">Case Studies</li>
        </ul>
        <ul>
          <h3 className="text-lg font-medium mb-5">Company</h3>
          <li className="text-footerText font-medium">About Us</li>
          <li className="text-footerText font-medium">Contact Us</li>
        </ul>
      </div>

      <div className="border-t-[0.5px] mt-5 border-footerBorderTop ">
        <div className="mx-auto container">
          <div className="flex justify-between my-5">
            <div className="text-footerText font-medium">
              <h1>© Blue Diamond Jewelry™ 2021</h1>
            </div>
            <div className="flex">
              <div className="bg-black rounded-full w-[25px] h-6 flex justify-center items-center mx-1">
                <FaFacebookF size={"15"} />
              </div>
              <div className="bg-black rounded-full w-[25px] h-6 flex justify-center items-center mx-1">
                <FaInstagram size={"15"} />
              </div>
              <div className="bg-black rounded-full w-[25px] h-6 flex justify-center items-center mx-1">
                <FaPinterestP size={"15"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
