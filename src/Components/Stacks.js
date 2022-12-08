import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

export default function Stacks() {

    return (
        <section className="py-20 sm:py-16">
            <div className="text-center px-8">
                <h2 className="text-slate-600 text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Crush your social goals.
                </h2>
                <p className="text-slate-600 pb-8 col-start-1 row-start-3 mt-6 max-w-3xl mx-auto text-lg">
                    Pick the Later plan that works for you (and your biz) and watch the likes – and the sales – roll in. Available on Instagram, Facebook, Twitter, Pinterest, LinkedIn, and TikTok.
                </p>
                <Link href="" type="button" className="text-white bg-red-500 rounded-3xl text-base px-8 py-3 text-center inline-flex items-center mr-2 mb-2 hover:scale-110 duration-300">
                    Start my free trial
                    <ArrowLongRightIcon className="pl-2 h-6 w-6" />
                </Link>
            </div>
        </section>
    )
}