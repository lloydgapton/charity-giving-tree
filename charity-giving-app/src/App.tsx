import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Charity from './pages/Charity';
export default function App() {
  return(
    <>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="*" element={<div>Page not found</div>} />
    </Routes>
    </>
  )
}
