export const Footer = () => {
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 text-white md:absolute md:inset-x-0 md:bottom-0 w-full mx-auto'>
            <div className="bitcoin motion-safe:animate-pulse cursor-pointer">
                <a href="https://buddylasta.com/#donate" target="_blank" rel="noreferrer">
                    <ion-icon size="large" name="logo-bitcoin"></ion-icon>
                </a>
            </div>
            <div className="flex justify-between items-center gap-8">
                <div className="youtube cursor-pointer ">
                    <a href="https://www.youtube.com/watch?v=pe8AFhpSXv0" target="_blank" rel="noreferrer">
                        <ion-icon size="large" name="logo-youtube"></ion-icon>
                    </a>
                </div>
                <div className="twitter cursor-pointer ">
                    <a href="https://twitter.com/buddylasta" target="_blank" rel="noreferrer">
                        <ion-icon size="large" name="logo-twitter"></ion-icon>
                    </a>
                </div>
                <div className="github cursor-pointer ">
                    <a href="https://github.com/buddylasta/no-more-mediocre" target="_blank" rel="noreferrer">
                        <ion-icon size="large" name="logo-github"></ion-icon>
                    </a>
                </div>
            </div>
        </div>

    );
  };
