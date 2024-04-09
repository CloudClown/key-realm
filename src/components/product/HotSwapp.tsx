
const HotSwapp = () => {
  return (
    <div>
    <h3 className="font-bold text-lg mb-2">Hot-Swappability</h3>
    <div className="ml-3">
      <label className="flex items-center cursor-pointer">
        <input type="checkbox" className=" mr-2 cursor-pointer" />
        <span className="text-gray-700">Hot-Swappable</span>
      </label>
      <label className="flex items-center cursor-pointer">
        <input type="checkbox" className=" mr-2 cursor-pointer" />
        <span className="text-gray-700">Non Hot-Swappable</span>
      </label>
    </div>
  </div>
  )
}

export default HotSwapp