import { Bar } from 'components/Bar';
import styles from './styles.module.css';

const red = '#832200';
const blue = '#1953cb';

export const PlayerSummary = ({
    main,
    name,
    level,
    health,
    maxHealth,
}) => {
    return (
        <div
            // If main prop is true, return red, otherwise return blue
            style={{ backgroundColor: main ? red : blue }}
            className={styles.main}
        >
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div className={styles.level}>Lvl: {level}</div>
            </div>

            <div className={styles.health}>
                <Bar label="HP" health={health} maxHealth={maxHealth} />
            </div>
        </div>
    );
};
