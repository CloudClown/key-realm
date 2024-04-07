
const Availability = () => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-2">Availability</h3>
      <div className="ml-3">
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" className=" mr-2 cursor-pointer" />
          <span className="text-gray-700">In stock</span>
        </label>
      </div>
    </div>
  );
};

export default Availability;
