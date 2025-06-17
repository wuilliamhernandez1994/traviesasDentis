export interface ImageData {
    src: string;
    alt: string;
}

export interface ContentSectionProps {
    title: string;
    description: string;
    image: ImageData;
    titleColor?: string;
    layout?: "text-left" | "text-right";
    className?: string;
}
