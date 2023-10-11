import { PlayerSummary } from 'components/PlayerSummary';
import styles from './styles.module.css';
import { useState } from 'react';
import { opponentStats, playerStats } from 'shared/characters';
import { BattleMenu } from 'components/BattleMenu';

export const Battle = () => {
    const [opponentHealth, setOpponentHealth] = useState(
        opponentStats.maxHealth,
    );
    const [playerHealth, setPlayerHealth] = useState(
        playerStats.maxHealth,
    );

    return (
        <div className={styles.main}>
            {/* Opponent stats / summary */}
            <div className={styles.opponent}>
                <div className={styles.summary}>
                    <PlayerSummary
                        main={false}
                        health={opponentHealth}
                        name={opponentStats.name}
                        level={opponentStats.level}
                        maxHealth={opponentStats.maxHealth}
                    />
                </div>
            </div>
            {/* Player stats / summary */}
            <div className={styles.user}>
                <div className={styles.summary}>
                    <PlayerSummary
                        main={true}
                        health={playerHealth}
                        name={playerStats.name}
                        level={playerStats.level}
                        maxHealth={playerStats.maxHealth}
                    />
                </div>
            </div>

            <div className={styles.hudChild}>
                <BattleMenu
                    onAttack={() => console.log('Attack!')}
                    onMagic={() => console.log('Magic!')}
                    onHeal={() => console.log('Heal!')}
                />
            </div>
        </div>
    );
};
