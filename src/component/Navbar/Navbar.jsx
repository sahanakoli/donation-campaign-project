import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className=" flex justify-between items-center max-w-[1400px] mx-4 md:mx-10 lg:mx-auto mt-8 z-50 relative">
                <div>
                    <img src="https://i.ibb.co/PZ1q8Qw/Logo.png" alt="" />
                </div>
                <ul className=" flex gap-5 md:gap-6 lg:gap-10 underline">
                <NavLink
                   to="/"
                   className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "text-[#FF444A]" : "active"
                   }
                    >
                   Home
                  </NavLink>
                <NavLink
                   to="/donation"
                   className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "text-[#FF444A]" : "active"
                   }
                    >
                   Donation
                  </NavLink>
                <NavLink
                   to="/statistics"
                   className={({ isActive, isPending }) =>
                   isPending ? "pending" : isActive ? "text-[#FF444A]" : "active"
                   }
                    >
                   Statistics
                  </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;