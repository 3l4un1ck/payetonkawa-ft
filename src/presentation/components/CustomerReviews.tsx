'use client';

import {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Star, ChevronLeft, ChevronRight} from 'lucide-react';
import {reviews} from '@/shared/mocks/reviews';

export default function CustomerReviews() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    const next = () => setIndex((prev) => (prev + 1) % reviews.length);

    // Get two consecutive reviews, wrap around if needed
    const getVisibleReviews = () => [
        reviews[index],
        reviews[(index + 1) % reviews.length],
    ];

    return (
        <section className="py-16 bg-gray-50 text-[#6F4E37]">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-10"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    Avis de nos clients <span className="text-[#d7b899]">⭐</span>
                </motion.h2>

                <div className="relative">
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#d7b899] hover:bg-[#b08b5c] text-[#6F4E37] p-2 rounded-full shadow-md z-10"
                        aria-label="Previous review"
                    >
                        <ChevronLeft/>
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#d7b899] hover:bg-[#b08b5c] text-[#6F4E37] p-2 rounded-full shadow-md z-10"
                        aria-label="Next review"
                    >
                        <ChevronRight/>
                    </button>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            className="flex gap-6 justify-center"
                            initial={{opacity: 0, x: 60}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: -60}}
                            transition={{duration: 0.5}}
                        >
                            {getVisibleReviews().map((review) => (
                                <div
                                    key={review.id}
                                    className="bg-white p-8 rounded-2xl shadow-md w-full max-w-xs"
                                >
                                    <div className="flex items-center gap-4 mb-4 justify-center">
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div className="text-left">
                                            <h4 className="font-semibold text-[#6F4E37]">{review.name}</h4>
                                            <div className="flex gap-1 text-yellow-400">
                                                {Array.from({length: review.rating}).map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-yellow-400"/>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-[#8d735a] italic">“{review.comment}”</p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}