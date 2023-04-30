

import { Link } from "react-router-dom";
import Discount from "./Discount";
import Logo from "./Logo";

const Header = () => {
    return (
        <>
            <Logo />
            <section className="w-11/12 bg-gray-800 text-white flex justify-between items-center  sticky top-0  z-10">
                <article className=" bg-blue-900 w-4/12 h-full p-2 flex items-center">
                    <p className="text-white text-xl h-full px-4 py-2">
                        Explore 2023
                        Mustang Mach-E &#174;
                    </p>
                    <Link to='/'>  <i className="fa-solid fa-house fa-fade px-3 text-3xl mx-4 hover:animate-none"></i></Link>
                </article>

                <article className="w-1/2 ">
                    <ul className="flex flex-row justify-around p-3 place-items-center">
                        <li className="text-lg hover:underline">
                            <Link to='/gallery'>Gallery</Link>
                        </li>
                        <li className="text-lg hover:underline">
                            <Link to='/mustang'>Why Mustang? </Link>
                        </li>
                        <li className="text-lg hover:underline">
                            <Link to='/get-notifications'>Get notifications</Link>
                        </li>
                    </ul>
                </article>
            </section>
            <Discount />
        </>
    )
}

export default Header;