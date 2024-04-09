import { BrandsName } from "./FilterData";

interface Props {
  brands: BrandsName[]; // Define brands as an array of BrandsName
}

const Brand = ({ brands }: Props) => {
  return (
    <div className="h-60 overflow-y-scroll">
      <h3 className="font-bold text-lg mb-2">Brand</h3>
      <div className="ml-3">
        {brands.map(({ brandName }) => (
          <label className="flex items-center cursor-pointer" key={brandName}>
            <input type="checkbox" className="mr-2 cursor-pointer" />
            <span className="text-gray-700">{brandName}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Brand;
