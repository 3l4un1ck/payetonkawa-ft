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
        <h3 className="text-xl font-display font-semibold text-coffee-brown mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default function AboutSection() {
    const revealRef = useRef(null);
    const revealRef2 = useRef(null);

    // Exemple d'effet d'apparition au scroll (si tu veux ajouter ça plus tard)
    useEffect(() => {
        // Tu peux ajouter intersection observer ici ou animation
    }, []);

    return (
        <section id="about" className="py-20 bg-coffee-cream mt-4">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image à gauche */}
                    <div className="reveal" ref={revealRef}>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                                alt="Professional coffee roasting equipment"
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-coffee-brown/20 to-transparent rounded-3xl"></div>
                        </div>
                    </div>

                    {/* Texte + Features */}
                    <div className="space-y-6 reveal" ref={revealRef2}>
                        <h2 className="text-4xl lg:text-5xl font-display font-bold text-coffee-brown">
                            Who We Are
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We are a passionate team dedicated to delivering innovative solutions that make life
                            better for the people we serve. Our vision is to create a future where technology
                            brings communities closer together.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            At the heart of everything we do is our commitment to excellence, innovation, and
                            integrity. Join us as we continue to grow and make a lasting impact.
                        </p>

                        {/*/!* Feature Cards *!/*/}
                        {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">*/}
                        {/*    <FeatureCard*/}
                        {/*        icon={<Sprout className="text-white" size={24} />}*/}
                        {/*        title="Cafés à petits prix"*/}
                        {/*        description="Du café artisanal à bon prix ? C'est possible ! Découvrez notre sélection de cafés économiques."*/}
                        {/*        bgColor="bg-coffee-brown"*/}
                        {/*    />*/}
                        {/*    <FeatureCard*/}
                        {/*        icon={<Leaf className="text-white" size={24} />}*/}
                        {/*        title="Cafés BIO équitables"*/}
                        {/*        description="Notre sélection de café en grain bio est composée de cafés issus de l'agriculture responsable."*/}
                        {/*        bgColor="bg-coffee-accent"*/}
                        {/*    />*/}
                        {/*    <FeatureCard*/}
                        {/*        icon={<Award className="text-white" size={24} />}*/}
                        {/*        title="Cafés d'exception"*/}
                        {/*        description="Notre gamme de café d'exception est composée de cafés rares de petites exploitations."*/}
                        {/*        bgColor="bg-coffee-dark"*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>
        </section>
    );
}
