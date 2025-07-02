import {
    ContentSection,
    FAQComponent,
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
    smileMakeoverFAQData,
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

            {/* Componente de Héroe */}
            <Hero {...heroData[5]} />

            <p className="text-xl text-center md:text-2xl font-light text-pink-500 mt-10 mb-4">
                Hollywood Smile: What’s The Secret?
            </p>

            {/* Sección de Contenido */}
            <ContentSection {...contentSectionsData[3]} />

            <FAQComponent {...smileMakeoverFAQData} />

            <p className="text-xl text-center md:text-2xl font-light text-pink-500 mt-10 mb-4">
                Let's Transform Your Smile
            </p>
            <p className="block mx-auto px-4 text-gray-700 text-sm md:text-base leading-relaxed max-w-6xl mb-10">
                Are you unhappy with your smile? Have you ever watched a movie
                and wished your teeth could look as attractive as those you see
                on the screen? A smile makeover at Traviesas Dental Clinic can
                put the perfect smile within reach—even if you have crooked or
                missing teeth! To most people, teeth are simply teeth, but as
                cosmetic dentists know, there is an art and science behind
                designing a smile. At Traviesas, it is our great privilege to
                help patients achieve the smile they've always wanted. With a
                full smile transformation, our patients are not only smiling
                more—they are also happier, more confident, and see their
                transformation as a life-changing
            </p>
        </>
    );
};
