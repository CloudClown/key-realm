import { useState } from "react";
import Description from "./Description";
import AdditionalInfo from "./AdditionalInfo";
import Reviews from "./Reviews";

const ProductDescription = () => {
  const buttonObj = [
    { id: 1, bName: "Description" },
    { id: 2, bName: "Additional Information" },
    { id: 3, bName: "Reviews" },
  ];
  const [description, setDescription] = useState(true);
  const [addInfo, setAddInfo] = useState(false);
  const [reviews, setReviews] = useState(false);

  const handleClick = (bId: number) => {
    if (bId === 1) {
      setDescription(!description);
      setAddInfo(false);
      setReviews(false);
    } else if (bId === 2) {
      setAddInfo(!addInfo);
      setDescription(false);
      setReviews(false);
    } else if (bId === 3) {
      setReviews(!reviews);
      setAddInfo(false);
      setDescription(false);
    } else {
      return null;
    }
  };

  return (
    <div className="bg-gray-400">
      <div className="container mx-auto mt-8">
        {buttonObj.map((buttonData) => (
          <button
            key={buttonData.id}
            className={`p-1 text-customBlue ${buttonData.id === 2 ? 'mx-5' : ''} ${buttonData.id === buttonData.id ? 'border-t-4 border-customBlue' : ''} mt-5 mx-4`}
            onClick={() => handleClick(buttonData.id)}
          >
            {buttonData.bName}
          </button>
        ))}

        <div className="bg-gray-500">
          {description && <Description />}
          {addInfo && <AdditionalInfo />}
          {reviews && <Reviews />}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
