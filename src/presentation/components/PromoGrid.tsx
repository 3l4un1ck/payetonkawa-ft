'use client';

import Image from 'next/image';
import Link from 'next/link';

type PromoItem = {
    id: number;
    title?: string;
    description?: string;
    image: string;
    buttonLabel?: string;
    buttonHref?: string;
};

const promoItems: PromoItem[] = [
    {
        id: 1,
        image: '/images/shiny-blend.jpg',
    },
    {
        id: 2,
        title: 'Découvrez nos bouilloires',
        image: '/images/bouilloires.jpg',
        buttonLabel: 'JE FONCE',
        buttonHref: '/bouilloires',
    },
    {
        id: 3,
        title: 'COMANDANTE',
        image: '/images/comandante.jpg',
        buttonLabel: 'JE DÉCOUVRE',
        buttonHref: '/comandante',
    },
    {
        id: 4,
        title: 'My Perfect Coffee',
        description: 'Répondez à quelques questions pour trouver le café qui vous convient.',
        image: '/images/perfect-coffee.jpg',
        buttonHref: '/quizz',
    },
];

export default function PromoGrid() {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:row-span-2 rounded-2xl overflow-hidden relative">
                    <Image
                        src={promoItems[0].image}
                        alt="Promo principale"
                        fill
                        className="object-cover"
                    />
                </div>

                {promoItems.slice(1).map((item) => (
                    <div
                        key={item.id}
                        className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[1.2/1]"
                    >
                        <Image
                            src={item.image}
                            alt={item.title ?? ''}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 text-white flex flex-col justify-center items-center p-4 text-center">
                            {item.title && <h3 className="text-lg font-bold mb-2">{item.title}</h3>}
                            {item.description && (
                                <p className="text-sm mb-2">{item.description}</p>
                            )}
                            {item.buttonLabel && item.buttonHref && (
                                <Link
                                    href={item.buttonHref}
                                    className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full mt-2 hover:bg-gray-200 transition"
                                >
                                    {item.buttonLabel}
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
