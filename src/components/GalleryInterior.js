import { useImagesFetch } from "../hooks/useImagesFetch";
import ImageCard from "./ImageCard";
const url = `${process.env.REACT_APP_INTERIOR_IMAGES_URL}`;

const GalleryInterior = () => {
    const [images, isLoaded] = useImagesFetch(url);

    return (
        <section className="w-full my-16 flex flex-col items-center">
            <h1 className="capitalize font-semibold text-4xl text-blue-900 my-6">comfort and safety</h1>
            <div className="w-full ">
                <img className="w-full h-96 object-cover" src="/images/10.jpg" alt="" />
            </div>

            <article>
                {isLoaded
                    ? images[0].map(x => <ImageCard key={x.objectId} image={x.images.url} />)
                    : <></>}
            </article>
        </section>
    )
}

export default GalleryInterior;