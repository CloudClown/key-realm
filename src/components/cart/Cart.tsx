import { IoCloseCircleOutline } from "react-icons/io5";
import key from "../../assets/landing-page-img/keyboard-layout/65keyboard.webp";

const Cart = () => {
  return (
    <div className="mt-10">
      <div className="container mx-auto">
        <h1 className="text-[28.95px] mb-5">Cart</h1>
        <div className="">
          <table className="w-full text-left">
            <tr className="bg-[#4B4F58]">
              <th className="p-4"></th>
              <th className="p-4"></th>
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Subtotal</th>
            </tr>
            <tr className="">
              <td className=" p-4">
                <IoCloseCircleOutline size={24} />
              </td>
              <td className="p-4">
                <img src={key} alt="product img" width={54} height={54} />
              </td>
              <td className="p-4">Alfreds Futterkiste</td>
              <td className="p-4">Maria Anders</td>
              <td className="p-4">Germany</td>
              <td className="p-4">Mexico</td>
            </tr>
          </table>

          <div className="flex justify-between w-full items-end">
            <div className="mt-4">
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="coupon" placeholder="coupon" />
                <button className="p-2 border-2 border-customBlue">
                  Apply coupon
                </button>
              </form>
            </div>
            <button className="p-2 border-2 border-customBlue h-12">
              Update cart
            </button>
          </div>

          <div className="grid grid-cols-12 bg-red-400 h-96  w-full mt-8">
            <div className="bg-cyan-900  col-start-6 col-end-13">
              <div className="bg-cyan-400 w-full">
                <h1 className="text-[33px] font-semibold p-3">Cart totals</h1>
              </div>

              <div className="bg-slate-400">
                <table>
                  <tr className="">
                    <td className="p-4 pr-64">Subtotal</td>
                    <td className="p-4">2000৳</td>
                  </tr>
                  <tr className="">
                    <td className="p-4 pr-64">Shipping</td>
                    <td className="p-4">Address of customer</td>
                  </tr>
                  <tr className="">
                    <td className="p-4 pr-64">Total</td>
                    <td className="p-4">2000৳</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
