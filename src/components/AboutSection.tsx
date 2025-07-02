import { Award, Users, Clock, Heart } from "lucide-react";

export const AboutSection = () => {
    const stats = [
        { icon: Users, label: "Happy Patients", value: "5,000+" },
        { icon: Award, label: "Years Experience", value: "15+" },
        { icon: Clock, label: "Same Day Service", value: "90%" },
        { icon: Heart, label: "Success Rate", value: "99%" },
    ];

    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-br from-gray-50 via-pink-50 to-purple-50"
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="space-y-4 mb-4">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                        Your Smile Reflects{" "}
                        <span className="text-pink-500">Who You Are</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        At Travesas Dental, we believe that every smile tells a
                        story. Our team of experienced professionals is
                        dedicated to helping you achieve the smile of your
                        dreams through personalized care and cutting-edge dental
                        technology.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        From routine cleanings to complete smile makeovers, we
                        provide comprehensive dental services in a comfortable,
                        welcoming environment. Your oral health and satisfaction
                        are our top priorities.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 border-0 shadow-lg"
                                >
                                    <div className="p-0">
                                        <stat.icon className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                                        <div className="text-2xl font-bold text-gray-800 mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="img/dentalProcedures/teeth-whitening.jpg"
                                alt="Modern dental office"
                                className="rounded-lg shadow-lg"
                            />
                            <img
                                src="img/dentalProcedures/teeth-straightening.jpg"
                                alt="Dental team"
                                className="rounded-lg shadow-lg mt-8"
                            />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-xl">
                            <div className="text-sm text-gray-600">
                                We Are Open!
                            </div>
                            <div className="font-semibold text-gray-800">
                                Book Your Visit Today
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
