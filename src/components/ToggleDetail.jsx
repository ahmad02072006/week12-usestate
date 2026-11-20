import { useState } from 'react';

export default function ToggleDetail() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="exercise-card toggle-card">
      <h2>Exercise 1: Toggle</h2>
      <button className="button button-primary" onClick={() => setIsVisible(prev => !prev)}>
        {isVisible ? 'Hide details' : 'Show details'}
      </button>
      {isVisible && (
        <p className="toggle-detail">React state enables dynamic UIs without page reloads.</p>
      )}
    </section>
  );
}