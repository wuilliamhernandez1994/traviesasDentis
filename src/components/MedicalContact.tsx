import type { ContactMedicalData } from "../interfaces";

export const MedicalContact = ({
    contactMedicalInfo,
    officeHours,
    patientForm,
    customerService,
    aboutText,
    imageUrl,
}: ContactMedicalData) => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                    {/* Center Address */}
                    <section>
                        <h2 className="text-2xl font-bold text-pink-600 mb-4">
                            Center Address
                        </h2>
                        <div className="text-gray-700 space-y-1">
                            <p>{contactMedicalInfo.address.street}</p>
                            <p>
                                {contactMedicalInfo.address.city},{" "}
                                {contactMedicalInfo.address.state}{" "}
                                {contactMedicalInfo.address.zipCode}
                            </p>
                            {contactMedicalInfo.phones.map((phone, index) => (
                                <p key={index}>
                                    <span className="font-semibold underline">
                                        Phone:
                                    </span>{" "}
                                    {phone}
                                </p>
                            ))}
                            <p>
                                <span className="font-semibold underline">
                                    Fax:
                                </span>{" "}
                                {contactMedicalInfo.fax}
                            </p>
                            <p>
                                <span className="font-semibold underline">
                                    Email:
                                </span>{" "}
                                <a
                                    href={`mailto:${contactMedicalInfo.email}`}
                                    className="text-pink-600 underline"
                                >
                                    {contactMedicalInfo.email}
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* Office Hours */}
                    <section>
                        <h2 className="text-2xl font-bold text-pink-600 mb-4">
                            Office Hours
                        </h2>
                        <div className="">
                            {officeHours.weekdays.map((day, idx) => (
                                <p key={idx} className="font-medium">
                                    {day}
                                </p>
                            ))}
                            <p className="font-medium">{officeHours.hours}</p>
                            <p className="font-semibold">
                                {officeHours.availability}
                            </p>
                        </div>
                    </section>

                    {/* Patient Form */}
                    <section>
                        <h2 className="text-2xl font-bold text-pink-600 mb-4">
                            Patient Form
                        </h2>
                        <div className="text-gray-700">
                            <p className="mb-2">{patientForm.description}</p>
                            <a
                                href={patientForm.linkUrl}
                                className="text-pink-600 underline font-semibold hover:text-pink-700"
                            >
                                {patientForm.linkText}
                            </a>
                        </div>
                    </section>

                    {/* Customer Service */}
                    <section>
                        <h2 className="text-2xl font-bold text-pink-600 mb-4">
                            {customerService.title}
                        </h2>
                        <div className="text-gray-700">
                            <p className="mb-2">
                                {customerService.description}{" "}
                                <a
                                    href={`mailto:${customerService.email}`}
                                    className="text-pink-600 underline font-semibold hover:text-pink-700"
                                >
                                    {customerService.email}
                                </a>
                                {customerService.additionalInfo}
                            </p>
                        </div>
                    </section>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Contact Header */}
                    <section>
                        <h2 className="text-2xl font-bold text-pink-600 mb-4">
                            Contact us Traviesas Dental
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {aboutText}
                        </p>
                    </section>

                    {/* Image */}
                    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={imageUrl}
                            alt="Medical consultation showing doctor and patient consultation"
                            className="object-cover h-full"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
