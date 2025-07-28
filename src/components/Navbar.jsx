import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png"
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative border-b shadow-md px-6 py-2 flex items-center justify-between">
      <div className="text-xl font-bold">
        <img src={Logo} alt="Logo" className="h-8" />
      </div>

      {/* Mobile Burger Icon */}
      <div className="md:hidden">
        <div onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-10 h-10" /> : <Menu className="w-10 h-10" />}
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <li><a href="#">Головна</a></li>
        <li><a href="#">Про нас</a></li>
        <li><a href="#">Контакти</a></li>
      </ul>

      {/* Mobile Menu (dropdown) */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full shadow-md md:hidden flex flex-col items-center gap-4 px-4 py-3">
          <li><a href="#">Головна</a></li>
          <li><a href="#">Про нас</a></li>
          <li><a href="#">Контакти</a></li>
        </ul>
      )}
    </nav>
  );
};
