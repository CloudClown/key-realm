const ProductSummary = () => {
  return (
   
      <div className=""> 
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
            <input type="number" name="quantity" value={1} className="bg-gray-400 w-10 mr-5"/>
            <button className="p-2 bg-white border-2 border-customBlue transition-colors text-customBlue hover:bg-customBlue hover:text-white">Add to cart</button>
          </form>
        </div>
      </div>

  );
};

export default ProductSummary;
