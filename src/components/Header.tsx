import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Ship,
  Phone,
  Mail,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-red-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 border-b border-red-500">
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:+85252089745" className="flex items-center gap-2 hover:text-red-200 transition">
              <Phone size={16} />
              <span>+85252089745</span>
            </a>
            <a href="mailto:info@chinecargologistique.com" className="flex items-center gap-2 hover:text-red-200 transition">
              <Mail size={16} />
              <span>info@chinecargologistique.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-red-200 transition"><Facebook size={18} /></a>
            <a href="#" className="hover:text-red-200 transition"><Twitter size={18} /></a>
            <a href="#" className="hover:text-red-200 transition"><Instagram size={18} /></a>
            <a href="#" className="hover:text-red-200 transition"><Linkedin size={18} /></a>
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <Ship size={40} className="text-white" />
            <div>
              <h1 className="text-2xl font-bold">Chine Cargo Logistique</h1>
              <p className="text-xs text-red-100">International Shipping Solutions</p>
            </div>
          </Link>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="hover:text-red-200 transition font-medium">Home</Link>
            <Link to="/about" className="hover:text-red-200 transition font-medium">About</Link>
            <Link to="/services" className="hover:text-red-200 transition font-medium">Services</Link>
            <Link to="/contact" className="hover:text-red-200 transition font-medium">Contact</Link>
            <Link to="/track" className="bg-white text-red-600 px-6 py-2 rounded-md font-semibold hover:bg-red-50 transition">Track & Trace</Link>
          </nav>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden bg-red-700 border-t border-red-500">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/" className="hover:text-red-200 transition font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-red-200 transition font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/services" className="hover:text-red-200 transition font-medium" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/contact" className="hover:text-red-200 transition font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/track" className="bg-white text-red-600 px-6 py-2 rounded-md font-semibold text-center" onClick={() => setMobileMenuOpen(false)}>Track & Trace</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
