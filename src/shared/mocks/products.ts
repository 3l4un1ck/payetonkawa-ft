import { Product } from '@/domain/entities/Product';

export const mockProducts: Product[] = [
    {
        id: '1',
        title: 'T-shirt blanc',
        description: 'Un t-shirt en coton bio, confortable et éco-responsable.',
        price: 19.99,
        imageUrl: 'https://via.placeholder.com/300x300.png?text=T-shirt+blanc',
        category: 'Vêtements',
    },
    {
        id: '2',
        title: 'Jean slim',
        description: 'Jean bleu foncé pour un look moderne.',
        price: 49.99,
        imageUrl: 'https://media.boohoo.com/i/boohooamplience/260325_MOST_LOVED_02_FR_DESK?qlt=default&fmt=auto',
        category: 'Vêtements',
    },
    {
        id: '3',
        title: 'Chaussures de sport',
        description: 'Confort optimal pour le sport ou la ville.',
        price: 89.99,
        imageUrl: 'https://via.placeholder.com/300x300.png?text=Chaussures',
        category: 'Chaussures',
    },
];
