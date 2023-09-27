/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import swal from 'sweetalert';

const Category = ({category}) => {

    const {id, image, title, details, price, btn_bg} = category || []

    const handleDetails = () => {
        console.log(category)
       
        const addDonationArray = [];
        
        const donationCategory = JSON.parse(localStorage.getItem('donation'))

        if(!donationCategory){
           addDonationArray.push(category)
           localStorage.setItem('donation', JSON.stringify(addDonationArray))
           swal("Thank You!", "Donated Successfully", "success");
        }
        else{
            const isExist = donationCategory.find((category) => category.id == id)
            console.log(id)

            if(!isExist){
                addDonationArray.push(...donationCategory, category)
                localStorage.setItem("donation", JSON.stringify(addDonationArray))
                swal("Thank You!", "Donated Successfully", "success");
            }
            else{
                swal("Already Donated"); 
            }
        }
            
        
    }

    return (
        <div>
            <div className=" flex justify-center items-center mt-10">
            <div className=" w-full mx-16 ">
  <figure className=' relative'><img className="  w-full h-[700px] mx-auto " src={image} alt="" />
  <div className="absolute left-0 right-0 mx-auto bottom-0 h-[120px] md:h-[120px] lg:h-[150px] -mt-[17%] md:-mt-[15%] lg:-mt-[11%]  bg-[#0B0B0B32] ">
     </div>
  </figure>
  
     <button style={{backgroundColor:btn_bg}} onClick={handleDetails} className="absolute -mt-20 lg:-mt-24 ml-8 lg:ml-12 text-white text-xl font-medium rounded  px-4 py-2">Donate ${price}</button>
     <h2 className=" text-4xl font-bold mt-8 mb-6">{title}</h2>
    <p className=" text-sm font-normal mb-4 lg:mb-8">{details}</p>
       </div>
        </div>
        </div>
        
        
    );
};

export default Category;
