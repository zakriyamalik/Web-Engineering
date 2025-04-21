import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { conceptsData } from '../data/conceptsData';

export default function ConceptDetailPage() {
  const { conceptId } = useParams();
  const concept = conceptsData.find(c => c.id === conceptId);

  if (!concept) {
    return <p>Concept not found.</p>;
  }

  return (
    <div>
      <h2>{concept.name}</h2>
      <p>{concept.description}</p>
      <Link to="examples">View Examples</Link>

      {/* Nested examples will render here */}
      <Outlet />
    </div>
  );
}
