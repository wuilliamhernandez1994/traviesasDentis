import type { ServiceData } from "../interfaces";

export const services: ServiceData[] = [
    {
        id: "oral-exam-cleaning",
        title: "Complete Oral Exam & Cleaning",
        description:
            "Maintain your oral health with a comprehensive dental exam, full-mouth x-rays, and professional cleaning for only $100.",
        image: "img/dentalProcedures/teeth-whitening.jpg",
        features: [
            "Comprehensive oral exam",
            "Full-mouth x-rays",
            "Professional cleaning",
            "Preventive dental care",
        ],
        price: "$100",
        duration: "1 visit",
    },
    {
        id: "dental-extractions",
        title: "Dental Extractions",
        description:
            "Precise dental extractions with oral exam and x-ray included. Solutions tailored to your dental needs.",
        image: "img/gummy-smile-gingivectomy.jpg",
        features: [
            "Professional extraction procedure",
            "Oral exam included",
            "X-ray included",
            "Safe and comfortable experience",
        ],
        price: "From $150",
        duration: "1 visit",
    },
    {
        id: "dental-implants",
        title: "Dental Implants",
        description:
            "Fast and effective treatments to replace missing or extracted teeth. Over 95% success rate. Multiple implants can be placed in one session.",
        image: "img/dentalProcedures/dental-implants.jpg",
        features: [
            "Direct implant placement",
            "Same-day placement after extraction",
            "High success rate",
            "Special offers for 3+ implants",
        ],
        price: "$899 / implant",
        duration: "1-2 visits",
    },
    {
        id: "implant-crown",
        title: "Implant Crown Rehabilitation",
        description:
            "Restore your smile with a crown over your dental implant. High-quality materials and expert craftsmanship.",
        image: "img/dentalProcedures/porcelain-crowns.jpg",
        features: [
            "Custom-made crowns",
            "Natural appearance",
            "Durable and long-lasting",
            "Expert dental team",
        ],
        price: "$799 / crown",
        duration: "2 visits",
    },
    {
        id: "referral-discount",
        title: "Referral Discount",
        description:
            "15% discount on all treatments for patients referred by others. Enjoy quality dental care at a lower price.",
        image: "img/root-canal.jpg",
        features: [
            "15% off all treatments",
            "For referred patients",
            "Quality dental care",
            "Affordable pricing",
        ],
        price: "15% OFF",
        duration: "Ongoing",
    },
    {
        id: "oral-surgery",
        title: "Oral & Periodontal Surgery",
        description:
            "Expert oral and periodontal surgeries, including direct implant placement and advanced procedures. Multiple implants can be placed in one session.",
        image: "img/dentalProcedures/teeth-straightening.jpg",
        features: [
            "Expert surgical team",
            "Advanced technology",
            "Comprehensive post-surgery care",
            "Personalized attention",
        ],
        price: "Ask for pricing",
        duration: "Varies",
    },
    {
        id: "other-treatments",
        title: "Other Dental Treatments",
        description:
            "We offer a wide range of treatments: veneers, crowns, bridges, teeth whitening, botox, dentures, and orthodontics. Ask for your personalized plan.",
        image: "img/fix_veneers_hands.jpg",
        features: [
            "Veneers, crowns, bridges",
            "Teeth whitening, botox",
            "Dentures, orthodontics",
            "Custom treatment plans",
        ],
        price: "Ask for pricing",
        duration: "Varies",
    },
];
