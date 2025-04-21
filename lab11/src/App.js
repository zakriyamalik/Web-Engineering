import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ConceptsOverviewPage from './pages/ConceptsOverviewPage';
import ConceptDetailPage from './pages/ConceptDetailPage';
import ExamplesPage from './pages/ExamplePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      {/* Shared layout for main pages */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="concepts" element={<ConceptsOverviewPage />} />
        <Route path="concepts/:conceptId" element={<ConceptDetailPage />}>
          <Route path="examples" element={<ExamplesPage />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
      </Route>

      {/* Catch-all 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}





