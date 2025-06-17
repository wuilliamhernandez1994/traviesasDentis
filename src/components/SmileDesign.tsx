import { Check } from "lucide-react";
import { smileDesignData } from "../data";

export const SmileDesign = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-2xl md:text-3xl font-light text-pink-400 mb-6">
                        Smile Design in Just Two Visits?
                    </h1>
                    <p className="text-gray-600 text-base font-medium max-w-6xl mx-auto text-start">
                        Yes! With the CG Smile Makeover, it’s entirely possible
                        to have a completely new smile in just two visits. We
                        have a master ceramist on staff and use state-of-the-art
                        technology to ensure the process is not only quick, but
                        also delivers stunning results.
                    </p>
                </div>

                <div className="flex gap-12 mt-4 justify-center">
                    {/* Left Column - Main Design */}
                    <div className="text-center lg:text-right w-1/2">
                        <div className="mb-6">
                            <p className="text-pink-500 text-xl lg:text-2xl font-light tracking-[0.3em] uppercase text-center">
                                PORCELAIN VENEERS
                            </p>
                            <div className="text-3xl lg:text-9xl font-bold text-gray-400 leading-none tracking-wider text-center">
                                SMILE
                            </div>
                            <div className="text-3xl lg:text-8xl font-light text-gray-400 leading-none tracking-widest mt-2 text-center">
                                DESIGN
                            </div>
                        </div>

                        <div className="block bg-pink-500 text-white px-8 py-4 rounded-full text-2xl lg:text-5xl font-normal tracking-wider mb-8 w-10/12 text-center mx-auto">
                            SAME
                            <p className="inline-block font-bold ml-2.5">DAY</p>
                        </div>
                        <p className="text-base font-normal text-center mb-8">
                            For the{" "}
                            <span className="font-semibold">
                                1-DAY (Only 1 Visit) concierge experience,
                            </span>{" "}
                            the process will require a full day starting at 8:00
                            AM until 10:00 AM the following day - Individuals
                            flying from out of town must set departure for the
                            next day afternoon to be safe.{" "}
                            <span className="font-semibold">
                                Price: $9,999 and financing from $243/Month
                            </span>
                        </p>
                        <div className="shadow-lg p-12 rounded-2xl flex flex-col justify-between w-full">
                            <div className="text-center pb-4">
                                <div className="text-[#d6136c] text-2xl font-light">
                                    {smileDesignData.pricingCards[0].title}
                                </div>

                                <p className="text-[#d6136c] text-base font-bold mt-2">
                                    {
                                        smileDesignData.pricingCards[0]
                                            .description
                                    }
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="mb-4">
                                    <span className="font-bold text-[#6c757d] text-4xl line-through">
                                        {smileDesignData.pricingCards[0].price}
                                    </span>
                                    <span className="text-[#6c757d] text-4xl">
                                        {
                                            smileDesignData.pricingCards[0]
                                                .priceUnit
                                        }
                                    </span>
                                </div>
                                <div className="w-16 h-1.5 rounded-full bg-[#d6136c] mx-auto mb-6"></div>
                                <div className="mb-4">
                                    <span className="block text-base font-bold text-[#d6136c] mb-4">
                                        {
                                            smileDesignData.pricingCards[0]
                                                .features?.[0]?.text
                                        }
                                    </span>
                                    <span className="block text-[#d6136c] text-4xl">
                                        {
                                            smileDesignData.pricingCards[0]
                                                .features?.[0]?.detailedInfo
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-lg p-12 rounded-2xl flex flex-col justify-between w-full md:w-5/12 h-fit">
                        <div className="text-center pb-4">
                            <div className="text-[#d6136c] text-base font-bold mt-2">
                                {smileDesignData.pricingCards[1].title}
                            </div>

                            <p className="text-gray-600 text-base font-medium mt-2">
                                {smileDesignData.pricingCards[1].description}
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-4">
                                <span className="font-bold text-pink-500 text-4xl">
                                    {smileDesignData.pricingCards[1].price}
                                </span>
                                <span className="text-gray-600 text-4xl">
                                    {smileDesignData.pricingCards[1].priceUnit}
                                </span>
                            </div>
                            <div className="w-16 h-1.5 rounded-full bg-[#d6136c] mx-auto mb-6"></div>

                            {smileDesignData.pricingCards[1].features &&
                                smileDesignData.pricingCards[1].features
                                    .length > 0 &&
                                smileDesignData.pricingCards[1].features.map(
                                    (feature, index) => (
                                        <>
                                            <div className="flex justify-start items-center text-start mb-4">
                                                <Check className="w-4 h-4 text-[#d6136]" />

                                                <span
                                                    className={`text-sm flex-1 ml-2 ${
                                                        feature.isInfoLink
                                                            ? "text-gray-600 underline"
                                                            : "text-gray-700"
                                                    }`}
                                                >
                                                    {feature.text}
                                                </span>
                                            </div>
                                            {index === 2 && (
                                                <span className="block text-[#d6136c] text-2xl font-light text-start mb-3">
                                                    Includes:
                                                </span>
                                            )}
                                        </>
                                    )
                                )}
                        </div>
                        {smileDesignData.pricingCards[1].buttons &&
                            smileDesignData.pricingCards[1].buttons.length >
                                0 && (
                                <div
                                    className={`flex pt-6 ${
                                        smileDesignData.pricingCards[1].buttons
                                            .length > 1
                                            ? "gap-2 justify-center flex-col md:flex-row items-center"
                                            : "justify-center"
                                    }`}
                                >
                                    {smileDesignData.pricingCards[1].buttons.map(
                                        (button, index) =>
                                            button.isPrimary ? (
                                                <button
                                                    key={index}
                                                    className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm"
                                                    onClick={button.onClick}
                                                >
                                                    {button.text}
                                                </button>
                                            ) : (
                                                <button
                                                    key={index}
                                                    className="border-gray-400 text-gray-600 px-4 py-2 rounded-full text-sm"
                                                    onClick={button.onClick}
                                                >
                                                    {button.text}
                                                </button>
                                            )
                                    )}
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};
