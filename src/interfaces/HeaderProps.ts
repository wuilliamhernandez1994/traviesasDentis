export interface NavOption {
    label: string;
    anotation?: string;
    href: string;
    active?: boolean;
    className?: string;
}

export interface HeaderProps {
    logo?: string;
    navOptions: NavOption[];
}
