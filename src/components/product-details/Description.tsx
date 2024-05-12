import { KeyboardStructure } from "@/models/keyboard.model";

interface IKeyboardDescriptionProps {
  keyboard: KeyboardStructure | null;
}

const Description = ({ keyboard }: IKeyboardDescriptionProps) => {
  return (
    <div>
      <h1>Description</h1>
      <h3>
        {keyboard?.brand}
      </h3>
    </div>
  );
};

export default Description;
