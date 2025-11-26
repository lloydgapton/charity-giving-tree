import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Landing';
import CharityPage from './pages/Charity/[slug]/Charity';

function App() {
  return (
    <>
        <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/charity/:slug" element={<CharityPage />} />
      </Routes>
    
        <Link to="#/charity/hope-sprouts"></Link>
        <Link to="#/charity/the-giving-grove"></Link>
        <Link to="#/charity/evergreen-foundation"></Link>
        <Link to="#/charity/golden-roots-initiative"></Link>
        <Link to="#/charity/community-canopy"></Link>
   </>
  );

}

export default App;

