import sixty from "../../assets/landing-page-img/keyboard-layout/60keyboard.webp";
import sixtyFive from "../../assets/landing-page-img/keyboard-layout/65keyboard.webp";
import seventyFive from "../../assets/landing-page-img/keyboard-layout/75keyboard.webp";

const OurServices = () => {
  const services = [
    { img: sixty, service: "Custom Build Keyboard" },
    { img: sixtyFive, service: "Fix Your Gadget" },
    { img: seventyFive, service: "Servicing" },
  ];
  return (
    <div className="my-10">
      <h1 className="text-customBlue text-6xl mb-5">OUR SERVICES</h1>
      <div className=" text-center flex justify-start gap-4">
        {services.map((service) => (
          <div
            key={service.service}
            className="text-center flex flex-col items-center"
          >
            <img
              src={service.img}
              alt="img"
              className="bg-slate-400 w-[521px] h-[421px] object-fit"
            />
            <p>{service.service}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <button className="bg-customBlue text-white p-2 rounded-md ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default OurServices;
