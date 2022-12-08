import Footer from "../Components/Footer.js";
import Navbar from "../Components/Navbar.js";


export default function Services() {
    return (
        <div>
            <Navbar />
            <section className="text-center py-12 px-16">
                <div class="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-sky-500" aria-hidden="true">
                    By the makers of Tailwind CSS
                </div>
                <h2 class="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-7xl">
                    What we do.
                </h2>
                <div className="py-6 bg-white w-full ">
                    <div className="flex flex-col lg:flex-row justify-center border-t border-gray-300 mx-44">
                        <div className="m-6 w-full lg:w-1/2 flex flex-col">
                            <h2 className="text-slate-90 text-4xl font-extrabold">Communication</h2>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden font-medium text-sky-500 text-base m-6">
                            <ul className="list-none text-left">
                                <li className="">Communication strategy development</li>
                                <li className="">Communication programmes implementation</li>
                                <li className="">Event communication</li>
                                <li className="">Campaign development</li>
                                <li className="">Communication audit</li>
                                <li className="">Advisory service</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-6 bg-white w-full">
                    <div className="flex flex-col lg:flex-row justify-center border-t border-gray-300 mx-44">
                        <div className="m-6 w-full lg:w-1/2 flex flex-col">
                            <h2 className="text-slate-90 text-4xl font-extrabold">Graphics Design</h2>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden font-medium text-sky-500 text-base m-6">
                            <ul className="text-left">
                                <li className="">Corporate identity </li>
                                <li className="">Publications</li>
                                <li className="">Infographics</li>
                                <li className="">Web and social media posts</li>
                                <li className="">Promotional items </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-6 bg-white w-full ">
                    <div className="flex flex-col lg:flex-row justify-center border-t border-gray-300 mx-44">
                        <div className="m-6 w-full lg:w-1/2 flex flex-col">
                            <h2 className="text-slate-90 text-4xl font-extrabold">Production</h2>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden font-medium text-sky-500 text-base m-6">
                            <ul className="list-none text-left">
                                <li className="">Photo and videography services for Products and services, Corporate events & Impact story and testimonies</li>
                                <li className="">Communication programmes implementation</li>
                                <li className="">Production management  </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}