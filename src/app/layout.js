import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
    title: 'Enciclopédia dos Bruxos',
    description: 'Bruxos no NEXT.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
