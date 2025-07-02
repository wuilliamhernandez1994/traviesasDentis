import { Star, Quote } from "lucide-react";
import { testimonials } from "../data";

export const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                        What Our <span className="text-pink-500">Patients</span>{" "}
                        Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our
                        satisfied patients have to say about their experience at
                        Travesas Dental.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={
                                            testimonial.image ||
                                            "/placeholder.svg"
                                        }
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">
                                            {testimonial.name}
                                        </h4>
                                        <div className="flex items-center">
                                            {[...Array(testimonial.rating)].map(
                                                (_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <Quote className="w-8 h-8 text-pink-200 mb-3" />
                                <p className="text-gray-600 leading-relaxed">
                                    {testimonial.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
