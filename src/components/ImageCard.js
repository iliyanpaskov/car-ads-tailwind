import { useState } from "react";
import PhotoModal from "./PhotoModal";

const ImageCard = (image) => {
    const [openModal, setOpenModal] = useState(false);
    const picture = image.image;

    const closeHandler = () => {
        setOpenModal(false);
    }

    const showModal = () => {
        setOpenModal(true);
    }

    return (
        <>
            <section className="w-80 max-xl:w-96 max-lg:w-80 max-md:w-64 max-sm:w-full">
                <img onClick={showModal} className="w-full max-h-44 object-cover cursor-pointer hover:scale-110 duration-500 shadow-md shadow-slate-500 rounded-sm max-md:max-h-32 max-md:justify-center" src={`${picture}`} alt="car" />
            </section>
            <PhotoModal
                open={openModal}
                picture={picture}
                onClose={() => closeHandler()}
            />
        </>
    )
}

export default ImageCard;