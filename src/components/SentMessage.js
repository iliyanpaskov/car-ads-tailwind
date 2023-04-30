const SentMessage = ({ open }) => {
    if (!open) {
        return null;
    }

    return (
        <section className="fixed w-full h-full top-0 left-0 bg-gray-500/60 ">
            <article className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-96 bg-blue-900 shadow-lg shadow-slate-500 flex items-center rounded-xl">
                <div className="text-center text-white flex flex-col items-center m-auto text-xl capitalize">
                    <p>You are signed up!</p>
                    <p>Thank you!</p>
                    <i className="fa-regular fa-circle-check cursor-pointer  text-green-500 text-5xl p-5"></i>
                </div>
            </article>
        </section>
    )
}

export default SentMessage;