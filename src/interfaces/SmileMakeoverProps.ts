export interface SmileImage {
    id: string;
    src: string;
    alt: string;
    type: "before" | "after";
}

export interface SmileMakeoverProps {
    title: string;
    images: SmileImage[];
}
