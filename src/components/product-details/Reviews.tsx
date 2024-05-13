import { KeyboardStructure } from "@/models/keyboard.model";

interface IKeyboardDescriptionProps {
  keyboard: KeyboardStructure | null;
}

const Reviews = ({ keyboard }: IKeyboardDescriptionProps) => {
  return (
    <div>
      <h1>Reviews</h1>
      <h3>{keyboard?.rating}</h3>
    </div>
  );
};

export default Reviews;
