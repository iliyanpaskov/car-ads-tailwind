import { useState } from "react";
import VideoModal from "./VideoModal";

const PlayButton = (url) => {
    const [openModal, setOpenModal] = useState(false);

    const closeHandler = () => {
        setOpenModal(false);
    }

    const showModal = () => {
        setOpenModal(true);
    }

    return (
        <>
            <div className="absolute bg-yellow-400 animate-pulse rounded-full p-2 bottom-8 left-28">
                <i onClick={showModal} className="fa-regular fa-circle-play bg-orange-700 text-7xl p-1 rounded-full text-white cursor-pointer"></i>
            </div>
            <VideoModal
                open={openModal}
                videoUrl={url.url}
                onClose={() => closeHandler()}
            />
        </>
    )
}

export default PlayButton;