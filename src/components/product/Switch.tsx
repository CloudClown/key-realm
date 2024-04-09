import { switchOfKeyBoard  } from "./FilterData";

const Switch = () => {
  return (
    <div>
    <h3 className="font-bold text-lg mb-2">Size</h3>
    <div className="ml-3">
      {switchOfKeyBoard.map((keySwitch) => (
        <label className="flex items-center cursor-pointer" key={keySwitch.switch}>
          <input type="checkbox" className="mr-2 cursor-pointer" />
          <span className="text-gray-700">{keySwitch.switch}</span>
        </label>
      ))}
    </div>
  </div>
  )
}

export default Switch