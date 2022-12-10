const YoutubeEmbed = ({ embedId }) => (
    <div className="shadow-sm shadow-[#bd8b46] border-solid border-2 border-[#bd8b46] rounded-lg m-5 transform transition duration-500 hover:scale-105 cursor-pointer">
        {/* enable privacy-enhacede mode with youtube-nocookie.com */}
        <iframe
            width={560}
            height={315}
            loading="lazy"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Youtube video player"
        />
    </div>
);

export default YoutubeEmbed