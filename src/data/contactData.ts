import type { ContactProps } from "../interfaces";

export const contactData: ContactProps = {
    title: "Contáctanos",
    description:
        "¿Listo para tu transformación de sonrisa? Envíanos un mensaje y te contactaremos a la brevedad.",
    formFields: [
        {
            name: "name",
            label: "Nombre Completo",
            type: "text",
            placeholder: "Tu nombre",
        },
        {
            name: "email",
            label: "Correo Electrónico",
            type: "email",
            placeholder: "tu@ejemplo.com",
        },
        {
            name: "phone",
            label: "Teléfono",
            type: "tel",
            placeholder: "Tu teléfono (opcional)",
        },
        {
            name: "message",
            label: "Tu Mensaje",
            type: "textarea",
            placeholder: "Escribe tu mensaje aquí...",
        },
    ],
    ctaText: "Enviar Mensaje",
};
