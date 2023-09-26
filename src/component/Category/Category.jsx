/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import swal from 'sweetalert';

const Category = ({category}) => {

    const {id, image, title, details, price} = category || []

    const handleDetails = () => {
        console.log(category)
       
        const addDonationArray = [];
        
        const donationCategory = JSON.parse(localStorage.getItem('donation'))

        if(!donationCategory){
           addDonationArray.push(category)
           localStorage.setItem('donation', JSON.stringify(addDonationArray))
           swal("Good job!", "You Give Donation", "success");
        }
        else{
            const isExist = donationCategory.find((category) => category.id == id)
            console.log(id)

            if(!isExist){
                addDonationArray.push(...donationCategory, category)
                localStorage.setItem("donation", JSON.stringify(addDonationArray))
                swal("Good job!", "You Give Donation", "success");
            }
            else{
                swal("Already Donation"); 
            }
        }
    }

    return (
        <div>
            <div className=" flex justify-center items-center mt-10">
            <div className=" w-full mx-16 ">
  <figure><img className=" w-full h-[700px] mx-auto " src={image} alt="" /></figure>
  <div className="">
     </div>
     <button onClick={handleDetails} className=" absolute -mt-20 ml-12 text-white text-xl font-medium rounded bg-blue-400 px-4 py-2">Donate ${price}</button>
     <h2 className=" text-4xl font-bold mt-8 mb-6">{title}</h2>
    <p className=" text-sm font-normal mb-8">{details}</p>
       </div>
        </div>
        </div>
        
        
    );
};

export default Category;
