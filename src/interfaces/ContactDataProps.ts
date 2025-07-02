export interface ContactMedicalInfo {
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
    };
    phones: string[];
    fax: string;
    email: string;
}

export interface OfficeHours {
    weekdays: string[];
    hours: string;
    availability: string;
}

export interface PatientForm {
    description: string;
    linkText: string;
    linkUrl: string;
}

export interface CustomerService {
    title: string;
    description: string;
    email: string;
    additionalInfo: string;
}

export interface ContactMedicalData {
    contactMedicalInfo: ContactMedicalInfo;
    officeHours: OfficeHours;
    patientForm: PatientForm;
    customerService: CustomerService;
    aboutText: string;
    imageUrl: string;
}
