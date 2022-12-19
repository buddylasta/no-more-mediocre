const YoutubeEmbed = ({ url }) => (
    <div className="relative pt-[50%] transform transition duration-500 hover:scale-105 cursor-pointer">
        {/* enable privacy-enhacede mode with youtube-nocookie.com */}
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

//<div className="relative" style="padding-top: 56.25%"
   //<iframe className="absolute inset-0 w-full h-full"

export default YoutubeEmbed