const YoutubeEmbed = ({ id }) => (
    <div className="relative pt-[56.25%] transform transition duration-500 hover:scale-105 cursor-pointer">
        <iframe
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            frameBorder={0}
            allowFullScreen
            title="Youtube video player"
        />
    </div>
);

export default YoutubeEmbed