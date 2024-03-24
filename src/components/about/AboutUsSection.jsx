import React from 'react';

// Define the AboutUsSection functional component
export const AboutUsSection = () => {
    // Define content for the About Us section
    const content = [
        {
            title: "Our Story",
            description: "At Flavor Voyage, we are passionate about bringing unique flavors from around the world to your table. Our journey began with a simple idea: to create a dining experience that transports our guests to distant lands through the magic of taste."
        },
        {
            title: "Our Mission",
            description: "Our chefs meticulously craft each dish to capture the essence of its origin, using authentic ingredients and traditional cooking methods. Whether you crave the bold spices of Indian curry, the delicate flavors of Japanese sushi, or the comforting warmth of Italian pasta, we have something to tantalize every palate."
        },
        {
            title: "Join Us",
            description: "Join us on a culinary adventure and explore the diverse flavors of the world with Flavor Voyage."
        }
    ];

    // Return the JSX structure for the About Us section
    return (
        <section className={`about-us-section min-h-screen flex justify-center items-center bg-black text-white py-32 px-4 md:py-16 md:px-8 sm:py-40`}>
            <div className="container mx-auto">
                {/* Map through the content array to render each item */}
                {content.map((item, index) => (
                    <div key={index} className="mb-8 md:mb-12">
                        {/* Title of the section */}
                        <h2 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl overflow-hidden text-[#eba000] ">
                            {/* Animate each character of the title */}
                            {item.title.split('').map((char, index) => (
                                <span
                                    key={`${char}-${index}`}
                                    className="animate-text-reveal inline-block"
                                    style={{ animationDelay: `${0.1 * index}s` }}
                                >
                                    {/* Replace space with non-breaking space character */}
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </h2>
                        {/* Description of the section */}
                        <p className="text-lg leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Export the AboutUsSection component as default
export default AboutUsSection;
