import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Landing';
import CharityPage from './pages/Charity/[slug]/Charity';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/charity/:slug" element={<CharityPage />} />
    </Routes>
  );
}

export default App;

