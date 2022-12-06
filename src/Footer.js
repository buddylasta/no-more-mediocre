export const Footer = () => {
    return (
        <footer>
            <div id="footer" className="flex flex-row items-center absolute bottom-0 justify-between shadow-md w-full text-white py-4 md:px-10 px-7 gap-x-10">
                <a href="https://buddylasta.com/#donate" className="cursor-pointer"><ion-icon name="logo-bitcoin" className="cursor-pointer" size="large"></ion-icon></a>
                <ul className="flex flex-row justify-between gap-x-6" >
                    <a href="https://buddylasta.com/#donate" className="cursor-pointer"><ion-icon name="logo-github" size="large"></ion-icon></a>
                    <a href="https://buddylasta.com/#donate" className="cursor-pointer"><ion-icon name="logo-twitter" size="large"></ion-icon></a>
                    <a href="https://buddylasta.com/#donate" className="cursor-pointer"><ion-icon name="logo-linkedin" size="large"></ion-icon></a>
                </ul>
            </div>
        </footer>
    );
};
