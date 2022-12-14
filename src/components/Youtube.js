const YoutubeEmbed = ({ url }) => (
    <div className="shadow-sm shadow-[#bd8b46] border-solid border-2 border-[#bd8b46] rounded-lg m-5 transform transition duration-500 hover:scale-105 cursor-pointer">
        {/* enable privacy-enhacede mode with youtube-nocookie.com */}
        <iframe
            width={560}
            height={315}
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