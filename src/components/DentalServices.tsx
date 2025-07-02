import type { ServiceProps } from "../interfaces";

export const DentalServices = ({
    sectionTitle,
    sectionDescription,
    services,
}: ServiceProps) => {
    return (
        <div className="max-w-6xl mx-auto p-5 bg-white ">
            <div className="w-full lg:w-8/12 mx-auto mt-6 text-center mb-10 text-gray-800">
                <p className="text-2xl font-light text-pink-600 mb-4">
                    {sectionTitle}
                </p>
                <p className="text-base font-medium leading-relaxed text-[#52474c]">
                    {sectionDescription}
                </p>
            </div>

            {services.map((service, index) => (
                <div
                    key={index} // Idealmente usar un ID único si tus servicios lo tienen
                    className="flex flex-col items-center h-auto lg:h-70 xl:h-80 mb-8 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0 lg:flex-row lg:text-center rounded-lg shadow-lg"
                >
                    <div className="flex-shrink-0 h-auto w-full lg:h-full lg:w-auto mr-0">
                        <img
                            src={service.imageUrl}
                            alt={service.imageAlt}
                            className="h-auto w-full lg:h-full lg:w-auto"
                        />
                    </div>
                    <div className="text-center px-8">
                        <p className="text-3xl font-light text-pink-600 mb-3 sm:mt-4">
                            {service.title}
                        </p>
                        <p className="text-base font-medium leading-relaxed text-[#52474c] mb-5">
                            {service.description}
                        </p>
                        {service.hasButton && (
                            <a
                                href={service.emailUrl}
                                target="_blank"
                                className="bg-pink-600 text-white py-2 px-6 mb-8 rounded-md text-lg font-medium hover:bg-pink-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 inline-block"
                            >
                                {service.buttonText || "Ask a Question"}
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
