const VideoModal = ({open,onClose, videoUrl}) => {
    if (!open) {
        return null;
    }

    return (
        <section onClick={onClose} className="fixed w-full h-full top-0 left-0 bg-gray-500/60 ">
            <article className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6/12 max-h-[33rem] shadow-lg shadow-slate-500 flex max-lg:w-5/12 max-md:w-9/12 max-sm:w-11/12">
                <i onClick={onClose} className="fa-regular fa-circle-xmark cursor-pointer absolute top-2 right-4 text-white text-xl max-lg:top-1 max-lg:right-2 "></i>
                <iframe className="w-full h-[26rem] max-xl:h-96 max-lg:h-80 max-sm:h-72" src={videoUrl} title="Mustang Mach E GT | Car Review Mustang Mach E GT" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </article>
        </section>
    )
}

export default VideoModal;