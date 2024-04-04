import Quotation from "../../assets/landing-page-img/quotation.png";

const CustomerReviews = () => {
  const customerReviews = [
    {
      name: "Muzammel",
      msg: "Great variety of cuts and amazing customer service. Helped to find the perfect ring and helped me to personalize it a little more.",
      id: "1",
    },
    {
      name: "Shaju",
      msg: "What an amazing shopping experience! I tried other jewelers and didn't find anything I liked. Thank you so much.",
      id: "2",
    },
    {
      name: "Tahmid",
      msg: "Great quality, and showed they can work through a problem and maintain excellent customer service!!",
      id: "3",
    },
  ];
  return (
    <div className="mb-20">
      <h1 className="text-customBlue text-6xl mb-5">Customer reviews</h1>
      <div className=" text-center flex justify-start gap-4">
        {customerReviews.map((customerReview) => (
          <div
            key={customerReview.id}
            className="text-center flex flex-col items-center border p-10"
          >
            <div className="flex justify-start w-full mb-4">
              <img src={Quotation} alt="quotation" />
            </div>
            <p>{customerReview.msg}</p>
            <p>-{customerReview.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
