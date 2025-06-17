import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout";
import {
    ContactPage,
    CosmeticDentistryPage,
    DiscoverPage,
    GeneralDentistryPage,
    SmileMakeoverPage,
} from "../pages";
import { HomePage } from "../pages/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "smile-makeover",
                element: <SmileMakeoverPage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
            {
                path: "cosmetic-dentistry",
                element: <CosmeticDentistryPage />,
            },
            {
                path: "discover",
                element: <DiscoverPage />,
            },
            {
                path: "general-dentistry",
                element: <GeneralDentistryPage />,
            },
        ],
    },
]);
