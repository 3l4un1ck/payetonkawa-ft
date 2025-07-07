"use client";

export default function Newsletter() {
    return (
        <section
            className="py-16 px-4"
            style={{ backgroundColor: "#f7efe6" }} // coffee cream
        >
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#4b3621]">Inscris-toi à notre Newsletter</h2>
                <p className="mt-4 text-[#6F4E37] text-md">
                    Reçois nos offres spéciales, nouveautés et conseils café directement dans ta boîte mail.
                </p>
                <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Ton adresse email"
                        className="w-full sm:w-2/3 px-4 py-3 rounded-lg border border-[#d3c2b3] focus:outline-none focus:ring-2 focus:ring-[#b08b5c] transition text-[#4b3621] placeholder-[#a89b92]"
                        required
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-[#b08b5c] hover:bg-[#a07847] text-white font-semibold rounded-lg transition"
                    >
                        S’inscrire
                    </button>
                </form>
            </div>
        </section>
    );
}
