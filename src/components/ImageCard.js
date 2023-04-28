const ImageCard = (image) => {

    return (
        <section className="w-80">
            <img className="w-full max-h-40 object-cover cursor-pointer hover:scale-110 duration-500" src={`${image.image}`} alt="car-image" />
        </section>
    )
}

export default ImageCard;