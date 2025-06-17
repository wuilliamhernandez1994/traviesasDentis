import { ChevronDown } from "lucide-react";
import type { DentalProcedureProps } from "../interfaces";

export const ProcedureCard = ({
    title,
    description,
    procedures,
}: DentalProcedureProps) => {
    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-light text-pink-500 mb-6">
                    {title}
                </h2>
                <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {procedures.map((procedure) => (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-pink-500 mb-4 text-center">
                                {procedure.title}
                            </h3>

                            <div className="mb-4">
                                <img
                                    src={procedure.image || "/placeholder.svg"}
                                    alt={procedure.title}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {procedure.description}
                            </p>

                            <button
                                onClick={() => {}}
                                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-full transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                Read More
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
