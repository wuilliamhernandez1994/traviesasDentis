export interface PricingFeature {
    text: string;
    isIncluded?: boolean;
    isInfoLink?: boolean;
    detailedInfo?: string[]; // Add this for expanded information
}

export interface PricingButton {
    text: string;
    isPrimary?: boolean;
    href?: string;
    target?: string;
    rel?: string;
}

export interface PricingCardProps {
    title: string;
    description?: string;
    price: string;
    priceUnit: string;
    isFeatured?: boolean;
    features?: PricingFeature[];
    buttons?: PricingButton[];
}

export interface DentalPricingData {
    title?: string;
    description?: string;
    pricingCards: PricingCardProps[];
}
