export interface FormField {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}

export interface ContactProps {
    title: string;
    description: string;
    formFields: FormField[];
    ctaText: string;
}
