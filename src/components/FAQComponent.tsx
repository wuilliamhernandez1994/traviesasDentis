import { useState } from "react";
import type { FAQProps } from "../interfaces";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQComponent = ({ title, items, className = "" }: FAQProps) => {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());

    const toggleItem = (id: string) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    return (
        <div className={`max-w-6xl mx-auto p-6 ${className}`}>
            <h1 className="text-2xl md:text-3xl font-normal text-pink-500 text-center mb-8">
                {title}
            </h1>

            <div className="">
                {items.map((item) => {
                    const isOpen = openItems.has(item.id);

                    return (
                        <div
                            key={item.id}
                            className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleItem(item.id)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                                aria-expanded={isOpen}
                            >
                                <span className="text-pink-500 font-normal text-base md:text-lg pr-4">
                                    {item.question}
                                </span>
                                <div className="flex-shrink-0">
                                    {isOpen ? (
                                        <ChevronUp className="w-5 h-5 text-pink-500" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-pink-500" />
                                    )}
                                </div>
                            </button>

                            {isOpen && (
                                <div className="px-6 pb-6">
                                    {/* Intro text */}
                                    {item.introText && (
                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                                            {item.introText}
                                        </p>
                                    )}

                                    {/* List items with bullet points */}
                                    {item.listItems && (
                                        <ul className="space-y-4">
                                            {item.listItems.map(
                                                (listItem, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex"
                                                    >
                                                        <span className="text-gray-700 mr-3 mt-1">
                                                            •
                                                        </span>
                                                        <div>
                                                            <span className="font-semibold text-gray-800 text-sm md:text-base">
                                                                {listItem.title}
                                                            </span>
                                                            <span className="text-gray-700 text-sm md:text-base leading-relaxed ml-1">
                                                                {
                                                                    listItem.description
                                                                }
                                                            </span>
                                                        </div>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}

                                    {/* Plain answer for simple FAQ items */}
                                    {item.plainAnswer && (
                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                            {item.plainAnswer}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
