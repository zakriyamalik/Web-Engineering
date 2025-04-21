import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ConceptsOverviewPage from './pages/ConceptsOverviewPage';
import ConceptDetailPage from './pages/ConceptDetailPage';
import ExamplesPage from './pages/ExamplesPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>        
        <Route index element={<HomePage />} />
        <Route path="concepts" element={<ConceptsOverviewPage />} />
        <Route path="concepts/:conceptId" element={<ConceptDetailPage />}>          
          <Route path="examples" element={<ExamplesPage />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}