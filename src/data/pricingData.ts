import type { DentalPricingData } from "../interfaces";

export const dentalPricingData: DentalPricingData = {
    title: "Permanent Dental Offers in Hialeah",
    description:
        "Take care of your oral health with our permanent offers. We provide comprehensive dental care, including advanced surgeries and dental implants, with special discounts for referred patients.",
    pricingCards: [
        {
            title: "Complete Oral Exam, Full-Mouth X-rays & Cleaning",
            description:
                "Thorough maintenance of your oral health. Includes a comprehensive dental exam, full-mouth x-rays, and professional cleaning.",
            price: "$100",
            priceUnit: "",
            isFeatured: true,
            features: [
                { text: "Comprehensive oral exam", isIncluded: true },
                { text: "Full-mouth x-rays", isIncluded: true },
                { text: "Professional dental cleaning", isIncluded: true },
                {
                    text: "What's Included",
                    isInfoLink: true,
                    detailedInfo: [
                        "Detailed oral health assessment",
                        "All necessary x-rays",
                        "Gentle and thorough cleaning",
                    ],
                },
            ],
            buttons: [
                {
                    text: "Request Information",
                    isPrimary: true,
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=traviesasdental@gmail.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                },
            ],
        },
        {
            title: "Dental Extractions with Exam & X-ray",
            price: "From $150",
            priceUnit: "",
            features: [
                { text: "Precise dental extractions", isIncluded: true },
                {
                    text: "Includes oral exam and x-ray",
                    isIncluded: true,
                },
                {
                    text: "What's Included",
                    isInfoLink: true,
                    detailedInfo: [
                        "Professional extraction procedure",
                        "Comprehensive oral exam",
                        "X-ray for accurate diagnosis",
                    ],
                },
            ],
            buttons: [
                {
                    text: "Request Information",
                    isPrimary: true,
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=traviesasdental@gmail.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                },
                {
                    text: "Dental Extractions",
                    isPrimary: false,
                    href: "#",
                },
            ],
        },
        {
            title: "Dental Implants",
            price: "$899",
            priceUnit: "/ implant",
            features: [
                {
                    text: "Direct placement, even same day after extraction",
                    isIncluded: true,
                },
                { text: "Over 95% success rate", isIncluded: true },
                {
                    text: "What's Included",
                    isInfoLink: true,
                    detailedInfo: [
                        "Implant placement procedure",
                        "Immediate placement available",
                        "Multiple implants in one session possible",
                        "Special offers for 3 or more implants",
                    ],
                },
            ],
            buttons: [
                {
                    text: "Request Information",
                    isPrimary: true,
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=traviesasdental@gmail.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                },
                {
                    text: "Implant Details",
                    isPrimary: false,
                    href: "#",
                },
            ],
        },
        {
            title: "Implant Crown Rehabilitation",
            description:
                "Restore your smile with a crown over your dental implant. High-quality materials and expert craftsmanship.",
            price: "$799",
            priceUnit: "/ crown",
            buttons: [
                {
                    text: "Request Information",
                    isPrimary: true,
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=traviesasdental@gmail.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                },
            ],
        },
        {
            title: "Special Discounts",
            description:
                "15% discount on all treatments for referred patients.",
            price: "15% OFF",
            priceUnit: "for referrals",
            buttons: [
                {
                    text: "Request Information",
                    isPrimary: true,
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=traviesasdental@gmail.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                },
                {
                    text: "Referral Program",
                    isPrimary: false,
                    href: "#",
                },
            ],
        },
    ],
};

export const smileDesignData: DentalPricingData = {
    pricingCards: [
        {
            title: "Other Dental Treatments",
            description:
                "We offer a wide range of treatments including veneers, crowns, bridges, teeth whitening, botox, dentures, and orthodontic treatments.",
            price: "Ask for pricing",
            priceUnit: "",
            features: [
                {
                    text: "Veneers, crowns, bridges, whitening, botox, dentures, orthodontics",
                    detailedInfo: [
                        "Custom treatment plans",
                        "High-quality materials",
                        "Expert dental team",
                    ],
                },
            ],
        },
        {
            title: "Oral & Periodontal Surgery",
            price: "Ask for pricing",
            priceUnit: "",
            features: [
                {
                    text: "Expert oral and periodontal surgeries",
                    isIncluded: true,
                },
                {
                    text: "Direct implant placement, even same day after extraction",
                    isIncluded: true,
                },
                {
                    text: "Multiple implants in one session",
                    isIncluded: true,
                },
                {
                    text: "Special offers for 3 or more implants",
                    isIncluded: true,
                },
                {
                    text: "15% discount for referred patients",
                    isIncluded: true,
                },
                {
                    text: "Comprehensive post-surgery care",
                    isIncluded: true,
                },
                {
                    text: "Advanced technology and techniques",
                    isIncluded: true,
                },
                {
                    text: "Personalized attention for every patient",
                    isIncluded: true,
                },
            ],
            buttons: [{ text: "Request Information", isPrimary: true }],
        },
    ],
};
