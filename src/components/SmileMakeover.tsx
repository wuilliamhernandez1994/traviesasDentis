import type { SmileMakeoverProps } from "../interfaces";

export const SmileMakeover = ({ title, images }: SmileMakeoverProps) => {
    return (
        <div className="w-full px-4 py-8 bg-gray-50 border-t border-gray-300">
            {/* Title Section */}
            <div className="text-center mb-8">
                <p className="text-2xl font-light text-pink-500 tracking-wide">
                    {title}
                </p>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />

                        {/* Optional overlay for before/after labels */}
                        <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-xs font-medium capitalize">
                            {image.type}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
