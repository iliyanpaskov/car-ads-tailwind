import { Link } from "react-router-dom";
import Logo from "./Logo";
import LogoFord from "./LogoFord";

const Footer = () => {

    return (
        <section className="w-11/12 flex flex-col items-center">
            <article className="flex justify-around  bg-blue-900 items-center w-full">
                <Logo />
                <ul className="flex w-1/4 justify-between">
                    <li className="text-white cursor-pointer"><i className="fa-brands fa-facebook text-3xl max-lg:text-2xl"></i></li>
                    <li className="text-white cursor-pointer"><i className="fa-brands fa-twitter text-3xl max-lg:text-2xl"></i></li>
                    <li className="text-white cursor-pointer"><i className="fa-brands fa-square-instagram text-3xl max-lg:text-2xl"></i></li>
                    <li className="text-white cursor-pointer"><i className="fa-brands fa-youtube text-3xl max-lg:text-2xl"></i></li>
                </ul>
            </article>

            <article className=" bg-gray-800 flex justify-around py-6 px-2 w-full max-sm:flex-col max-sm:items-center max-sm:text-center">
                <section className="text-white">
                    <h1 className="text-lg text-center">Contact us:</h1>
                    <ul>
                        <li >
                            <h3><i className="fa-solid fa-location-dot pe-4"></i>1234 L Street St, Bensenville, IL 123456, USA </h3>
                        </li>
                        <li >
                            <h3><i className="fa-solid fa-phone pe-4"></i>(555) 555-1234 </h3>
                        </li>
                        <li >
                            <h3><i className="fa-regular fa-envelope pe-4"></i>contact.ford@contactt.com </h3>
                        </li>
                    </ul>
                </section>

                <section className="text-white max-sm:mt-5">
                    <h1 className="text-lg text-center">Navigation:</h1>
                    <ul>
                        <li>
                            <Link to='/gallery'><i className="fa-regular fa-image pe-4"></i>Gallery</Link>
                        </li>
                        <li>
                            <Link to='/mustang'><i className="fa-solid fa-leaf pe-4"></i>Why the Mustang?</Link>
                        </li>
                        <li>
                            <Link to='/get-notifications'><i className="fa-regular fa-bell pe-4"></i>Get notifications</Link>
                        </li>

                    </ul>
                </section>
            </article>

            <article className="flex items-center max-sm:flex-col">
                <LogoFord/>
                <p className="text-sm underline text-gray-600 max-sm:mb-8 max-sm:text-xs">Practice Tailwind css project! All rights reserved &copy;! </p>
            </article>
        </section>
    )
}

export default Footer;