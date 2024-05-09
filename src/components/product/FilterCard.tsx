// import { filterData } from "@/pages/product/FilterData";
import RangePrice from "./RangePrice";
import Availability from "./Availability";
import Brand from "./Brands";

// Data 
import { brands } from './FilterData';
import Types from "./Types";
import Sizes from "./Sizes";
import HotSwapp from "./HotSwapp";
import Switch from "./Switch";

const FilterCard = () => {
  // console.log(brands);

  return (
    <div className="h-auto">
      <RangePrice />

      <div>
        <Availability />
        <Brand brands={brands}/>
        <Types />
        <Sizes />
        <HotSwapp />
        <Switch  />
      </div>
    </div>
  );
};

export default FilterCard;
