/* eslint-disable react/prop-types */


const DonationCard = ({category}) => {

   const {image, title, category_name, price, card_bg, category_bg, text_color, btn_bg} = category || []
    return (
        <div style={{backgroundColor:card_bg}} className=" flex justify-center items-center mx-16 mt-16">
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-lg ">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 style={{backgroundColor:category_bg, color:text_color}} className="mb-4 inline px-2 py-1 rounded font-sans text-sm font-normal  leading-relaxed tracking-normal  antialiased">
      {category_name}
    </h6>
    <h4 style={{color:text_color}} className=" mt-4 block font-sans text-2xl font-semibold leading-snug tracking-normal  antialiased">
      {title}
    </h4>
    <p style={{color:text_color}} className="mt-2 mb-5 block font-sans text-base font-semibold leading-relaxed  antialiased">
      ${price}
    </p>
    <button style={{backgroundColor:btn_bg}} className="btn mb-4 text-white">View Details</button>
  </div>
</div>
        </div>
    );
};

export default DonationCard;