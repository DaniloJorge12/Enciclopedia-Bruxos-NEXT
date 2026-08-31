'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import styles from './CharacterModal.module.css';
import toast from 'react-hot-toast';

const FAVORITOS_KEY = 'wizarddex-favoritos';

function pegarFavoritos() {
    if (typeof window === 'undefined') return [];

    try {
        return JSON.parse(sessionStorage.getItem(FAVORITOS_KEY) || '[]');
    } catch {
        return [];
    }
}

function salvarFavoritos(favoritos) {
    sessionStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritos));
}

export default function CharacterModal({ personagem, onClose }) {
    const [favoritado, setFavoritado] = useState(false);

    useEffect(() => {
        if (!personagem) return;

        const favoritos = pegarFavoritos();
        setFavoritado(favoritos.includes(personagem.id));
    }, [personagem]);

    if (!personagem) return null;

    function alternarFavorito() {
        const favoritos = pegarFavoritos();
        const jaFavoritado = favoritos.includes(personagem.id);

        const novosFavoritos = jaFavoritado
            ? favoritos.filter((id) => id !== personagem.id)
            : [...favoritos, personagem.id];

        salvarFavoritos(novosFavoritos);
        setFavoritado(!jaFavoritado);

        if (jaFavoritado) {
            toast('Personagem removido dos favoritos.', { icon: '💔' });
        } else {
            toast('Personagem adicionado aos favoritos!', { icon: '❤️' });
        }
    }

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
                <button className={styles.fechar} onClick={onClose} type="button" aria-label="Fechar">
                    ×
                </button>

                <div className={styles.imagemContainer}>
                    {personagem.image ? (
                        <Image
                            src={personagem.image}
                            alt={personagem.name || 'Personagem'}
                            fill
                            sizes="280px"
                            className={styles.imagem}
                        />
                    ) : (
                        <Image
                            src="/images/sem-foto.png"
                            alt="Personagem sem imagem"
                            fill
                            sizes="280px"
                            className={styles.imagem}
                        />
                    )}
                </div>

                <div className={styles.informacoes}>
                    <h2>{personagem.name || 'Nome desconhecido'}</h2>
                    <p><strong>Casa:</strong> {personagem.house || 'Não informada'}</p>
                    <p><strong>Espécie:</strong> {personagem.species || 'Não informada'}</p>
                    <p><strong>Patrono:</strong> {personagem.patronus || 'Não informado'}</p>
                    <p><strong>Data de nascimento:</strong> {personagem.dateOfBirth || 'Não informada'}</p>
                    <p><strong>Cor dos olhos:</strong> {personagem.eyeColour || 'Não informada'}</p>
                    <p><strong>Cor do cabelo:</strong> {personagem.hairColour || 'Não informada'}</p>
                    <p><strong>Ator/Atriz:</strong> {personagem.actor || 'Não informado'}</p>
                    <p><strong>Situação:</strong> {personagem.alive ? 'Vivo' : 'Morto'}</p>

                    <button
                        className={`${styles.favorito} ${favoritado ? styles.favoritado : ''}`}
                        onClick={alternarFavorito}
                        type="button"
                        aria-label={favoritado ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                    >
                        <Heart size={26} fill={favoritado ? 'currentColor' : 'none'} />
                    </button>
                </div>
            </div>
        </div>
    );
}
