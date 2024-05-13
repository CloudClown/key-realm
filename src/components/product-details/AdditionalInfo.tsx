import { KeyboardStructure } from "@/models/keyboard.model";

interface IKeyboardDescriptionProps {
  keyboard: KeyboardStructure | null;
}

const AdditionalInfo = ({ keyboard }: IKeyboardDescriptionProps) => {
  return (
    <div>
      <h1>AdditionalInfo</h1>
      <h3>{keyboard?.description}</h3>
    </div>
  );
};

export default AdditionalInfo;
