const YoutubeEmbed = ({ url }) => (
    <div className="relative pt-[45%] transform transition duration-500 hover:scale-105 cursor-pointer">
        <iframe
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            src={url}
            frameBorder={0}
            allowFullScreen
            title="Youtube video player"
        />
    </div>
);

export default YoutubeEmbed