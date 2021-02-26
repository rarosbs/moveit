import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import sytles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);
    return (
        <div className={sytles.overlay}>
            <div className={sytles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcancou um novo nível.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>
    )
}