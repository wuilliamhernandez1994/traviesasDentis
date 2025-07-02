import { Star } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative bg-gradient-to-br from-gray-50 via-pink-50 to-purple-50 py-20"
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                                Smile Makeover & Smile Design at{" "}
                                <span className="text-pink-500">Travesas</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Transform your smile with our comprehensive
                                dental services. From implants to whitening, we
                                create beautiful, healthy smiles that boost your
                                confidence and improve your quality of life.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="inline-flex items-center px-6 py-2 text-base font-medium rounded-5xl focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#df3884] text-white hover:bg-white hover:text-gray-800 text-md rounded-full shadow-lg border border-transparent w-fit">
                                Schedule Consultation
                            </button>
                            <button className="text-lg px-8 py-4 border-pink-600 text-pink-500 hover:bg-pink-50 bg-transparent">
                                View Services
                            </button>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>
                            <span className="text-gray-600">
                                4.9/5 from 500+ happy patients
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                            <img
                                src="/img/xyour_smile.webp"
                                alt="Beautiful smile transformation"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        <div className="absolute -top-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-full font-semibold">
                            Same Day Results!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
