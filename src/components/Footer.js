export const Footer = () => {
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 text-white md:absolute md:inset-x-0 md:bottom-0 w-full mx-auto'>
            <div className="bitcoin motion-safe:animate-pulse cursor-pointer">
                <ion-icon size="large" name="logo-bitcoin"></ion-icon>
            </div>
            <div className="flex justify-between items-center gap-8">
                <div className="youtube cursor-pointer ">
                    <ion-icon size="large" name="logo-youtube"></ion-icon>
                </div>
                <div className="twitter cursor-pointer ">
                    <ion-icon size="large" name="logo-twitter"></ion-icon>
                </div>
                <div className="github cursor-pointer ">
                    <ion-icon size="large" name="logo-github"></ion-icon>
                </div>
            </div>
        </div>

    );
  };
