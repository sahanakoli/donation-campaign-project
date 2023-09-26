/* eslint-disable react/prop-types */


const DonationCard = ({category}) => {

   const {image, title, category_name, price,} = category || []
    return (
        <div className=" w-full  mt-14">
            <div className="card card-side w-[648px] mx-auto bg-base-100 shadow-xl">
  <figure><img className=" h-full" src={image} alt=""/></figure>
  <div className="card-body">
    <h2 className=" text-sm font-normal">{category_name}</h2>
    <h1 className=" text-xl font-semibold">{title}</h1>
    <p className=" text-base font-semibold">${price}</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DonationCard;