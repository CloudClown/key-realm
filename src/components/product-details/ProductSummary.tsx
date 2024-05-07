import { useContext, useReducer } from "react";
import {
  NameContext,
  SecondContext,
} from "../../../src/pages/product-details-page/ProductDetailsPage";

const initialState = {
  firstCounter: 0,
};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      console.log(action);
      console.log(state + "state from function");
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ProductSummary = () => {
  const name = useContext<any>(NameContext);
  const sec = useContext<any>(SecondContext);

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="">
      <h4>Count - {count.firstCounter}</h4>
      <button
        className="p-2 bg-white border-2 border-customBlue"
        onClick={() => dispatch({ type: "increment", value: 1 })}
      >
        Increment
      </button>
      <button
        className="p-2 bg-white border-2 border-customBlue"
        onClick={() => dispatch({ type: "decrement", value: 1 })}
      >
        Decrement
      </button>
      <button
        className="p-2 bg-white border-2 border-customBlue"
        onClick={() => dispatch({ type: "increment", value: 5 })}
      >
        Increment By 5
      </button>
      <button
        className="p-2 bg-white border-2 border-customBlue"
        onClick={() => dispatch({ type: "decrement", value: 5 })}
      >
        Decrement By 5
      </button>
      <button
        className="p-2 bg-white border-2 border-customBlue"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
      <hr />
      <h1>{name}</h1>
      <h1>{sec}</h1>
      <h1>Any Product Name</h1>
      <p className="text-customBlue text-2xl my-5">8000৳</p>
      <ul className="list-disc text-customBlue mb-5">
        <li>Model</li>
        <li>type</li>
        <li>Switch</li>
        <li>Key caps</li>
      </ul>
      <div className="flex flex-c">
        <form>
          <input
            type="number"
            name="quantity"
            value={1}
            className="bg-gray-400 w-10 mr-5"
          />
          <button className="p-2 bg-white border-2 border-customBlue transition-colors text-customBlue hover:bg-customBlue hover:text-white">
            Add to cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductSummary;
