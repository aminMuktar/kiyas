import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'

import {
    // ArrowPathIcon,
    Bars3Icon,
    // BookmarkSquareIcon,
    // CalendarIcon,
    // ChartBarIcon,
    ChatBubbleLeftEllipsisIcon,
    // CursorArrowRaysIcon,
    PaintBrushIcon,
    // LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    // Squares2X2Icon,
    VideoCameraIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import Logo from "../assets/logo-World.png";

const services = [
    {
        name: 'Communication',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '/services',
        icon: ChatBubbleLeftEllipsisIcon,
    },
    {
        name: 'Graphics Design',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '/services',
        icon: PaintBrushIcon,
    },
    {
        name: 'Production',
        description: "Plan your content on one place.",
        href: '/services',
        icon: VideoCameraIcon,
    },

]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: '+251 961280128', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    return (
        <Popover className="bg-white/80 backdrop-blur sticky top-0 z-50 border-b border-gray-200">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <NavLink to="/">
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </NavLink>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-black">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                        </Popover.Button>
                    </div>

                    <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                        <NavLink to="/" className="text-base font-medium text-gray-500 hover:text-blue-500">
                            Home
                        </NavLink>
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-blue-500' : 'text-gray-500',
                                            'group inline-flex items-center text-base font-medium hover:text-blue-500'
                                        )}
                                    >
                                        <span>Services</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {services.map((item) => (
                                                        <NavLink
                                                            key={item.name}
                                                            to={item.href}
                                                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                        >
                                                            <item.icon className="h-6 w-6 flex-shrink-0 text-black" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </NavLink>
                                                    ))}
                                                </div>
                                                <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                    {callsToAction.map((item) => (
                                                        <div key={item.name} className="flow-root">
                                                            <NavLink
                                                                // href={item.href}
                                                                to={item.href}
                                                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100 active:bg-violet-700"
                                                            >
                                                                <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                                <span className="ml-3">{item.name}</span>
                                                            </NavLink>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        <NavLink to="/works" className="text-base font-medium text-gray-500 hover:text-blue-500">
                            Works
                        </NavLink>
                        <NavLink to="/about" className="text-base font-medium text-gray-500 hover:text-blue-500">
                            About
                        </NavLink>
                    </Popover.Group>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">

                        <button
                            type="button"
                            className=" inline-flex items-center bg-red-500 justify-center whitespace-nowrap rounded-3xl px-8 py-3 text-white text-base font-medium shadow-sm hover:scale-110 duration-300"
                        >
                            Contact us
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black hover:bg-gray-100 hover:text-gray-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {services.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.href}
                                            // href={item.href}
                                            className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                        >
                                            <item.icon className="h-6 w-6 flex-shrink-0 text-black" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </NavLink>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="space-y-6 py-6 px-5">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <NavLink to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Home
                                </NavLink>
                                <NavLink to="/works" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Works
                                </NavLink>
                                <NavLink to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Teams
                                </NavLink>
                                <NavLink to="/about" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    About
                                </NavLink>

                            </div>
                            <div>
                                <NavLink
                                    to="/contact"
                                    className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-orange-500 via-orage-700 to-pink-500 px-4 py-2 text-base font-medium text-white shadow-sm"
                                >
                                    Contact Sales
                                </NavLink>

                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}