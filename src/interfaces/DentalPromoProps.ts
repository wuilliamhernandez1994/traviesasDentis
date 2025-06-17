export interface DentalPromoData {
    headerText: string;
    title: string;
    subtitle: string;
    description: string[];
    mainText: {
        primary: string;
        secondary: string;
    };
    callToAction: {
        text: string;
        phone: string;
    };
}
