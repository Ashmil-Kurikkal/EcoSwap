import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Directory from './pages/Directory';
import SubmitSwap from './pages/SubmitSwap';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 w-full max-w-5xl mx-auto p-6 md:p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/swaps" element={<Directory />} />
            <Route path="/submit" element={<SubmitSwap />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}