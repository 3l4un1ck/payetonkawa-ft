'use client';

import { useRef, useEffect } from 'react';
import { Award, Leaf, Sprout } from 'lucide-react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
}

const FeatureCard = ({ icon, title, description, bgColor }: FeatureCardProps) => (
    <div className="text-center p-6 bg-white rounded-2xl shadow-lg card-3d">
        <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
            {icon}
        </div>
        <h3 className="text-xl font-display font-semibold text-[#6F4E37] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default function AboutSection() {
    const revealRef = useRef(null);
    const revealRef2 = useRef(null);

    return (
        <section id="about" className="py-20 bg-[#f7efe6] mt-4">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image à gauche */}
                    <div className="reveal" ref={revealRef}>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                                alt="Matériel de torréfaction café"
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#6F4E37]/20 to-transparent rounded-3xl"></div>
                        </div>
                    </div>

                    {/* Texte à droite */}
                    <div className="space-y-6 reveal" ref={revealRef2}>
                        <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#6F4E37]">
                            Un Café qui a du Sens
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Plus qu’un simple café, <strong>PayetonKawa</strong> défend une vision durable : des produits bio, un commerce équitable et une traçabilité totale.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Nous travaillons en direct avec des coopératives locales, en réduisant au maximum notre empreinte carbone. Parce qu’un bon café commence par un bon choix.
                        </p>

                        {/* Feature cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            <FeatureCard
                                icon={<Sprout className="text-white" size={24} />}
                                title="Cafés à petits prix"
                                description="Du café artisanal à bon prix ? C'est possible ! Découvrez notre sélection de cafés économiques."
                                bgColor="bg-[#6F4E37]"
                            />
                            <FeatureCard
                                icon={<Leaf className="text-white" size={24} />}
                                title="Cafés BIO équitables"
                                description="Notre sélection de café en grain bio est composée de cafés issus de l'agriculture responsable."
                                bgColor="bg-[#b08b5c]"
                            />
                            <FeatureCard
                                icon={<Award className="text-white" size={24} />}
                                title="Cafés d'exception"
                                description="Notre gamme de café d'exception est composée de cafés rares de petites exploitations."
                                bgColor="bg-[#4b3621]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
