import Gallery from "../Components/Gallery.js";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


export default function Works() {
    return (
        <div>
            <Navbar />
            <section className="py-10 sm:py-24">
                <div className="text-center px-8">
                    <h2 className="text-slate-700 text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Our Work
                    </h2>
                    <p className="col-start-1 row-start-3 mt-6 max-w-3xl mx-auto text-xl">
                        Check out some of the latest creation we did for our customers.
                    </p>
                </div>
            </section>
            <Gallery />
            <section className="py-36 sm:py-24">
                <div className="text-center px-8">
                    <h2 className="py-2 text-slate-600 text-4xl font-extrabold tracking-tight sm:text-5xl">
                        See how great design comes to life.
                    </h2>
                    <h2 className="py-5 text-slate-600 text-2xl font-extrabold tracking-tight sm:text-2xl">
                        Check out One-world in action!
                    </h2>

                    <Link to="" type="button" className="bg-yellow-500 font-bold border-none text-base px-8 py-3 text-center inline-flex items-center mr-2 mb-2 hover:scale-110 duration-300">
                        book a call
                        <ArrowLongRightIcon className="pl-2 h-6 w-6" />
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
}