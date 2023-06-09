const PhotoModal = ({ open, onClose, picture }) => {
    if (!open) {
        return null;
    }

    return (
        <section onClick={onClose} className="fixed w-full h-full top-0 left-0 bg-gray-500/60 ">
            <article className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7/12 max-h-[30rem] shadow-lg shadow-slate-500 flex max-lg:w-9/12 max-md:w-10/12 max-sm:w-11/12">
                <i onClick={onClose} className="fa-regular fa-circle-xmark cursor-pointer absolute top-2 right-4 text-white text-xl"></i>
                <img className="w-full object-cover " src={`${picture}`} alt="car" />
            </article>
        </section>
    )
}

export default PhotoModal;