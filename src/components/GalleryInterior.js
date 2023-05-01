import { useImagesFetch } from "../hooks/useImagesFetch";
import ImageCard from "./ImageCard";
import Loading from "./Loading";
const url = `${process.env.REACT_APP_INTERIOR_IMAGES_URL}`;

const GalleryInterior = () => {
    const [images, isLoaded] = useImagesFetch(url);

    return (
        <section className="w-full my-16 flex flex-col items-center">
            <h1 className="capitalize font-semibold text-4xl text-blue-900 my-6">comfort and safety</h1>
            <div className="w-full ">
                <img className="w-full h-96 object-cover" src="/images/10.jpg" alt="ford" />
            </div>

            <article className="my-11 grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
                {isLoaded
                    ? images[0].map(x => <ImageCard key={x.objectId} image={x.images.url} />)
                    : <Loading/>}
            </article>
        </section>
    )
}

export default GalleryInterior;