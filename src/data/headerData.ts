import type { HeaderProps } from "../interfaces";

export const headerData: HeaderProps = {
    logo: "img/logoTraviesas.png",
    // logo: "img/logoTraviesas.png",
    navOptions: [
        {
            label: "Smile Makeover",
            anotation: "Exclusive",
            href: "/smile-makeover",
            active: true,
        },
        {
            label: "Cosmetic Dentistry",
            anotation: "Most Popular",
            href: "/cosmetic-dentistry",
        },
        // {
        //     label: "General Dentistry",
        //     href: "/general-dentistry",
        // },
        // { label: "Discover", href: "#" },
        { label: "Contact", href: "/contact" },
    ],
};
