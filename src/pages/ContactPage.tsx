import { Hero, MedicalContact } from "../components";
import { contactMedicalData, heroData } from "../data";

export const ContactPage = () => {
    return (
        <>
            {/* Componente de Héroe */}
            <Hero {...heroData[6]} />

            <MedicalContact {...contactMedicalData} />
        </>
    );
};
