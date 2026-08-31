import './globals.css';
import { cookies } from 'next/headers';

export const metadata = {
    title: 'Enciclopédia dos Bruxos',
    description: 'Bruxos no NEXT.js por Danpro e Urbano.',
};

export default async function RootLayout({ children }) {
    const cookieStore = await cookies();
    const tema = cookieStore.get('theme')?.value === 'light' ? 'light' : 'dark';

    return (
        <html lang="pt-BR" data-theme={tema}>
            <body>{children}</body>
        </html>
    );
}
