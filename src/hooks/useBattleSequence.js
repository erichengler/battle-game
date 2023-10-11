import { useEffect, useState } from 'react';
import { attack, wait, opponentStats, playerStats } from 'shared';

export const useBattleSequence = sequence => {
    const [turn, setTurn] = useState(0);
    const [inSequence, setInSequence] = useState(false);

    const [playerHealth, setPlayerHealth] = useState(
        playerStats.maxHealth,
    );
    const [opponentHealth, setOpponentHealth] = useState(
        opponentStats.maxHealth,
    );

    const [announcerMessage, setAnnouncerMessage] = useState('');

    const [playerAnimation, setPlayerAnimation] = useState('static');
    const [opponentAnimation, setOpponentAnimation] = useState('static');

    useEffect(() => {
        const { mode, turn } = sequence;

        // Who is the attacker / receiver based on the turn
        if (mode) {
            const attacker = turn === 0 ? playerStats : opponentStats;
            const receiver = turn === 0 ? opponentStats : playerStats;

            switch (mode) {
                // if the mode is attack, calculate damage
                case 'attack':
                    const damage = attack({ attacker, receiver });

                    (async () => {
                        setInSequence(true);
                        setAnnouncerMessage(
                            `${attacker.name} has chosen to attack!`,
                        );
                        await wait(1000);

                        // set attack animation
                        turn === 0
                            ? setPlayerAnimation('attack')
                            : setOpponentAnimation('attack');
                        await wait(100);

                        // stop attack animation
                        turn === 0
                            ? setPlayerAnimation('static')
                            : setOpponentAnimation('static');
                        await wait(500);

                        // set damage animation to opposite character
                        turn === 0
                            ? setOpponentAnimation('damage')
                            : setPlayerAnimation('damage');
                        await wait(750);

                        // stop damage animation and update message
                        turn === 0
                            ? setOpponentAnimation('static')
                            : setPlayerAnimation('static');
                        setAnnouncerMessage(`${receiver.name} felt that!`);

                        // calculate hp loss for character that got hit
                        turn === 0
                            ? setOpponentHealth(health =>
                                  health - damage > 0
                                      ? health - damage
                                      : 0,
                              )
                            : setPlayerHealth(health =>
                                  health - damage > 0
                                      ? health - damage
                                      : 0,
                              );
                        await wait(2000);

                        // update message
                        setAnnouncerMessage(
                            `Now it's ${receiver.name}'s turn!`,
                        );
                        await wait(1500);

                        // change to other characters turn
                        setTurn(turn === 0 ? 1 : 0);
                        setInSequence(false);
                    })();

                    break;

                default:
                    break;
            }
        }
    }, [sequence]);

    return {
        turn,
        inSequence,
        playerHealth,
        opponentHealth,
        playerAnimation,
        opponentAnimation,
        announcerMessage,
    };
};
