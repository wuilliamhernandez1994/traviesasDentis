export interface HeroProps {
    backgroundClass?: string;
    wrapperClass?: string;
    title?: string;
    titleClass?: string;
    subtitle?: string;
    subtitleClass?: string;
    buttons?: HeroButtonProps[];
}

export interface HeroButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    className?: string;
}
