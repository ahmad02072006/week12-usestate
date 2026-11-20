import { useState } from 'react';

function PlayerScore({ name, score, onIncrement, onDecrement }) {
  return (
    <div className="player-card">
      <h3>{name}</h3>
      <p className="player-score">{score}</p>
      <div className="score-controls">
        <button className="score-button" onClick={onDecrement} aria-label={`Decrease ${name} score`}>−</button>
        <button className="score-button" onClick={onIncrement} aria-label={`Increase ${name} score`}>+</button>
      </div>
    </div>
  );
}

export default function ScoreBoard() {
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);

  return (
    <section className="exercise-card scoreboard-card">
      <h2>Exercise 3: ScoreBoard</h2>
      <div className="players">
        <PlayerScore
          name="Player 1"
          score={p1}
          onIncrement={() => setP1(p => p + 1)}
          onDecrement={() => setP1(p => p - 1)}
        />
        <PlayerScore
          name="Player 2"
          score={p2}
          onIncrement={() => setP2(p => p + 1)}
          onDecrement={() => setP2(p => p - 1)}
        />
      </div>
      <p className="total-badge">Total <strong>{p1 + p2}</strong></p>
    </section>
  );
}