import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className=" flex justify-between items-center px-16 mt-8">
                <div>
                    <img src="https://i.ibb.co/PZ1q8Qw/Logo.png" alt="" />
                </div>
                <ul className=" flex gap-10 underline">
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