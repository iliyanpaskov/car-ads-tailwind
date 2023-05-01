import { Link } from "react-router-dom";
import PlayButton from "./PlayButton";

const Home = () => {
    return (
        <section>
            <article className="w-full shadow-lg shadow-slate-400 relative">
                <h1 className="text-white text-3xl font-semibold absolute start-8 top-5 max-md:text-2xl">2023 FORD MUSTANG MACH-E</h1>
                <img className="w-full" src="./images/1w.webp" alt="car" />
                <div className="absolute bottom-60 left-24 max-md:bottom-48 max-md:left-14 max-sm:bottom-44 max-sm:left-4">
                    <PlayButton url={"https://www.youtube.com/embed/S4sIn0165LQ"} />
                </div>
                <section className="flex border border-gray-300">
                    <article className=" border border-gray-300 w-1/4 text-center p-4 max-md:w-1/2">
                        <p className="text-lg">Starting at:</p>
                        <p className="text-3xl font-semibold max-sm:text-2xl">$45,995</p>
                    </article >
                    <article className=" border border-gray-300 w-1/4 text-center p-4 max-md:w-1/2">
                        <p className="text-lg">Seating for:</p>
                        <p className="text-3xl font-semibold max-sm:text-2xl">5</p>
                    </article>
                </section>
            </article>

            <article className=" mx-20 my-24 shadow-lg shadow-slate-400 flex items-center max-xl:flex-col max-md:mx-0">
                <section className="w-1/2 flex flex-col items-center max-xl:w-full">
                    <img className="w-full object-cover" src="/images/24.jpg" alt="ford" />
                    <Link to={'/mustang'} className=" bg-blue-900 m-7 px-7 py-1 rounded text-white text-lg font-semibold hover:bg-blue-500 hover:animate-pulse hover:text-black shadow-lg shadow-slate-500">Why the Mustang?</Link>
                </section>
                <section className="w-1/2 p-6 max-xl:w-full max-xl:text-center">
                    <h2 className="text-3xl font-medium py-5 max-md:text-2xl max-md:p-0">2023 Mustang Mach-E</h2>
                    <p className="my-2 text-lg max-md:text-base">Current starting MSRP of $45,995.</p>
                    <p className="my-2 text-lg max-md:text-base">Eligible buyers of a Mustang Mach-E may currently qualify for $3,750 in federal tax credits.*</p>
                    <p className="my-2 text-lg max-md:text-base">
                        Ordering is currently unavailable on all models and re-opens for ordering in early May. Limited
                        inventory of various models may be available at select dealers.
                    </p>
                    <p className="my-2 text-sm max-md:text-xs">*  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore est recusandae deserunt!
                        Numquam recusandae quidem id incidunt illo iure quo rem molestias, quos esse provident vel libero
                        ex aliquid soluta dolores iste odit! Laudantium soluta blanditiis saepe accusamus! Unde totam id
                        sint perspiciatis impedit quos quas, qui, voluptate ullam a tempora cumque veniam assumenda excepturi
                        optio iste! Vel, atque perspiciatis cumque aspernatur recusandae fugit quidem, sint quia odio minus distinctio.
                        Commodi, nostrum voluptatibus. Excepturi voluptas qui, vitae aliquam eveniet deleniti, error beatae
                        voluptatum aperiam temporibus ipsa perspiciatis. Quos voluptatum ut itaque quo sunt ullam.
                        Neque incidunt autem dolores adipisci. *
                    </p>
                </section>
            </article>

            <article className="w-full  bg-blue-900 my-24 text-white text-center p-2 flex flex-col items-center shadow-lg shadow-slate-400">
                <p className="p-4 text-lg max-sm:text-base">If you like Ford Mustang Mach-E you can sign up for online notifications and promotions. That way can be one of the first informed. Sign up here!</p>
                <Link to='/get-notifications' className="text-xl border-2 p-2 block w-72 rounded-xl bg-white hover:bg-blue-500 text-black font-semibold max-sm:text-lg max-sm:w-52">Get notifications! <i className="fa-regular fa-envelope fa-shake"></i></Link>
            </article>

            <article className="flex flex-col items-center w-full">
                <h2 className="font-semibold text-4xl text-blue-900 my-3 max-lg:text-3xl max-lg:text-center">Take Charge of Your Life</h2>
                <p className="max-w-lg text-center font-semibold p-3">Goodbye gas. Hello freedom. The high-performance all-electric Mustang Mach-E SUV gives you 0-60 thrills, expansive range and zero emissions</p>
                <section className="relative">
                    <div className="absolute bottom-36 left-28 max-xl:left-8 max-xl:bottom-32 max-md:bottom-20 max-sm:left-4">
                        <PlayButton url={"https://www.youtube.com/embed/7RqwBtNUKs0"} />
                    </div>
                    <img className=" shadow-md shadow-slate-500" src="/images/25.jpg" alt="mustang" />
                </section>
            </article>

            <article className="flex flex-col my-24 items-center">
                <h1 className="font-semibold text-4xl text-center text-blue-900 my-3 p-4 max-lg:text-3xl">Roam Far and Wide on a Single Charge</h1>
                <p className="text-center max-w-3xl text-base m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, cupiditate quam. Libero veniam nihil distinctio blanditiis facilis magnam id, et eligendi asperiores fugit eum obcaecati laborum perspiciatis in consectetur vitae?</p>
                <div className="w-full relative">
                    <img className="w-full max-h-96 object-cover shadow-md shadow-slate-500" src="/images/4w.webp" alt="Charge" />
                    <div className="absolute bottom-36 right-40 max-lg:bottom-28 max-lg:right-28 max-md:bottom-20 max-md:right-20">
                        <PlayButton url={"https://www.youtube.com/embed/aZqgutxMjpM"} />
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Home;