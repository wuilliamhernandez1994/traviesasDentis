import type { ContactMedicalData } from "../interfaces";

export const contactMedicalData: ContactMedicalData = {
    contactMedicalInfo: {
        address: {
            street: "508 E 49th St",
            city: "Hialeah",
            state: "FL",
            zipCode: "33013",
        },
        phones: ["305 826-8980"],
        fax: "305 826-8980",
        email: "traviesasdental@gmail.com",
    },
    officeHours: {
        weekdays: [
            "Monday, Wednesday, Saturday. 08:00am - 01:00pm",
            "Tuesday, Thrusday, Friday. 12:00pm - 06:00pm",
            "Sunday (Once a month) 08:00am - 01:00pm",
        ],
        hours: "Hours may vary",
        availability:
            "Our dentists are available for emergencies 24 hours a day.",
    },
    patientForm: {
        description:
            "To make the most of your appointment, please arrive early so you can complete your new patient paperwork comfortably and accurately.",
        linkText: "Click here to complete your evaluation",
        linkUrl: "#",
    },
    customerService: {
        title: "Not completely satisfied?",
        description:
            "We want to help. If you wish to contact our customer service team for any reason, please email",
        email: "traviesasdental@gmail.com",
        additionalInfo:
            ". We will review your case and work with you to find the best solution.",
    },
    aboutText:
        "At Traviesas, we are passionate about improving our patients’ oral health and smiles. We offer advanced and personalized dental treatments so everyone can enjoy a better quality of life. Contact us today to schedule your free consultation.",
    imageUrl: "img/contact.jpg",
};
