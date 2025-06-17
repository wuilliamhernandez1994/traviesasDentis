import { Check, Info } from "lucide-react";
import type { PricingCardProps } from "../interfaces";
import { useState } from "react";

export function PricingCard({
    title,
    description,
    price,
    priceUnit,
    isFeatured = false,
    features,
    buttons,
}: PricingCardProps) {
    const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

    const toggleFeature = (index: number) => {
        setExpandedFeature(expandedFeature === index ? null : index);
    };
    return (
        <div
            className={`shadow-lg p-12 rounded-2xl flex flex-col justify-between w-full md:w-5/12 min-h-[440px]
                ${isFeatured ? "mx-auto min-h-[540px]" : ""}`}
        >
            <div className="text-center pb-4">
                <div className="text-pink-500 text-3xl font-bold">{title}</div>
                {description && (
                    <p className="text-gray-600 text-base font-medium mt-2">
                        {description}
                    </p>
                )}
            </div>
            <div className="text-center">
                <div className="mb-4">
                    <span className="font-bold text-pink-500 text-4xl">
                        {price}
                    </span>
                    <span className="text-gray-600 text-4xl">{priceUnit}</span>
                </div>
                <div className="w-16 h-1.5 rounded-full bg-[#d6136c] mx-auto mb-6"></div>

                {features && (
                    <div className="space-y-3 mb-6 text-left">
                        {features.map((feature, index) => (
                            <div key={index}>
                                <div
                                    className={`flex items-center gap-2 ${
                                        feature.isInfoLink
                                            ? "cursor-pointer"
                                            : ""
                                    }`}
                                    onClick={
                                        feature.isInfoLink
                                            ? () => toggleFeature(index)
                                            : undefined
                                    }
                                >
                                    {feature.isIncluded && (
                                        <Check className="w-4 h-4 text-[#d6136]" />
                                    )}
                                    {feature.isInfoLink && (
                                        <>
                                            <Info className="w-4 h-4 text-[#d6136]" />
                                        </>
                                    )}
                                    <span
                                        className={`text-sm flex-1 ${
                                            feature.isInfoLink
                                                ? "text-gray-600 underline"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        {feature.text}
                                    </span>
                                </div>

                                {/* Expanded detailed information */}
                                {feature.isInfoLink &&
                                    feature.detailedInfo &&
                                    expandedFeature === index && (
                                        <div className="mt-3 ml-6 space-y-2">
                                            {feature.detailedInfo.map(
                                                (detail, detailIndex) => (
                                                    <div
                                                        key={detailIndex}
                                                        className="flex items-start gap-2"
                                                    >
                                                        <Check className="w-4 h-4 text-[#d6136] mt-0.5 flex-shrink-0" />
                                                        <span className="text-sm text-gray-700">
                                                            {detail}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>
                )}
                {buttons && buttons.length > 0 && (
                    <div
                        className={`flex border-t-1 border-t-gray-200 pt-6 ${
                            buttons.length > 1
                                ? "gap-2 justify-center flex-col md:flex-row items-center"
                                : "justify-center"
                        }`}
                    >
                        {buttons.map((button, index) =>
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
    );
}
