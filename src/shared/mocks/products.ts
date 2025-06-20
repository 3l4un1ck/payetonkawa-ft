import { Product } from '@/domain/entities/Product';

export const mockProducts: Product[] = [
    {
        id: '1',
        title: 'Café en Grain Ethiopie Djimmah G5 - Cafe Bonnac | 100% arabica',
        description: 'Un t-shirt en coton bio, confortable et éco-responsable.',
        price: 19.99,
        imageUrl: 'https://www.graindecafe.com/cdn/shop/files/cafe_grain_ethiopie_djimmah.webp?v=1745797253&width=600',
        category: 'Vêtements',
    },
    {
        id: '2',
        title: 'Café en Grain Presto - Blend Pietro | 100% Arabica - Goût Italien',
        description: 'Jean bleu foncé pour un look moderne.',
        price: 49.99,
        imageUrl: 'https://www.graindecafe.com/cdn/shop/files/cafe_grain_blend_pietro.webp?v=1745797914&width=600',
        category: 'Vêtements',
    },
    {
        id: '3',
        title: 'Café en Grain du Brésil Santos Tradition - Café Bonnac | 100% Arabica',
        description: 'Confort optimal pour le sport ou la ville.',
        price: 89.99,
        imageUrl: 'https://www.graindecafe.com/cdn/shop/files/cafe_grain_bresil_santos.webp?v=1745797726&width=600',
        category: 'Chaussures',
    },
];
