import { useState } from 'react';
import { StartMenu } from 'components/StartMenu';
import styles from './styles.module.css';
import { BattleMenu } from 'components/BattleMenu';

export const App = () => {
    const [mode, setMode] = useState('start');

    return (
        <div className={styles.main}>
            {mode === 'start' && (
                <StartMenu onStartClick={() => setMode('battle')} />
            )}

            {mode === 'battle' && <BattleMenu />}

            {mode === 'gameOver' && <>Game Over</>}
        </div>
    );
};
