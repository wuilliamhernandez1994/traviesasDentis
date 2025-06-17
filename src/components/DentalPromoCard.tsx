import type { DentalPromoData } from "../interfaces";

interface DentalPromoCardProps {
    data: DentalPromoData;
    className?: string;
}

export const DentalPromoCard = ({
    data,
    className = "",
}: DentalPromoCardProps) => {
    return (
        <div className={`bg-white p-8 lg:p-12 w-full ${className}`}>
            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                    <div className="text-center">
                        <p className="text-pink-500 text-2xl lg:text-5xl font-light leading-tight mb-2">
                            {data.title}
                        </p>
                        <p className="text-pink-500 text-2xl lg:text-5xl font-light leading-tight">
                            {data.subtitle}
                        </p>
                    </div>

                    <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed font-medium">
                        {data.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* Right Content */}
                <div className="text-center lg:text-right">
                    <div className="mb-6">
                        <p className="text-pink-500 text-xl lg:text-3xl font-light tracking-[0.3em] uppercase">
                            {data.headerText}
                        </p>
                        <div className="text-4xl lg:text-[150px] font-bold text-gray-400 leading-none tracking-wider">
                            {data.mainText.primary}
                        </div>
                        <div className="text-4xl lg:text-8xl font-light text-gray-400 leading-none tracking-[0.2em] mt-2">
                            {data.mainText.secondary.split(" ")[0]}
                        </div>
                        <div className="text-6xl lg:text-8xl font-light text-gray-400 leading-none tracking-wider">
                            {data.mainText.secondary.split(" ")[1]}
                        </div>
                    </div>

                    <div className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full text-2xl lg:text-6xl font-normal tracking-wider mb-8 w-10/12 text-center">
                        SAME
                        <p className="inline-block font-bold ml-2.5">DAY</p>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12 space-y-4">
                <p className="text-gray-600 text-lg">
                    {data.callToAction.text}
                </p>
                <div className="inline-block bg-gray-500 text-white px-8 py-3 rounded-full text-lg font-medium">
                    Call: {data.callToAction.phone}
                </div>
            </div>
        </div>
    );
};
