import { Check, Clock, DollarSign } from "lucide-react";
import { services } from "../data";

export const ServicesSection = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-normal text-gray-800 mb-4">
                        Our <span className="text-pink-500">Smile</span>{" "}
                        Services
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive dental care tailored to your unique needs.
                        From preventive care to complete smile makeovers.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="flex flex-col hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                        >
                            <div className="p-0">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src={
                                            service.image || "/placeholder.svg"
                                        }
                                        alt={service.title}
                                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        #{index + 1}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="text-xl font-semibold text-pink-500 mb-3">
                                    {service.title}
                                </div>
                                <p className="text-sm mb-4 leading-relaxed text-gray-600">
                                    {service.description}
                                </p>

                                <div className="space-y-3 mb-6">
                                    {service.features
                                        .slice(0, 3)
                                        .map((feature, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center space-x-2"
                                            >
                                                <Check className="w-4 h-4 text-pink-500 flex-shrink-0" />
                                                <span className="text-sm text-gray-600">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                </div>

                                <div className="flex items-center justify-between mb-4 text-sm flex-1">
                                    <div className="flex items-center space-x-1">
                                        <DollarSign className="w-4 h-4 text-green-500" />
                                        <span className="font-semibold text-green-600">
                                            {service.price}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Clock className="w-4 h-4 text-blue-500" />
                                        <span className="text-gray-600">
                                            {service.duration}
                                        </span>
                                    </div>
                                </div>

                                <button className="w-full px-6 py-2 border border-transparent text-base font-medium rounded-5xl focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#df3884] text-white hover:bg-pink-50 hover:text-gray-800 text-md rounded-full shadow-lg">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
