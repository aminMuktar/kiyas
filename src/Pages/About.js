// import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar.js"
import Footer from "../Components/Footer.js"
import Communication from "../assets/comm.mp4";
// import { PlayIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
// import ProductionA from "../assets/productionA.jpg"

export default function About() {

    return (
        <div>
            <Navbar />
            <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
                <div className="w-full h-screen">
                    <div className="absolute left-0 w-full h-full bg-black bg-opacity-60"></div>
                    <video className="w-full h-full object-cover" src={Communication} autoPlay loop muted />
                    <div className="absolute w-full h-full top-0 flex flex-cols justify-center items-center">
                        <section className="py-20 sm:py-16">
                            <div className="text-center px-8">
                                <h1 class="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight sm:text-5xl xl:max-w-[43.5rem] block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orage-700 to-pink-500">
                                    Focus on what you do best.
                                </h1>
                                <h1 class="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight sm:text-3xl xl:max-w-[43.5rem] block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orage-700 to-pink-500">
                                    Leave your designs to us.
                                </h1>
                                <Link href="" type="button" className="font-bold uppercase mt-6 bg-yellow-500 border-none text-base px-8 py-3 text-center inline-flex items-center mr-2 mb-2 hover:scale-110 duration-300">
                                    Watch video
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="p-8 sm:pt-10 lg:pt-30 w-full flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <div className="p-5 flex flex-col justify-center bg-white items-center lg:items-start text-center lg:text-left">
                            <h1 class="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight sm:text-5xl xl:max-w-[43.5rem]">
                                How can we help?
                            </h1>
                            <p class="col-start-1 row-start-3 mt-4 max-w-lg text-lg">
                                In this continuously growing, diversifying and complex world, your stakeholders
                                want to know why they should make you their choice. They also want to know who
                                you are, how you work, and what values and goals you are committed to.
                                It is therefore essential that you create a distinctive and uniform image for yourself,
                                one which is unmistakable and instantly recognizable. Please check out our <Link to="/services" className="font-mono font-medium text-sky-500 dark:text-sky-400">services</Link> and
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row items-center">
                                <Link to="" type="button" className="text-white bg-red-500 rounded-3xl text-base px-8 py-3 text-center inline-flex items-center mr-2 mb-2 hover:scale-110 duration-300">
                                    let's talk!
                                    <ArrowLongRightIcon className="pl-2 h-6 w-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 w-full lg:w-1/2 flex flex-col justify-center border rounded-xl drop-shadow-xl bg-white items-center overflow-hidden">
                        <p class="col-start-1 row-start-3 mt-4 max-w-lg text-lg">
                            <span className="font-black">That is why</span> we want to be your non-slip companion on the mirror-smooth parquet of communications.
                            We offer a comprehensive specialist knowledge on different aspects of communications,
                            react quickly and flexibly to your concerns, and find a tailor-made solution together
                            with you!
                        </p>
                    </div>
                </div>

                <section className="py-24 sm:py-18">
                    <div className="text-center">
                        <section className="py-12 sm:py-12">
                            <div className="text-center px-8">
                                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                                    Have a project. Let's connect
                                </h2>
                                <Link href="" type="button" className="font-bold uppercase mt-6 bg-yellow-500 border-none text-base px-8 py-3 text-center inline-flex items-center mr-2 mb-2 hover:scale-110 duration-300">
                                    Contact us
                                </Link>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}
