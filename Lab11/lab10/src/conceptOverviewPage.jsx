import { Link } from 'react-router-dom';
import { conceptsData } from '../data/conceptsData';

export default function ConceptsOverviewPage() {
  return (
    <>
      <h1>Concepts Overview</h1>
      <ul>
        {conceptsData.map(concept => (
          <li key={concept.id}>
            <Link to={concept.id}>{concept.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}