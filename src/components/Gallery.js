import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <section className="flex flex-col items-center my-10">
            <h1 className="font-semibold text-5xl text-blue-900 my-10">Gallery</h1>
            <section className="flex w-full justify-around">
                <article className="w-5/12 shadow-lg shadow-slate-400">
                    <div className="w-full ">
                        <img className="w-full h-72 object-cover" src="/images/15.jpg" alt="exterior" />
                    </div>
                    <article className="flex flex-col items-center p-4 text-center">
                        <h2 className="font-semibold text-xl text-blue-900 my-2">Exterior</h2>
                        <p>
                            * Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus nobis
                            culpa voluptatem, cumque expedita doloribus? Cumque reprehenderit maiores quasi!
                            Quam debitis numquam excepturi ipsum, accusamus nihil eum quod. Minima.
                        </p>
                        <Link to='/gallery/exterior' className=" bg-blue-900 m-7 px-7 py-1 rounded text-white text-lg font-semibold hover:bg-blue-500 hover:animate-pulse hover:text-black shadow-lg shadow-slate-500 capitalize">see Exterior photography</Link>
                    </article>
                </article>

                <article className="w-5/12 shadow-lg shadow-slate-400">
                    <div className="w-full ">
                        <img className="w-full h-72 object-cover" src="/images/5.jpg" alt="interior" />
                    </div>
                    <article className="flex flex-col items-center p-4 text-center">
                        <h2 className="font-semibold text-xl text-blue-900 my-2">Interior</h2>
                        <p>
                            * Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus nobis
                            culpa voluptatem, cumque expedita doloribus? Cumque reprehenderit maiores quasi!
                            Quam debitis numquam excepturi ipsum, accusamus nihil eum quod. Minima.
                        </p>
                        <Link to='/gallery/interior' className=" bg-blue-900 m-7 px-7 py-1 rounded text-white text-lg font-semibold hover:bg-blue-500 hover:animate-pulse hover:text-black shadow-lg shadow-slate-500 capitalize">See Interior photography</Link>
                    </article>
                </article>
            </section>
        </section>
    )
}

export default Gallery;