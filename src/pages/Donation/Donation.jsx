import { useEffect, useState } from "react";
import DonationCard from "../../component/DonationCard/DonationCard";


const Donation = () => {

    const [donation, setDonation] = useState([]);

    const [noDonationCategory, setNoDonationCategory] = useState(false);

    const [isShow, setIsShow] = useState(false);


    useEffect(()=>{
        const donationCategory = JSON.parse(localStorage.getItem("donation"));
        
        if(donationCategory){
            setDonation(donationCategory);
        }
        else{
            setNoDonationCategory('No Donation Category');
        }
    }, [])

    console.log(donation)
    return (
        <div className=" w-full mb-8">
           {noDonationCategory? (<p className=" h-[70vh] flex justify-center items-center">{noDonationCategory}</p>) :
           (<div>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
            {
                isShow? donation.map((category) => <DonationCard key={category.id} category={category}></DonationCard>)
                :
                donation.slice(0, 4).map(category => <DonationCard key={category.id} category={category}></DonationCard>)
            }
            </div>
            {
                donation.length > 4 &&
                !isShow && <button onClick={() => setIsShow(!isShow)} className=" mt-10 mb-6 bg-[#009444]  block mx-auto rounded-md px-4 py-2 text-white font-semibold">{isShow ? " " : "See All"}</button>
            }
           </div>)
           } 
        </div>
    );
};

export default Donation;