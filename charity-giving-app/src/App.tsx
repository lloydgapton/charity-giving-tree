import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import CharityDetailPage from '../src/charity/[slug]/page';
import React from 'react';
import Header from './components/header';
export default function App() {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient && (
                <>
                    <Header variant="light" />
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/charity/:slug" element={<CharityDetailPage />} />
                    </Routes>
                </>
            )}
        </>
    );
}
