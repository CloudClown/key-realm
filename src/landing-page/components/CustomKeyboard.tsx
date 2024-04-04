import customKeyboard from "../../assets/landing-page-img/customKeyboard.webp";

const CustomKeyboard = () => {
  return (
    <div className=" bg-customBlue">
      <div className=" mx-auto ">
        <div className="flex">
          <div className="flex justify-center items-center">
            <div className="text-white mx-4 md:mx-auto md:w-1/2 lg:w-1/8">
              <h1 className="text-6xl mb-5 font-bold">
                Hand Crafted fine pieces.
              </h1>
              <p className="font-bold mt-5 mb-5">
                We also firmly believed that our customers deserved more
                choices, straightforward information and legendary service.
              </p>
              <button className="font-semibold text-white  p-2 rounded-md mt-5 mb-5 hover:bg-white hover:text-customBlue hover:font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img src={customKeyboard} alt="customKeyboard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomKeyboard;
