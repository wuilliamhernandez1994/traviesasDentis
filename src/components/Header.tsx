import { useState } from "react";
import { Link } from "react-router-dom"; // Agrega esta línea
import type { HeaderProps } from "../interfaces";

export const Header = ({ logo, navOptions }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md p-4">
            <div className="container mx-auto flex items-center justify-between flex-wrap">
                {/* Logo Section */}
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
                    <Link
                        to="/"
                        className="flex items-center flex-shrink-0 text-gray-800 mr-6"
                    >
                        {logo ? (
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-12 w-auto"
                            />
                        ) : null}
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-white"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>

                {/* Navigation links */}
                <nav
                    className={`
        w-full flex-grow lg:flex lg:items-center lg:w-auto
        transition-all duration-500 ease-in-out overflow-hidden
        ${
            isMenuOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100"
        }
    `}
                >
                    <div className="text-md lg:flex-grow lg:flex lg:justify-center items-end gap-10">
                        {navOptions.map((option, idx) => (
                            <Link
                                key={idx}
                                to={option.href}
                                className={
                                    "flex flex-col items-end py-2 mt-4 lg:mt-0 transition duration-300 ease-in-out text-[16px] font-bold text-[#60656c] hover:text-gray-800"
                                }
                            >
                                {option.anotation && (
                                    <span className="text-xs font-bold bg-[#C6106F] text-white w-fit px-2 rounded-2xl">
                                        {option.anotation}
                                    </span>
                                )}
                                {option.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
};
