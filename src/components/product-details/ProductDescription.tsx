import { useState } from "react";
import Description from "./Description";
import AdditionalInfo from "./AdditionalInfo";
import Reviews from "./Reviews";
import { KeyboardStructure } from "@/models/keyboard.model";


interface IKeyboardDescriptionProps {
  keyboard: KeyboardStructure | null;
}

const ProductDescription = ({keyboard}: IKeyboardDescriptionProps) => {

  // console.log('product description ', keyboard)

  const buttonObj = [
    { id: 1, bName: "Description" },
    { id: 2, bName: "Additional Information" },
    { id: 3, bName: "Reviews" },
  ];
  const [description, setDescription] = useState(true);
  const [addInfo, setAddInfo] = useState(false);
  const [reviews, setReviews] = useState(false);

  const [activeBtn, setActive] = useState(1);

  const handleClick = (bId: number) => {
    if (bId === 1) {
      setDescription(!description);
      setAddInfo(false);
      setReviews(false);
      // btn style
      setActive(bId);
    } else if (bId === 2) {
      setAddInfo(!addInfo);
      setDescription(false);
      setReviews(false);
      // btn style
      setActive(bId);
    } else if (bId === 3) {
      setReviews(!reviews);
      setAddInfo(false);
      setDescription(false);
      // btn style
      setActive(bId);
    } else {
      return null;
    }
  };


  // transition-all make the content push to down 
  return (
    <div className="bg-gray-400">
      <div className="container mx-auto ">

        <div className="bg-yellow-100 ">
          {buttonObj.map((buttonData) => (
            <button
              key={buttonData.id}
              className={`p-1 my-6 text-customBlue ${
                buttonData.id === 2 ? "mx-5" : ""
              } ${
                activeBtn === buttonData.id
                  ? "border-t-4 border-customBlue transition-colors"
                  : ""
              } mt-5 mx-4`}
              onClick={() => handleClick(buttonData.id)}
            >
              {buttonData.bName}
              
            </button>
          ))}
        </div>

        <div className="bg-gray-500">
          {description && <Description keyboard={keyboard || null}/>}
          {addInfo && <AdditionalInfo keyboard={keyboard || null}/>}
          {reviews && <Reviews keyboard={keyboard || null}/>}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
