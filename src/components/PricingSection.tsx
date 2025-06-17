import { PricingCard } from ".";
import type { DentalPricingData } from "../interfaces";

interface DentalPricingProps {
    data: DentalPricingData;
}

export function DentalPricing({ data }: DentalPricingProps) {
    const featuredCard = data.pricingCards.find((card) => card.isFeatured);
    const regularCards = data.pricingCards.filter((card) => !card.isFeatured);

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-light text-pink-500 mb-4">
                        {data.title}
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        {data.description}
                    </p>
                </div>

                {/* Featured Card */}
                {featuredCard && (
                    <div className="flex justify-center mb-12">
                        <PricingCard {...featuredCard} />
                    </div>
                )}

                {/* Regular Cards Grid */}
                <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto justify-center flex-wrap items-start">
                    {regularCards.map((card, index) => (
                        <PricingCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    );
}
