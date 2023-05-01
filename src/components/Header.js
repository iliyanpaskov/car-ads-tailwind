

import { Link } from "react-router-dom";
import Discount from "./Discount";
import Logo from "./Logo";

const Header = () => {
    return (
        <>
            <Logo />
            <section className="w-11/12 bg-gray-800 text-white flex justify-between items-center  sticky top-0  z-10">
                <article className=" bg-blue-900 w-4/12 h-full p-2 flex items-center max-md:w-1/5 max-sm:w-1/2 max-sm:bg-gray-800">
                    <p className="text-white text-xl h-full px-4 py-2 max-lg:text-lg max-md:hidden">
                        Explore 2023 Mustang Mach-E
                    </p>
                    <Link to='/'>  <i className="fa-solid fa-house fa-fade px-3 text-3xl mx-4 hover:animate-none max-lg:text-2xl"></i></Link>
                </article>

                <article className="w-1/2 max-lg:w-2/3 max-md:w-4/5 max-sm:w-1/2 max-sm:pr-4">
                    <ul className="flex flex-row justify-around p-3 place-items-center max-sm:flex-col max-sm:place-items-start">
                        <li className="text-lg hover:underline max-lg:text-base">
                            <Link to='/gallery'>Gallery</Link>
                        </li>
                        <li className="text-lg hover:underline max-lg:text-base">
                            <Link to='/mustang'>Why Mustang? </Link>
                        </li>
                        <li className="text-lg hover:underline max-lg:text-base">
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