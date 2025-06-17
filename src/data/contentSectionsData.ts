import type { ContentSectionProps } from "../interfaces";

export const contentSectionsData: ContentSectionProps[] = [
    {
        title: "Your Smile Reflects Who You Are",
        description:
            "A smile is often the first thing people notice when they meet you. It reflects your health, your self-care, and can even hint at your age. Thanks to the rejuvenating and confidence-boosting effects of a smile makeover, this treatment has become one of the most popular options in cosmetic dentistry.",
        image: {
            src: "/src/assets/xyour_smile.webp",
            alt: "Professional smiling man showcasing dental treatment results",
        },
        titleColor: "text-pink-600",
        layout: "text-left",
        className: "my-12 px-4 md:px-8 lg:px-16",
    },
    {
        title: "Smile Ready for Every Photo",
        description:
            "Is it possible to achieve a flawless, camera-ready smile in just two visits to your dentist? With Smile Design at Traviesas, it is! This approach allows us to address multiple cosmetic and structural issues at once—fixing cracks, chips, stains, and gaps. Everything begins with a private consultation. If you want to start your smile transformation in Hialeah, contact Traviesas, your smile experts!",
        image: {
            src: "/src/assets/smile_makeover_couple.jpg",
            alt: "",
        },
        titleColor: "text-pink-600",
        layout: "text-left",
    },
    {
        title: "Discover the Smile Makeover",
        description:
            "A smile makeover is also called a “Hollywood smile,” “red carpet smile,” or “Miami smile.” This comprehensive treatment uses a multidisciplinary approach to address various dental concerns. The main goal is to give you the smile you’ve always dreamed of. By combining different procedures, we can achieve the best possible results—saving you both time and money while you leave our office with a stunning new smile.",
        image: {
            src: "/src/assets/smile_makeover.jpg",
            alt: "",
        },
        titleColor: "text-pink-600",
        layout: "text-right",
    },
];
