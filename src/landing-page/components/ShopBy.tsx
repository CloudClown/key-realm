import sixty from "../../assets/landing-page-img/keyboard-layout/60keyboard.webp";
import sixtyFive from "../../assets/landing-page-img/keyboard-layout/65keyboard.webp";
import seventyFive from "../../assets/landing-page-img/keyboard-layout/75keyboard.webp";
import tklKeyboard from "../../assets/landing-page-img/keyboard-layout/tklKeyboard.webp";
import fullSizeKeyboard from "../../assets/landing-page-img/keyboard-layout/fullSizeKeyboard.webp";

const ShopBy = () => {
  const keyboardLayouts = [
    { img: sixty, type: "60%" },
    { img: sixtyFive, type: "65%" },
    { img: seventyFive, type: "75%" },
    { img: tklKeyboard, type: "TKL" },
    { img: fullSizeKeyboard, type: "180%" },
  ];
  return (
    <div className="my-10">
      <h1 className="text-purple-900 text-6xl mb-5">Shop by Keyboard Type</h1>
      <div className=" text-center flex justify-start gap-4">
        {keyboardLayouts.map((keyboardLayout) => (
          <div
            key={keyboardLayout.type}
            className="text-center flex flex-col items-center"
          >
            <img
              src={keyboardLayout.img}
              alt="img"
              // width="321px"
              // height="321px"
              // style={{ height: "200px" }} // Set specific height here
              className="bg-slate-400 w-[321px] h-[221px] object-fit"
            />
            <p className="text-customBlue text-2xl">{keyboardLayout.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopBy;
