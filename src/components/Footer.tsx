import type React from "react";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaTiktok,
    // FaPinterestP,
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import type { FooterData } from "../interfaces";

interface FooterProps {
    data: FooterData;
}

const SocialIcon = ({
    icon,
    className,
}: {
    icon: string;
    className?: string;
}) => {
    const iconProps = { className: className || "w-6 h-6" };

    switch (icon) {
        case "instagram":
            return <FaInstagram {...iconProps} />;
        case "facebook":
            return <FaFacebookF {...iconProps} />;
        case "tiktok":
            return <FaTiktok {...iconProps} />;
        case "linkedin":
            return <FaLinkedinIn {...iconProps} />;
        case "googlemaps":
            return <SiGooglemaps {...iconProps} />;
        default:
            return null;
    }
};

export const Footer: React.FC<FooterProps> = ({ data }) => {
    return (
        <footer className="bg-gray-800 text-gray-300 p-3 lg:py-12 lg:px-34">
            <div className="max-w-7xl mx-auto">
                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-light text-white mb-4">
                            {data.companyName}
                        </h2>
                        <div className="space-y-2">
                            <div>
                                <span className="font-semibold">Address:</span>{" "}
                                {data.contactInfo.address}
                            </div>
                            <div>{data.contactInfo.city}</div>
                            <div>
                                <span className="font-semibold">Tel:</span>{" "}
                                {data.contactInfo.phone}
                            </div>
                            <div>
                                <span className="font-semibold">Fax:</span>{" "}
                                {data.contactInfo.fax}
                            </div>
                        </div>
                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-6">
                            {data.socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="text-pink-400 hover:text-pink-300 transition-colors"
                                    aria-label={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SocialIcon icon={social.icon} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Sections */}
                    {data.sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-3xl font-light text-white mb-4">
                                {section.title}
                            </h3>
                            {section.links && (
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.url}
                                                className="text-pink-400 hover:text-pink-300 transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* Disclaimer */}
                <div className="mb-6">
                    <p className="text-base font-normal text-gray-300 leading-relaxed">
                        {data.disclaimer}
                    </p>
                </div>

                {/* Additional Services */}
                <div className="mb-8">
                    <p className="text-base font-normal text-gray-300 leading-relaxed">
                        <span className="font-semibold">
                            {data.additionalServices.text}
                        </span>{" "}
                        Our sister company{" "}
                        <a
                            href={data.additionalServices.companyUrl}
                            className="text-pink-400 hover:text-pink-300 transition-colors underline"
                        >
                            {data.additionalServices.companyName}
                        </a>{" "}
                        {data.additionalServices.description}
                    </p>
                </div>

                {/* Divider */}
                <hr className="border-gray-600 mb-6" />

                {/* Bottom Section */}
                <div className="flex flex-col justify-between items-center space-y-4 md:space-y-0">
                    {/* Legal Links */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                        {data.legalLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                className="text-xs font-normal text-pink-300 hover:text-pink-200 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-gray-300 mt-3">
                        {data.copyright}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
