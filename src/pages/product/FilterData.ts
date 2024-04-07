export interface FilterData {
  Availability: {
    available: string;
    unavailable: string;
  };
  Brand: {
    [key: string]: string;
  };
  Type: {
    [key: string]: string;
  };
  Size: {
    [key: string]: string;
  };
  Connectivity: {
    [key: string]: string;
  };
  HotSwappability: {
    [key: string]: string;
  };
  Switch: {
    [key: string]: string;
  };
}

//   export const filterData: FilterData[] = [
//     {
//       Availability: {
//         available: "In stock",
//         unavailable: "Out of stock",
//       },
//       Brand: {
//         Logitech: "Logitech keyboards",
//         Corsair: "Corsair keyboards",
//         Razer: "Razer keyboards",
//       },
//       Type: {
//         Mechanical: "Mechanical keyboards",
//         Membrane: "Membrane keyboards",
//         Hybrid: "Hybrid keyboards",
//       },
//       Size: {
//         FullSize: "Full-size keyboards",
//         Tenkeyless: "Tenkeyless keyboards",
//         Compact: "Compact keyboards",
//         ThreeQuarters: "75% keyboards",
//         SixtyFive: "65% keyboards",
//         Sixty: "60% keyboards",
//         Forty: "40% keyboards",
//       },
//       Connectivity: {
//         Wired: "Wired keyboards",
//         Wireless: "Wireless keyboards",
//         Bluetooth: "Bluetooth keyboards",
//       },
//       HotSwappability: {
//         Yes: "Hot-swappable keyboards",
//         No: "Non hot-swappable keyboards",
//       },
//       Switch: {
//         CherryMX: "Cherry MX switches",
//         Razer: "Razer switches",
//         Gateron: "Gateron switches",
//       },
//     },
//   ];

export const availabilityData = [
  {
    available: "In stock",
  },
  {
    unavailable: "Out of stock",
  },
];

export const brand = [
  { brandName: "Logitech" },
  { brandName: "Corsair" },
  { brandName: "Razer" },
];
