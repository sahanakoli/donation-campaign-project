import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav className=" flex justify-between items-center px-6">
                <div>
                    <img src="https://i.ibb.co/PZ1q8Qw/Logo.png" alt="" />
                </div>
                <ul className=" flex gap-5">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/donation">Donation</Link>
                    </li>
                    <li>
                        <Link to="/statistics">Statistics</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;