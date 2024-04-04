import sixty from "../../assets/landing-page-img/keyboard-layout/60keyboard.webp";
import sixtyFive from "../../assets/landing-page-img/keyboard-layout/65keyboard.webp";
import seventyFive from "../../assets/landing-page-img/keyboard-layout/75keyboard.webp";

const LatestKeyboard = () => {
  const keyboardLayouts = [
    { img: sixty, type: "60%" },
    { img: sixtyFive, type: "65%" },
    { img: seventyFive, type: "75%" },
  ];
  return (
    <div className="my-10">
      <h1 className="text-customBlue text-6xl mb-5">LATEST KEYBOARD</h1>
      <div className=" text-center flex justify-start gap-4">
        {keyboardLayouts.map((keyboardLayout) => (
          <div
            key={keyboardLayout.type}
            className="text-center flex flex-col items-center"
          >
            <img
              src={keyboardLayout.img}
              alt="img"
              className="bg-slate-400 w-[521px] h-[421px] object-fit"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <button className="font-semibold text-customBlue p-2 rounded-md my-5 hover:bg-customBlue hover:text-white hover:font-semibold">
          VIEW GALLERY
        </button>
      </div>
    </div>
  );
};

export default LatestKeyboard;
