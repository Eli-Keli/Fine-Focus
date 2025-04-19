import TeamImg from '../assets/images/team_celfie2.png';
import BritishCouncil from "@/assets/logos/png/BritishCouncil_Logo.png";
import ClimateKic from "@/assets/logos/png/climate_kic.png";
import EU from "@/assets/logos/png/eu_logo.png";
import GrowthAfrica from "@/assets/logos/png/GrowthAfrica.png";
import Food4Education from "@/assets/logos/png/food4E_logo.png";
import Mogo from "@/assets/logos/svg/mogo-logo.svg";
import Blankets from "@/assets/logos/png/Blankets_logo.png";
import GooglePhotos from "@/assets/logos/png/GooglePhotos_logo.png";
import Nivea from "@/assets/logos/png/Nivea_logo.png";
import CeraVe from "@/assets/logos/png/CeraVe_logo.png";
import GoodTimesAfrica from "@/assets/logos/png/GoodTimesAfrica_logo.png";
import BelgiumEmbassy from "@/assets/logos/png/BelgiumEmbassy_logo.png";
import Marathon from "@/assets/logos/png/Marathon_logo.png";

const brands = [
    BritishCouncil,
    Food4Education,
    ClimateKic,
    EU,
    GrowthAfrica,
    Mogo,
    Blankets,
    GooglePhotos,
    Nivea,
    CeraVe,
    GoodTimesAfrica,
    BelgiumEmbassy,
    Marathon,
]

const AboutSection = () => {
    return (
        <section id="about" className="section-padding bg-dark">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">
                            <span className="text-gradient">About</span> Fine Focus Productions
                        </h2>

                        <p className="text-gray-300 mb-6">
                            At Fine Focus Productions, we are a small but passionate team of two Creative Directors dedicated to telling your story with authenticity and creativity.
                        </p>

                        <p className="text-gray-300 mb-6">
                            Since 2019, we've been crafting premium videography and photography that captures the heart of your brand, combining technical expertise with a personal touch to deliver exceptional results.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 mt-10">
                            <div>
                                <h3 className="text-gold font-serif text-xl mb-2">Authenticity</h3>
                                <p className="text-gray-400">We believe in capturing genuine moments and real emotions in every project.</p>
                            </div>

                            <div>
                                <h3 className="text-gold font-serif text-xl mb-2">Innovation</h3>
                                <p className="text-gray-400">We constantly explore new techniques and approaches to visual storytelling.</p>
                            </div>

                            <div>
                                <h3 className="text-gold font-serif text-xl mb-2">Excellence</h3>
                                <p className="text-gray-400">We are committed to delivering the highest quality in every aspect of our work.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-fade-in-right">
                        <div className="aspect-[4/5] bg-dark-light rounded-lg overflow-hidden relative z-10">
                            <img
                                src={TeamImg}
                                alt="Team"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                        <div className="absolute top-10 -right-10 w-4/5 h-4/5 border-2 border-gold rounded-lg -z-0"></div>
                    </div>
                </div>

                <div className="mt-24">
                    <h3 className="text-center text-xl font-serif text-gold mb-10">Trusted by Leading Brands We've worked with</h3>

                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 opacity-70">
                        {brands.map((brand, index) => (
                            <div
                                key={index}
                                className="w-52 h-40 flex items-center justify-center"
                            >
                                <img src={brand} alt="Brand Logo" className="max-h-full max-w-full object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
