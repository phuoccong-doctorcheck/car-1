import { CheckCircle } from "lucide-react";
import servicePolish from "@/assets/service-polish.jpg";

const features = [
  "Đội ngũ kỹ thuật viên chuyên nghiệp, nhiều năm kinh nghiệm",
  "Sử dụng sản phẩm và thiết bị cao cấp nhập khẩu",
  "Cam kết chất lượng, bảo hành dịch vụ",
  "Tư vấn miễn phí, báo giá chi tiết trước khi thực hiện",
  "Không gian xưởng rộng rãi, hiện đại",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={servicePolish}
                alt="Dịch vụ đánh bóng xe chuyên nghiệp tại AutoPro"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-2 md:-right-2 lg:-right-6 bg-card p-6 rounded-xl shadow-xl border border-border max-w-[200px]">
              <div className="text-4xl font-bold text-gradient mb-2">5+</div>
              <p className="text-muted-foreground text-sm">
                Năm kinh nghiệm trong ngành
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Về Chúng Tôi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
              Đam Mê Với <span className="text-gradient">Từng Chi Tiết</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Hiếu Thảo Auto là trung tâm chăm sóc và độ xe hàng đầu, chuyên
              cung cấp các dịch vụ chăm sóc xe chuyên nghiệp. Với hơn 5 năm kinh
              nghiệm, chúng tôi cam kết mang đến cho khách hàng sự hài lòng
              tuyệt đối.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-gradient">1000+</div>
                <p className="text-muted-foreground">Xe đã phục vụ</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-gradient">99%</div>
                <p className="text-muted-foreground">Khách hài lòng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
