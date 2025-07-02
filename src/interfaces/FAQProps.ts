export interface FAQListItem {
    title: string;
    description: string;
}

export interface FAQItem {
    id: string;
    question: string;
    introText?: string;
    listItems?: FAQListItem[];
    plainAnswer?: string;
}

export interface FAQProps {
    title: string;
    items: FAQItem[];
    className?: string;
}
