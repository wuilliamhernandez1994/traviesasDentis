import type { DentalProcedureProps } from "../interfaces";

export const dentalProcedures: DentalProcedureProps = {
    title: "Procedures Typically Used in a Smile Makeover",
    description:
        "Most smile makeovers include a combination of cosmetic procedures. When you big your smile transformation, we will ask you questions to help you visualize your ideal smile. We will show you examples of smiles and help you select a style that best complements your facial structure and appearance.",
    procedures: [
        {
            id: "teeth-whitening",
            title: "Zoom!™ Teeth Whitening",
            image: "img/dentalProcedures/teeth-whitening.jpg",
            description:
                "Whitening your teeth is often the easiest way to improve the appearance of your smile. How would you like to get your teeth eight shades whiter with professional treatments from your dentist? Go",
            readMoreUrl: "#teeth-whitening",
        },
        {
            id: "clear-aligners",
            title: "Clear Aligners",
            image: "img/dentalProcedures/teeth-straightening.jpg",
            description:
                "Clear aligners allow patients to permanently straighten their teeth without having to wear embarrassing bracket-and-wire braces. When used in conjunction with teeth whitening, clear aligners can help you get that",
            readMoreUrl: "#clear-aligners",
        },
        {
            id: "crowns-bridges",
            title: "Crowns and Bridges",
            image: "img/dentalProcedures/porcelain-crowns.jpg",
            description:
                "If you have missing or damaged teeth, one of the first steps in rejuvenating your smile will be in correcting these issues. Crowns and bridges are often used to replace one or several missing teeth.",
            readMoreUrl: "#crowns-bridges",
        },
        {
            id: "dental-implants",
            title: "Dental Implants",
            image: "img/dentalProcedures/dental-implants.jpg",
            description:
                "Another method of replacing a missing tooth is with dental implants. Dental implants are surgically inserted into the jawbone, giving them the stability of natural tooth roots. An abutment is then attached",
            readMoreUrl: "#dental-implants",
        },
        {
            id: "digital-xrays",
            title: "Digital Dental X-Rays",
            image: "img/dentalProcedures/digital-x-ray.jpg",
            description:
                "You may not realize it, but digital dental X-rays are a major part of the smile design process. Through X-rays, we can identify any issues hiding below the surface that could complicate your restoration. After all,",
            readMoreUrl: "#digital-xrays",
        },
    ],
};
