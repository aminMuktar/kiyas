import { Link } from 'react-router-dom'
import {
    ChatBubbleLeftEllipsisIcon,
    PaintBrushIcon,
    VideoCameraIcon,
} from '@heroicons/react/24/outline'

export default function ServiceList() {
    return (
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
            <h1 className="text-slate-700 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">Turn your ideas into engaging products</h1>
            <p className="mt-6 p-2 text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                A utility-first CSS framework packed with classes like
                <code className="font-mono font-medium text-sky-500 dark:text-sky-400">flex</code>
                <code className="font-mono font-medium text-sky-500 dark:text-sky-400">pt-4</code>
                <code class="font-mono font-medium text-sky-500 dark:text-sky-400">text-center</code>
                and <code className="font-mono font-medium text-sky-500 dark:text-sky-400">rotate-90</code>
                that can be composed to build any design, directly in your markup.
            </p>
            <h1 className="pt-10 md:pt-16 lg:pt-16 text-slate-700 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">Services</h1>
            <div className="flex flex-col py-8 px-2 items-center lg:flex-row justify-center">
                <div className="m-5 p-8 border bg-white drop-shadow-xl rounded-lg">
                    <div className="flex justify-start space-x-4">
                        <ChatBubbleLeftEllipsisIcon className='h-8 w-8' />
                        <div>
                            <h2 className='font-bold text-lg'>Communication</h2>
                        </div>
                    </div>
                    <p className='mt-4 font-bold text-2xl leading-tight'>
                        What is Communication?
                    </p>
                    <p className='mt-4 text-sm opacity-70'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>

                </div>
                <div className="m-5 p-8 border drop-shadow-xl rounded-lg bg-white">
                    <div className="flex justify-start space-x-4">
                        <PaintBrushIcon className='h-8 w-8' />
                        <div>
                            <h2 className='font-bold text-lg'>Graphics Design</h2>
                        </div>
                    </div>
                    <p className='mt-4 font-bold text-2xl leading-tight'>
                        What is Graphics Design?
                    </p>
                    <p className='mt-4 text-sm opacity-70'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>

                </div>

                <div className="m-5 p-8 border drop-shadow-xl rounded-lg bg-white">
                    <div className="flex justify-start space-x-4">
                        <VideoCameraIcon className='h-8 w-8' />
                        <div>
                            <h2 className='font-bold text-lg'>Production</h2>
                        </div>
                    </div>
                    <p className='mt-4 font-bold text-2xl leading-tight'>
                        What is Production?
                    </p>
                    <p className='mt-4 text-sm opacity-70'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>

                </div>
            </div>
        </div>
    );
}
