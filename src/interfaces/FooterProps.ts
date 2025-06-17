export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

export interface ContactInfo {
    address: string;
    city: string;
    phone: string;
    fax: string;
}

export interface FooterSection {
    title: string;
    links?: Array<{
        name: string;
        url: string;
    }>;
}

export interface AdditionalService {
    text: string;
    companyName: string;
    companyUrl: string;
    description: string;
}

export interface FooterData {
    companyName: string;
    contactInfo: ContactInfo;
    socialLinks: SocialLink[];
    sections: FooterSection[];
    disclaimer: string;
    additionalServices: AdditionalService;
    legalLinks: Array<{
        name: string;
        url: string;
    }>;
    copyright: string;
}
