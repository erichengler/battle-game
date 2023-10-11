import styles from './styles.module.css';

export const Bar = ({ health, maxHealth, label }) => (
    <div className={styles.main}>
        <div className={styles.label}>{label}</div>
        <div className={styles.max}>
            <div
                className={styles.value}
                style={{ width: `${(health / maxHealth) * 100}%` }}
            ></div>
        </div>
    </div>
);
