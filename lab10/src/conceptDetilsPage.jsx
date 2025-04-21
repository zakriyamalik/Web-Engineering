import { useParams, Link, Outlet } from 'react-router-dom';
import { conceptsData } from '../data/conceptsData';

export default function ConceptDetailPage() {
  const { conceptId } = useParams();
  const concept = conceptsData.find(c => c.id === conceptId);

  if (!concept) {
    return <h2>Concept not found.</h2>;
  }

  return (
    <>
      <h1>{concept.name}</h1>
      <p>{concept.description}</p>
      <Link to="examples">View Examples</Link>
      <Outlet />
    </>
  );
}