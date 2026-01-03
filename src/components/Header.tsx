import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo1.png";
const navItems = [
  { name: "Trang Chủ", href: "#home" },
  { name: "Giới Thiệu", href: "#about" },
  { name: "Dịch Vụ", href: "#services" },
  { name: "Hình Ảnh", href: "#gallery" },
  { name: "Liên Hệ", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom mx-auto px-4 md:px-8">
       <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">

          {/* Logo */}
        <a
  href="#home"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("#home");
  }}
  className="flex items-center space-x-2 shrink-0"
>
 <img
  src={logo}
  alt="car auto"
  className="block w-auto h-16 sm:h-20 md:h-24 lg:h-24 object-contain"
/>

</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+84975416999" className="flex items-center space-x-2 text-primary">
              <Phone size={18} />
              <span className="font-semibold">0975 416 999</span>
            </a>
            <Button
              className="btn-gold"
              onClick={() => scrollToSection("#contact")}
            >
              Đặt Lịch Ngay
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-md border-t border-border">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="px-6 py-3 text-foreground/80 hover:text-primary hover:bg-secondary transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-6 py-4 border-t border-border mt-2">
                <a href="tel:+84975416999" className="flex items-center space-x-2 text-primary mb-4">
                  <Phone size={18} />
                  <span className="font-semibold">0975 416 999</span>
                </a>
                <Button
                  className="btn-gold w-full"
                  onClick={() => scrollToSection("#contact")}
                >
                  Đặt Lịch Ngay
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;