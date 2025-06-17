import {
    ContentSection,
    Hero,
    SmileDesign,
    SmileInfo,
    SmileMakeover,
} from "../components";
import { ProcedureCard } from "../components/ProcedureCard";
import {
    contentSectionsData,
    dentalProcedures,
    heroData,
    smileInfoData,
    smileMakeoverData,
} from "../data";

export const SmileMakeoverPage = () => {
    return (
        <>
            {/* Componente de Héroe */}
            <Hero {...heroData[3]} />

            {/* Sección de Contenido */}
            <ContentSection {...contentSectionsData[1]} />
            <ContentSection {...contentSectionsData[2]} />

            <SmileDesign />

            <SmileMakeover {...smileMakeoverData} />
            <SmileInfo sections={smileInfoData} />

            {/* Componente de Héroe */}
            <Hero {...heroData[4]} />

            <ProcedureCard {...dentalProcedures} />
        </>
    );
};
