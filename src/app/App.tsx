import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { MainPage } from '@/pages/MainPage';
import { ProjectsPage } from '@/features/projects/ProjectsPage';
import { NotFound } from '@/pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
