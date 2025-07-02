import { ChevronDown } from "lucide-react";
import type { DentalProcedureProps } from "../interfaces";

export const ProcedureCard = ({
    title,
    description,
    procedures,
}: DentalProcedureProps) => {
    return (
        <section className="py-12 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <p className="text-xl md:text-2xl font-light text-pink-500 mb-6">
                    {title}
                </p>
                <p className="text-gray-600 max-w-6xl mx-auto leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {procedures.map((procedure) => (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                        <div className="flex flex-col p-6 h-full">
                            <h3 className="text-xl font-semibold text-pink-500 mb-4 text-center">
                                {procedure.title}
                            </h3>

                            <div className="mb-4">
                                <img
                                    src={procedure.image}
                                    alt={procedure.title}
                                    className="h-55 w-full object-contain rounded-lg"
                                />
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
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
