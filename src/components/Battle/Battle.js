import { PlayerSummary } from 'components/PlayerSummary';
import styles from './styles.module.css';
import { useState } from 'react';
import { opponentStats, playerStats } from 'shared';
import { BattleMenu } from 'components/BattleMenu';

export const Battle = () => {
    const [opponentHealth, setOpponentHealth] = useState(
        opponentStats.maxHealth,
    );
    const [playerHealth, setPlayerHealth] = useState(
        playerStats.maxHealth,
    );

    return (
        <>
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

            <div className={styles.characters}>
                <div className={styles.gameHeader}>
                    {playerStats.name} vs {opponentStats.name}
                </div>

                <div className={styles.gameImages}>
                    <div className={styles.playerSprite}>
                        <img
                            alt={playerStats.name}
                            src={playerStats.img}
                            // className={styles.}
                        />
                    </div>

                    <div className={styles.opponentSprite}>
                        <img
                            alt={opponentStats.name}
                            src={opponentStats.img}
                            // className={styles.}
                        />
                    </div>
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

                <div className={styles.hud}>
                    <div className={styles.hudChild}>
                        <BattleMenu
                            onAttack={() => console.log('Attack!')}
                            onMagic={() => console.log('Magic!')}
                            onHeal={() => console.log('Heal!')}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
