import type { DentalPricingData } from "../interfaces";

export const dentalPricingData: DentalPricingData = {
    title: "Cosmetic Dentistry Prices in Hialeah",
    description:
        "Absolutely! With the Traviesas Smile Makeover, you can achieve a brand new smile in just two visits. Our in-house master ceramist and advanced technology make the process fast and deliver beautiful, natural-looking results.",
    pricingCards: [
        {
            title: "Traviesas Smile Makeover / One-Day Veneers",
            description:
                "ONE-DAY, minimally invasive or no prep required, lasts up to 15-25 years. Most cases completed in 1-2 days.",
            price: "$243",
            priceUnit: "/ month",
            isFeatured: true,
            features: [
                { text: "Upper Starts at $5,999", isIncluded: true },
                { text: "Lower Starts at $5,999", isIncluded: true },
                { text: "Combined Starts at $9,999", isIncluded: true },
                {
                    text: "What's Included",
                    isInfoLink: true,
                    detailedInfo: [
                        "10 (upper) porcelain veneers",
                        "10 (lower) porcelain veneers",
                        "Initial exam",
                        "X-rays and photos with our in-house master ceramist",
                    ],
                },
            ],
            buttons: [{ text: "Request Information", isPrimary: true }],
        },
        {
            title: "DENTAL IMPLANTS",
            price: "Starts at $2,500",
            priceUnit: "/ each",
            features: [
                { text: "Titanium Implant", isIncluded: true },
                {
                    text: "Brand: Sweden Martina (Italian Implants)",
                    isIncluded: true,
                },
                {
                    text: "What's Included",
                    isInfoLink: true,
                    detailedInfo: [
                        "Placement of the implant and healing abutment, x-rays and photos",
                        "Immediate load available for an extra $400, so you can leave with a tooth in place the same day for $1900 total",
                        "A permanent crown will be placed at a later appointment",
                    ],
                },
            ],
            buttons: [
                { text: "Request Information", isPrimary: true },
                { text: "Dental Implants", isPrimary: false },
            ],
        },
        {
            title: "CROWNS",
            price: "Starts at $785",
            priceUnit: "/ each",
            features: [
                { text: "e-Max, Porcelain, Zirconia Crowns", isIncluded: true },
                { text: "Master Ceramist", isIncluded: true },
                {
                    text: "What's Included",
                    isInfoLink: true,
                    detailedInfo: [
                        "Tooth preparation and crown placement",
                        "Implant Crown is $800",
                        "Work done by our Master Ceramist",
                        "X-rays and photos included",
                    ],
                },
            ],
            buttons: [
                { text: "Request Information", isPrimary: true },
                { text: "Crowns Information", isPrimary: false },
            ],
        },
        {
            title: "BRIDGES",
            description:
                "Starts at $665 per unit. A minimum of 3 teeth is required, so a typical bridge solution for a missing space starts at $2,000.",
            price: "Starts at $665",
            priceUnit: "/ each",
            buttons: [{ text: "Request Information", isPrimary: true }],
        },
        {
            title: "CLEAR ALIGNERS",
            description: "Starting at $103 a month",
            price: "Starts at $103 a month",
            priceUnit: "/ month",
            buttons: [
                { text: "Request Information", isPrimary: true },
                { text: "Clear Aligners", isPrimary: false },
            ],
        },
    ],
};

export const smileDesignData: DentalPricingData = {
    pricingCards: [
        {
            title: "COMPARE",
            description: "Hialeah Average Prices",
            price: "$419",
            priceUnit: "/ month",
            features: [
                {
                    text: "Traviesas Price",
                    detailedInfo: ["$131/ month"],
                },
            ],
        },
        {
            title: "Traviesas Smile Makeover Price",
            price: "$131",
            priceUnit: "/ each",
            features: [
                { text: "Upper Starts at $2,999", isIncluded: true },
                {
                    text: "Lower Starts at $2,999",
                    isIncluded: true,
                },
                {
                    text: "Combined $4,999 (Done in 3 Visits - No Hidden Fees)",
                    isIncluded: true,
                },
                {
                    text: "10 (upper) porcelain veneers",
                    isIncluded: true,
                },
                {
                    text: "10 (lower) porcelain veneers",
                    isIncluded: true,
                },
                {
                    text: "Initial exam",
                    isIncluded: true,
                },
                {
                    text: "X-rays and photos with our in-house master ceramist",
                    isIncluded: true,
                },
                {
                    text: "Completed in 3 Visits",
                    isIncluded: true,
                },
            ],
            buttons: [{ text: "Request Information", isPrimary: true }],
        },
    ],
};
