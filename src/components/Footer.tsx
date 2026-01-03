import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import logo from "@/assets/logo1.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const TikTokIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M33.5 8c1.7 3.1 4.2 5.5 7.5 6.4V20c-3.5-.1-6.7-1.3-9.5-3.4v15.2c0 7.1-5.8 12.2-12.8 12.2S6 39 6 31.9c0-7.1 5.8-12.9 12.9-12.9.7 0 1.4.1 2.1.2v6.2c-.7-.2-1.4-.3-2.1-.3-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5c3.6 0 6.9-2.7 6.9-7.2V8h7.6Z" />
    </svg>
  );
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-4">
              <img src={logo} alt="car auto" width={150} height={150} />
            </a>
            <p className="text-muted-foreground mb-6">
              Dịch vụ chăm sóc và độ xe chuyên nghiệp hàng đầu. Mang đến sự hoàn
              hảo cho chiếc xe của bạn.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578674345307&mibextid=wwXIfr&rdid=7NVtLvWa04PbCNLe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DShA3peyR%2F%3Fmibextid%3DwwXIfr#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@carcare819"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Youtube"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-3">
              {[
                { name: "Trang Chủ", href: "#home" },
                { name: "Giới Thiệu", href: "#about" },
                { name: "Dịch Vụ", href: "#services" },
                { name: "Hình Ảnh", href: "#gallery" },
                { name: "Liên Hệ", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Dịch Vụ</h4>
            <ul className="space-y-3">
              {[
                "Rửa Xe Cao Cấp",
                "Đánh Bóng Sơn",
                "Phủ Ceramic",
                "Dán PPF",
                "Vệ Sinh Nội Thất",
                "Độ Đèn & Phụ Kiện",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#services");
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  90 Nguyễn Mân, Nhơn Bình, Quy Nhơn, Bình Định
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+84975416999"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  0975 416 999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:hieuduong8181@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hieuduong8181@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} HieuThaoAuto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
