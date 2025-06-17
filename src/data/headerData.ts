import type { HeaderProps } from "../interfaces";

export const headerData: HeaderProps = {
    logo: "src/assets/logoTraviesas.png",
    navOptions: [
        {
            label: "Smile Makeover",
            anotation: "Exclusive",
            // href: "/smile-makeover",
            href: "#",
            active: true,
        },
        {
            label: "Cosmetic Dentistry",
            anotation: "Most Popular",
            // href: "/cosmetic-dentistry",
            href: "?",
        },
        {
            label: "General Dentistry",
            // href: "/general-dentistry",
            href: "#",
        },
        { label: "Discover", href: "#" },
        { label: "Contact", href: "#" },
    ],
};
