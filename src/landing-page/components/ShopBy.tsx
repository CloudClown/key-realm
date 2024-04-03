import sixty from "../../assets/landing-page-img/keyboard-layout/60keyboard.webp";

const ShopBy = () => {
  const keyboardLayouts = [
    { img: sixty, type: "60%" },
    { img: sixty, type: "65%" },
    { img: sixty, type: "75%" },
    { img: sixty, type: "TKL" },
    { img: sixty, type: "180%" },
  ];
  return (
    <div>
      <div>
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
                width="321px"
                height="321"
                className="bg-slate-400"
              />
              <p>{keyboardLayout.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopBy;
