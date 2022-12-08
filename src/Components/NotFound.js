import NotFoundImage from "../assets/404.png"
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <Navbar />
            <div className="w-full h-full flex my-36 lg:my-24 flex-col justify-center items-center overflow-hidden">
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
                    <img src={NotFoundImage} alt="" className="w-2/3 lg:w-full" />
                </div>
                <Link
                    to="/"
                    className=" inline-flex items-center bg-red-500 justify-center whitespace-nowrap rounded-3xl px-8 py-3 text-white text-base font-medium shadow-sm hover:scale-110 duration-300"
                >
                    Go back home
                </Link>
            </div>
            <Footer />
        </div>
    );
}