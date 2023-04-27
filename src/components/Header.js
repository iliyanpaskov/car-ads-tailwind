

import { Link } from "react-router-dom";
import Discount from "./Discount";
import Logo from "./Logo";

const Header = () => {
    return (
        <>
            <Logo />
            <section className="w-11/12 bg-gray-800 text-white flex justify-between items-center  sticky top-0  z-10">
                <article className=" bg-blue-900 w-1/5 h-full p-2 flex items-center">
                    <p className="text-white text-2xl h-full">
                        Explore 2023
                        Mustang Mach-E &#174;
                    </p>
                    <i className="fa-solid fa-angles-down p-3 text-3xl "></i>
                </article>

                <article className="w-1/2 ">
                    <ul className="flex flex-row justify-around p-3 place-items-center">
                        <li className="text-lg">
                            <Link to='/prices'>Gallery</Link>
                        </li>
                        <li className="text-lg">
                            <Link to='/prices'>Price list</Link>
                        </li>
                        <li className="text-lg">
                            <Link to='/test-drive'>Test drive</Link>
                        </li>
                    </ul>
                </article>
            </section>
            <Discount />
        </>
    )
}

export default Header;