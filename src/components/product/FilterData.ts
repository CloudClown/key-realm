export const availabilityData = [
  {
    available: "In stock",
  },
  {
    unavailable: "Out of stock",
  },
];

export interface BrandsName {
  brandName: string;
}

export const brands: BrandsName[] = [
  { brandName: "Logitech" },
  { brandName: "Corsair" },
  { brandName: "Razer" },
];

export interface Size {
  size: string;
}
export const size: Size[] = [
  { size: "Full-size" },
  { size: "Tenkeyless" },
  { size: "Membrane" },
  { size: "75%" },
  { size: "65%" },
  { size: "60%" },
  { size: "40%" },
];

export const connectivity = [
  { connectivity: "Wired" },
  { connectivity: "Wireless" },
  { connectivity: "Bluetooth" },
];


export interface SwitchOfKeyBoard {
  switch: string;
}

export const switchOfKeyBoard: SwitchOfKeyBoard[] = [
  { switch: "CherryMX" },
  { switch: "Razer" },
  { switch: "Gateron" },
];
