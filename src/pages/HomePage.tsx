import {
    Hero,
    DentalServices,
    DentalPricing,
    DentalPromoCard,
    ContentSection,
} from "../components";

// Datos para los componentes
import {
    heroData,
    serviceData,
    dentalPricingData,
    dentalPromoData,
    contentSectionsData,
} from "../data";

export const HomePage = () => (
    <>
        {/* Componente de Héroe */}
        <Hero {...heroData[0]} />
        {/* Componente de Tarjeta Promocional Dental */}
        <DentalPromoCard data={dentalPromoData} />
        {/* Componente de Héroe adicional */}
        <Hero {...heroData[1]} />

        {/* Sección de Contenido */}
        <ContentSection {...contentSectionsData[0]} />

        {/* Sección Acerca de Nosotros */}
        <DentalServices {...serviceData} />

        {/* Componente de Héroe adicional */}
        <Hero {...heroData[2]} />

        {/* Sección de Servicios */}
        <DentalPricing data={dentalPricingData} />
    </>
);
