export interface Testimonial {
    id: string;
    name: string;
    quote: string;
    avatarUrl: string;
}

export interface TestimonialsProps {
    testimonials: Testimonial[];
}
