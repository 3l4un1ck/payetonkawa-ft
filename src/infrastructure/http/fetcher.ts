export async function fetcher<T>(base_url: string, url: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${base_url}${url}`, {
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
