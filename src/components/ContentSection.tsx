import type { ContentSectionProps } from "../interfaces";

export const ContentSection = ({
    title,
    description,
    image,
    titleColor = "text-pink-600",
    layout = "text-left",
    className = "",
}: ContentSectionProps) => {
    return (
        <section className={`border-b-[1px] border-gray-200 ${className}`}>
            <div className="">
                <div
                    className={`grid grid-cols-1 lg:grid-cols-2 ${
                        layout === "text-right" ? "lg:grid-flow-col-dense" : ""
                    }`}
                >
                    {/* Text Content */}
                    <div
                        className={`space-y-6 px-8 lg-px-16 flex flex-col justify-center ${
                            layout === "text-right" ? "lg:col-start-2" : ""
                        }`}
                    >
                        <h2
                            className={`text-4xl text-center md:text-5xl lg:text-5xl font-light leading-tight ${titleColor}`}
                        >
                            {title}
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
                            {description}
                        </p>
                    </div>

                    {/* Image */}
                    <div
                        className={`relative ${
                            layout === "text-right" ? "lg:col-start-1" : ""
                        }`}
                    >
                        <div className="relative max-w-md mx-auto lg:max-w-full">
                            <img
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
