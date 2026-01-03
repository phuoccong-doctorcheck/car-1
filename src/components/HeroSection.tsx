import { ChevronDown, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car.jpg";

const stats = [
  { icon: Star, value: "500+", label: "Khách Hàng" },
  { icon: Shield, value: "5+", label: "Năm Kinh Nghiệm" },
  { icon: Clock, value: "24/7", label: "Hỗ Trợ" },
];

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCar}
          alt="Xe hơi cao cấp được chăm sóc chuyên nghiệp"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
              #1 Dịch Vụ Chăm Sóc Xe Chuyên Nghiệp
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Chăm Sóc Xe{" "}   <br />
            <span className="text-gradient">Đẳng Cấp</span>
            <br />
            Nâng Tầm Phong Cách
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Hiếu Thảo Auto mang đến dịch vụ chăm sóc và độ xe cao cấp. 
            Từ rửa xe, đánh bóng, phủ ceramic đến dán PPF và độ đèn - 
            chúng tôi biến chiếc xe của bạn trở nên hoàn hảo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="btn-gold text-lg"
              onClick={() => scrollToSection("#contact")}
            >
              Đặt Lịch Ngay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 text-lg"
              onClick={() => scrollToSection("#services")}
            >
              Xem Dịch Vụ
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary z-10"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;