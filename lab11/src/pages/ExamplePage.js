import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { conceptsData } from '../data/conceptsData';

export default function ExamplesPage() {
  const { conceptId } = useParams();
  const navigate = useNavigate();
  const concept = conceptsData.find(c => c.id === conceptId);

  if (!concept) {
    return <p>Concept not found.</p>;
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>Examples for {concept.name}</h3>
      <ul>
        {concept.examples.map((ex, idx) => (
          <li key={idx}>
            <code>{ex}</code>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('..')}>Back to Concept Details</button>
    </div>
  );
}
