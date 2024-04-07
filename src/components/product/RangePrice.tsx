import * as Slider from "@radix-ui/react-slider";

const RangePrice = () => {
  return (
    <form className="my-5">
    <h6 className="font-semibold mb-2">Price</h6>
    <div className="flex gap-2">
      <input
        type="number"
        name="min"
        className="w-16 bg-gray-200 text-black"
      />
      <input
        type="number"
        name="max"
        className="w-16 bg-gray-200 text-black"
      />
    </div>
    <div className="my-4">
      <Slider.Root
        className="relative flex items-center select-none touch-none w-[200px] h-5"
        defaultValue={[25, 75]} // Set default values for both thumbs
        max={100}
        step={1}
      >
        <Slider.Track className="bg-slate-500 relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-slate-500 rounded-full h-full" />
        </Slider.Track>
        {/* First Thumb */}
        <Slider.Thumb
          className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA5"
          aria-label="Volume"
        />
        {/* Second Thumb */}
        <Slider.Thumb
          className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA5"
          aria-label="Volume"
        />
      </Slider.Root>
    </div>
  </form>

  )
}

export default RangePrice