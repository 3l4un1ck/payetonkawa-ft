const BASE_URL = 'https://api.maboutique.com';

export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${BASE_URL}${url}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(options?.headers || {}),
        },
    });

    if (!res.ok) {
        throw new Error(`Erreur réseau (${res.status}): ${await res.text()}`);
    }

    return res.json();
}
