
const ProductGridHeader = () => {
  return (
    <div>
      <p>Home / Products</p>
      <h1 className="my-5">Keyboard</h1>
      <form>
        <div className=" inline-block w-[190px]">
          <select
            name="cars"
            id="cars"
            className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="default sorting">Default Sorting</option>
            <option value="low to high">low to high</option>
            <option value="high to low">high to low</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default ProductGridHeader;
