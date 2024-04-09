import { size as sizes } from "./FilterData";

const Sizes = () => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-2">Size</h3>
      <div className="ml-3">
        {sizes.map((keySize) => (
          <label className="flex items-center cursor-pointer" key={keySize.size}>
            <input type="checkbox" className="mr-2 cursor-pointer" />
            <span className="text-gray-700">{keySize.size}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
