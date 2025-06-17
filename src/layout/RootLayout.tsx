import { Outlet } from "react-router-dom";
import { Footer, Header, WhatsAppButton } from "../components";
import { footerData, headerData } from "../data";

export const RootLayout = () => {
    return (
        <div className="font-montserrat antialiased text-gray-900">
            {/* Componente de Encabezado */}
            <Header {...headerData} />

            <Outlet />
            <WhatsAppButton
                phoneNumber="+13058268980"
                message="¡Hola! Me gustaría hacer una reservación."
                size={40}
            />
            {/* Componente de Pie de Página */}
            <Footer data={footerData} />
        </div>
    );
};
