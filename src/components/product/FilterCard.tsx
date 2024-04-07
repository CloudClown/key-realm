// import { filterData } from "@/pages/product/FilterData";
import RangePrice from "./RangePrice";
import Availability from "./Availability";


const FilterCard = () => {
  // console.log(filterData);

  return (
    <div className="h-screen  ">
      <RangePrice />
      
      <div>
       <Availability/>
      </div>
    </div>
  );
};

export default FilterCard;
