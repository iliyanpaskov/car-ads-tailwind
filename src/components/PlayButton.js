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
            <div className="absolute bg-yellow-400 animate-pulse rounded-full p-2 hover:animate-none hover:bg-blue-500 max-md:p-1">
                <i onClick={showModal} className="fa-regular fa-circle-play bg-orange-700 text-7xl p-1 rounded-full text-white cursor-pointer hover:bg-green-500 max-md:text-5xl"></i>
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