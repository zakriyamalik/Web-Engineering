import { useParams, useNavigate } from 'react-router-dom';
import { conceptsData } from '../data/conceptsData';

export default function ExamplesPage() {
  const { conceptId } = useParams();
  const navigate = useNavigate();
  const concept = conceptsData.find(c => c.id === conceptId);

  if (!concept) {
    return <h2>Concept not found.</h2>;
  }

  return (
    <>
      <h2>Examples for {concept.name}</h2>
      <ul>
        {concept.examples.map((ex, idx) => (
          <li key={idx}>{ex}</li>
        ))}
      </ul>
      <button onClick={() => navigate('..')}>Back to Concept Details</button>
    </>
  );
}