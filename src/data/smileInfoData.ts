import type { InfoSection } from "../interfaces";

export const smileInfoData: InfoSection[] = [
    {
        id: "whats-included",
        title: "What's Included with a Smile Makeover?",
        description:
            "Each patient is different, therefore the recommended treatments also vary from patient to patient. Some of the treatments that may be included with your smile makeover include:",
        treatments: [
            {
                id: "porcelain-veneers",
                name: "Porcelain Veneers",
            },
            {
                id: "crowns",
                name: "Crowns",
            },
            {
                id: "night-guard",
                name: "Night Guard",
            },
            {
                id: "teeth-whitening",
                name: "Zoom!™ teeth whitening",
            },
        ],
        additionalInfo:
            "The procedures listed above are often combined to deliver the best results. During your consultation, the dentist will give you a detailed breakdown of how the individual treatments will work together to rejuvenate the appearance of your smile.",
    },
    {
        id: "how-it-works",
        title: "How Does the CG Smile Makeover Work?",
        content: [
            'In as little as two visits, you can have a completely rejuvenated smile — even if you are missing teeth. On your first visit, our team will perform a comprehensive dental exam. Your first session will include cleaning, X-rays, diagnostics, and we will also take the "before" photos for your before-and-after photographs. If you are having veneers, bonding, or crowns placed, your teeth will be prepared and your scans and/or impressions will be given to our in-house design team. We will help you select the style and shade of your new teeth. We have an on-site master ceramist and use state-of-the-art technology. This means some procedures can be performed the very same day.',
            "On your follow-up visit, your porcelain veneers will be affixed to your teeth. We will also make any finishing touches that are required to ensure you are absolutely thrilled with your new smile. Depending on the present state of your smile, we may recommend gingivectomy, porcelain veneers, dental implants, and or teeth straightening.",
        ],
    },
];
