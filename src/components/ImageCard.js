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
            <section className="w-80">
                <img onClick={showModal} className="w-full max-h-44 object-cover cursor-pointer hover:scale-110 duration-500 shadow-md shadow-slate-500 rounded-sm" src={`${picture}`} alt="car" />
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