import type { FooterData } from "../interfaces";

export const footerData: FooterData = {
    companyName: "Traviesas Dental Care",
    contactInfo: {
        address: "1200 W 64 Ter",
        city: "Hialeah, FL 33012",
        phone: "305 826-8980",
        fax: "305 826-8980",
    },
    socialLinks: [
        {
            name: "Instagram",
            url: "https://www.instagram.com/traviesasdentalcare?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExRXMza0Y3NTAweDFOb0w1UgEeSLg1d6ADNxbBOv7EjqxwxWOkt6AioqhXKeeYtzdqSgJEBlkzuVj8rCkoTlQ_aem_8cXpf8BQo8vp_JTi0TnlZw",
            icon: "instagram",
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/p/Traviesas-Dental-Care-100063822229542/?locale=es_LA",
            icon: "facebook",
        },
        {
            name: "TikTok",
            url: "https://www.tiktok.com/@traviesasdental?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExRXMza0Y3NTAweDFOb0w1UgEelhv7kjrkYP6HJyeEP9wW6jkZB9oDsdXSd4Ma63PXsZFB_kY5IhosSomhL78_aem_Neslynjj5QoCt5lX3jUeug",
            icon: "tiktok",
        },
        // {
        //     name: "LinkedIn",
        //     url: "https://www.linkedin.com/company/traviesasdentalcare/",
        //     icon: "linkedin",
        // },
        {
            name: "GoogleMaps",
            url: "https://maps.app.goo.gl/nd8i9bQCUjxtQa9U9",
            icon: "googlemaps",
        },
    ],
    sections: [
        {
            title: "Patient Information",
        },
        {
            title: "News & Updates",
        },
    ],
    disclaimer:
        "All prices and treatments are subject to a dental and medical evaluation. Actual costs may vary depending on individual needs. Some conditions or factors may require additional procedures or make certain treatments unavailable.",
    additionalServices: {
        text: "Other Services Available:",
        companyName: "Traviesas Dental Care",
        companyUrl: "#",
        description:
            "offers a full range of dental services, including cosmetic, restorative, and preventive care. Ask us about all our available treatments during your consultation.",
    },
    legalLinks: [
        {
            name: "Legal Information",
            url: "/legal-questions",
        },
        {
            name: "HIPAA Privacy Notice",
            url: "/hipaa-privacy",
        },
        {
            name: "Disclaimer",
            url: "/disclaimer",
        },
        {
            name: "Privacy Policy",
            url: "/privacy-policy",
        },
        {
            name: "Payment & Refund Policy",
            url: "/payment-refund-policy",
        },
    ],
    copyright: "Copyright 2025",
};
