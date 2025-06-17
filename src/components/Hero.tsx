import type { HeroProps } from "../interfaces";

export const Hero: React.FC<HeroProps> = ({
    backgroundClass = "bg-gray-800",
    wrapperClass = "",
    title,
    titleClass = "text-4xl font-extrabold tracking-tight text-white",
    subtitle,
    subtitleClass = "mt-4 text-lg text-gray-200",
    buttons = [],
}) => {
    return (
        <section
            className={`${backgroundClass} bg-[length:cover] bg-[repeat:no-repeat] min-h-[50vh] flex items-center justify-center bg-fixed`}
        >
            <div
                className={`w-full h-full text-center bg-[rgba(68,72,90,0.45)] ${wrapperClass}`}
            >
                {title && <h1 className={titleClass}>{title}</h1>}
                {subtitle && <p className={subtitleClass}>{subtitle}</p>}
                {buttons.length > 0 && (
                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        {buttons.map((btn, idx) => {
                            const baseClasses =
                                "inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-5xl focus:outline-none focus:ring-2 focus:ring-offset-2";
                            const classes = `${baseClasses} ${
                                btn.className ||
                                "bg-white text-gray-800 hover:bg-gray-100"
                            }`;

                            // If href is provided, render an anchor
                            if (btn.href) {
                                return (
                                    <a
                                        key={idx}
                                        href={btn.href}
                                        className={classes}
                                        onClick={btn.onClick} // Add onClick for links if defined
                                    >
                                        {btn.text}
                                    </a>
                                );
                            }

                            // Otherwise render a button with onClick
                            return (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={btn.onClick}
                                    className={classes}
                                >
                                    {btn.text}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};
