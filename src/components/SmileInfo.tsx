import type { SmileInfoProps } from "../interfaces";

export const SmileInfo = ({ sections }: SmileInfoProps) => {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-12 bg-white">
            {sections.map((section, index) => (
                <div
                    key={section.id}
                    className={`${index > 0 ? "mt-4 text-center" : ""}`}
                >
                    {/* Section Title */}
                    <h2 className="text-2xl font-light text-pink-500 leading-tight">
                        {section.title}
                    </h2>

                    {/* Section Description */}
                    <p className="text-gray-700 text-base font-medium leading-relaxed mb-4">
                        {section.description}
                    </p>

                    {/* Treatments List (if available) */}
                    {section.treatments && (
                        <div className="mb-2">
                            <ul className="">
                                {section.treatments.map((treatment) => (
                                    <li
                                        key={treatment.id}
                                        className="flex items-start"
                                    >
                                        <span className="text-pink-500 mr-3 mt-1 text-base font-medium">
                                            •
                                        </span>
                                        <span className="text-gray-700 text-base font-medium leading-relaxed">
                                            {treatment.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            {section.additionalInfo && (
                                <p className="text-gray-700 text-base font-medium mt-2">
                                    {section.additionalInfo}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Content Paragraphs (if available) */}
                    {section.content && (
                        <div className="space-y-4">
                            {section.content.map(
                                (paragraph, paragraphIndex) => (
                                    <p
                                        key={paragraphIndex}
                                        className="text-gray-700 text-base font-medium leading-relaxed text-justify"
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
