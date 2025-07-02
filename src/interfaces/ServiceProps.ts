export interface ServiceProps {
    sectionTitle: string;
    sectionDescription: string;
    services: service[];
}

interface service {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    hasButton: boolean;
    buttonText: string;
    emailUrl?: string;
}
