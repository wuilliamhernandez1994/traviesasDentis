export interface TreatmentItem {
    id: string;
    name: string;
    description?: string;
}

export interface InfoSection {
    id: string;
    title: string;
    description?: string;
    treatments?: TreatmentItem[];
    content?: string[];
    additionalInfo?: string;
}

export interface SmileInfoProps {
    sections: InfoSection[];
}
