import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import HeroImage from "../assets/Hero2.png"
export default function Hero() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
            <div className="pt-10 sm:pt-10 lg:pt-30 w-full flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        <h1 class="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight sm:text-7xl xl:max-w-[43.5rem]">
                            Build your next idea even
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orage-700 to-pink-500"> faster.</span>
                        </h1>
                        <p class="col-start-1 row-start-3 mt-4 max-w-lg text-lg text-slate-700">Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.</p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center">
                            <Link to="" type="button" className="text-white bg-red-500 rounded-3xl text-base px-8 py-3 text-center inline-flex items-center mr-2 mb-2 hover:scale-110 duration-300">
                                Work with us
                                <ArrowLongRightIcon className="pl-2 h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
                    <img src={HeroImage} alt="" className="w-2/3 lg:w-full" />
                </div>
            </div>
        </div>
    )
}
