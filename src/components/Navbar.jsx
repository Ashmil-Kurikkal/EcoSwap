import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-[#FAFAFA] px-6 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-serif tracking-widest uppercase">
          Aera
        </Link>
        <nav className="flex gap-6 md:gap-12 text-xs md:text-sm tracking-[0.1em] uppercase font-medium">
          <Link to="/" className="hover:opacity-60 transition-opacity">Index</Link>
          <Link to="/swaps" className="hover:opacity-60 transition-opacity">Materials</Link>
          <Link to="/submit" className="hover:opacity-60 transition-opacity">Manifesto</Link>
        </nav>
      </div>
    </header>
  );
}