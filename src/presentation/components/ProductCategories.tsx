'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const topCategories = [
    {
        id: 1,
        icon: '/images/P-GRAINS.png',
        title: 'Cafés à petits prix',
        description: `Du café artisanal à bon prix ? C'est possible ! Découvrez notre sélection de cafés économiques, torréfiés avec soin afin de se régaler sans se ruiner.`,
        href: '/cafes-petits-prix',
    },
    {
        id: 2,
        icon: '/images/P-BIO.png',
        title: 'Cafés BIO équitables',
        description: `Notre sélection de café en grain bio est certifiée biologique par le label Ecocert afin de garantir une agriculture respectueuse de l’environnement.`,
        href: '/cafes-bio',
    },
    {
        id: 3,
        icon: '/images/P-LOUPE.png',
        title: 'Cafés d’exception',
        description: `Notre gamme de café d’exception est composée de cafés issus de petites productions et de grande renommée aux profils gustatifs remarquables (SCA : 80+/100).`,
        href: '/cafes-exception',
    },
];

const bottomCategories = [
    {
        id: 1,
        image: '/images/HP-CAFE-GR.avif',
        title: 'Café en grain fraîchement torréfié',
        href: '/collections/acheter-cafe-en-grain',
    },
    {
        id: 2,
        image: '/images/cafemoulu.jpg',
        title: 'Nos Cafés Moulus',
        href: '/collections/cafe-moulu',
    },
    {
        id: 3,
        image: '/images/COL-CUILL-T.avif',
        title: 'Boutique des thés',
        href: '/collections/thes',
    },
    {
        id: 4,
        image: '/images/COL-CHOCS.avif',
        title: 'Chocolatiers – tablettes de chocolat grand cru',
        href: '/collections/chocolat',
    },
    {
        id: 5,
        image: '/images/COL-CAFE-VERT.avif',
        title: 'Café vert',
        href: '/collections/cafe-vert',
    },
    {
        id: 6,
        image: '/images/COL-ENT-CAF.avif',
        title: 'Machine à café à grains',
        href: '/collections/machine-cafe',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6 }
    }),
};

export default function ProductCategories() {
    return (
        <section className="py-16 bg-white text-[#6F4E37]">
            {/* Section 1 */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
                {topCategories.map((cat, i) => (
                    <motion.div
                        key={cat.id}
                        className="bg-white rounded-2xl shadow-2xl p-6 text-center flex flex-col items-center"
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                    >
                        <div className="w-30 h-30 relative mb-4">
                            <Image src={cat.icon} alt={cat.title} width={120} height={120}/>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-[#6F4E37]">{cat.title}</h3>
                        <p className="text-sm text-[#8d735a] mb-4">{cat.description}</p>
                        <Link
                            href={cat.href}
                            className="bg-[#d7b899] hover:bg-[#b08b5c] text-[#6F4E37] px-6 py-2 rounded-full text-sm font-semibold transition"
                        >
                            Découvrir
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Section 2 */}
            <div className="max-w-6xl mx-auto mt-16 px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-[#6F4E37]">Nos collections</h2>
                    <Link
                        href="/collections"
                        className="text-sm text-[#6F4E37] hover:underline"
                    >
                        Voir tout
                    </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {bottomCategories.map((cat, i) => (
                        <motion.div
                            key={cat.id}
                            className="flex flex-col items-center text-center hover:opacity-90 transition"
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                        >
                            <Link href={cat.href} className="w-full">
                                <div className="w-full aspect-square relative rounded-xl overflow-hidden mb-2">
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-sm font-medium mt-2 text-[#6F4E37]">{cat.title}</p>
                                <span className="text-xs text-[#8d735a]">Voir la collection →</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
