"use client";

import { useState } from "react";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import servicePolish from "@/assets/service-polish.jpg";
import servicePpf from "@/assets/service-ppf.jpg";
import serviceLights from "@/assets/service-lights.jpg";
import serviceWash from "@/assets/service-wash.jpg";
import ruaXe from "@/assets/services/rua_xe_cao_cap.webp";
import danhBong from "@/assets/services/danh_bong.webp";
import veSinhNoiThat from "@/assets/services/ve_sinh_noi_that.webp";
import danhBongKinh from "@/assets/services/ve_sinh_kinh.webp";
import hanKinh from "@/assets/services/han_kinh_o_to.webp";
import doDen from "@/assets/services/do_den_tang_sang.webp";
import lapDoChoi from "@/assets/services/lap_dat_do_choi.webp";
import danPhim from "@/assets/services/dan_phim_cach_nhiet.webp";
import ppf from "@/assets/services/dan_PPF_ngoai_that.webp";
import bocGheDa from "@/assets/services/boc_ghe_da.webp";
import manHinhAndroid from "@/assets/services/man_hinh_android.webp";
import cam360 from "@/assets/services/camera_360.webp";
import guongGap from "@/assets/services/guong_gap_chinh_dien.webp";
import phuCeramic from "@/assets/services/phu_ceramic.webp";
import phuGam from "@/assets/services/phu_gam_xe.webp";
import danDecal from "@/assets/services/dan_decal.webp";
import bodyKit from "@/assets/services/do_body_kit.webp";
import baoDuong from "@/assets/services/bao_duong_dau_nhot.webp";
import khoanxe from "@/assets/services/khoanxe.png";
import amthanh from "@/assets/services/amthanh.png";
import phimcn from "@/assets/services/phim_cach_nhiet.jpg";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
export const services = [
  {
    title: "Rửa xe",
    description:
      "Rửa xe chuẩn detailing, làm sạch ngoại thất, lazang, hốc bánh và các khe kẽ, kết hợp dung dịch chuyên dụng an toàn cho sơn.",
    image: ruaXe,
    price: "Liên hệ",
  },
  {
    title: "Đánh bóng hiệu chỉnh bề mặt sơn",
    description:
      "Xử lý xước nhẹ, vết swirl, oxy hóa sơn; phục hồi độ bóng sâu và trả lại bề mặt sơn mịn đẹp như mới.",
    image: danhBong,
    price: "Liên hệ",
  },
  {
    title: "Vệ sinh dọn nội thất chuyên sâu",
    description:
      "Làm sạch sâu toàn bộ nội thất, ghế da/nỉ, trần xe, thảm sàn; khử mùi, diệt khuẩn, mang lại không gian sạch sẽ.",
    image: veSinhNoiThat,
    price: "Liên hệ",
  },
  {
    title: "Phủ Ceramic",
    description:
      "Phủ Ceramic bảo vệ bề mặt sơn, tăng độ bóng, chống bám bẩn, hạn chế trầy xước nhẹ và bảo vệ lâu dài.",
    image: phuCeramic,
    price: "Liên hệ",
  },
   {
    title: "Rửa dọn khoang máy",
    description:
      "Rửa dọn khoang máy sạch sâu, loại bỏ dầu mỡ và bụi bẩn, giúp khoang máy gọn gàng, sáng như mới và an toàn hệ thống điện.",
    image: khoanxe,
    price: "Liên hệ",
  },
   {
    title: "Phủ gầm xe",
    description:
      "Phủ gầm chống rỉ sét, giảm ồn, bảo vệ gầm xe khỏi đá văng, nước và hóa chất ăn mòn.",
    image: phuGam,
    price: "Liên hệ",
  },
  {
    title: "Đánh bóng kính - xóa xước",
    description:
      "Loại bỏ ố mốc, vết mờ, cặn nước trên kính lái và kính xe; cải thiện tầm nhìn và độ trong suốt khi lái xe.",
    image: danhBongKinh,
    price: "Liên hệ",
  },
  {
    title: "Hàn kính ô tô",
    description:
      "Xử lý nứt, mẻ kính lái kịp thời, chống lan vết rạn, đảm bảo an toàn và tiết kiệm chi phí thay kính.",
    image: hanKinh,
    price: "Liên hệ",
  },
   {
    title: "Bảo dưỡng dầu nhớt – phụ gia",
    description:
      "Thay dầu nhớt định kỳ, vệ sinh động cơ và bổ sung phụ gia giúp động cơ vận hành êm ái và bền bỉ.",
    image: baoDuong,
    price: "Liên hệ",
  },
  {
    title: "Độ đèn tăng sáng",
    description:
      "Nâng cấp hệ thống chiếu sáng với ánh sáng mạnh, đều và đúng chuẩn; tăng khả năng quan sát ban đêm, lái xe an toàn hơn.",
    image: doDen,
    price: "Liên hệ",
  },
  {
    title: "Lắp đặt đồ chơi xe – phụ kiện",
    description:
      "Lắp đặt phụ kiện theo xe như camera, cảm biến, tiện ích thông minh; nâng cao trải nghiệm và thẩm mỹ.",
    image: lapDoChoi,
    price: "Liên hệ",
  },
   {
    title: "Lắp đặt màn hình Android",
    description:
      "Nâng cấp màn hình Android giải trí đa phương tiện, hỗ trợ dẫn đường, camera, Apple CarPlay và Android Auto.",
    image: manHinhAndroid,
    price: "Liên hệ",
  },
  {
    title: "Camera 360 độ",
    description:
      "Hệ thống camera 360 quan sát toàn cảnh xung quanh xe, hỗ trợ đỗ xe, giảm điểm mù và tăng độ an toàn.",
    image: cam360,
    price: "Liên hệ",
  },
  
 
 
  {
    title: "Gương chỉnh điện",
    description:
      "Gương gập/mở tự động theo khóa xe, tiện lợi khi đỗ xe và giúp bảo vệ gương khỏi va chạm.",
    image: guongGap,
    price: "Liên hệ",
  },
  
   {
    title: "Nâng cấp ghế da",
    description:
      "Bọc ghế da cao cấp, may đo theo form xe, tăng sự sang trọng, êm ái và dễ dàng vệ sinh.",
    image: bocGheDa,
    price: "Liên hệ",
  },
   {
    title: "Nâng cấp âm thanh",
    description:
      "Nâng cấp âm thanh xe hơi với loa, ampli, subwoofer và DSP chất lượng cao, mang đến âm thanh trong trẻo, bass chắc, nghe nhạc sống động và trải nghiệm giải trí đẳng cấp hơn trên mọi hành trình.",
    image: amthanh,
    price: "Liên hệ",
  },
  {
    title: "Cá nhân hoá nâng cấp body kit ",
    description:
      "Lắp đặt body kit chuẩn form xe, nâng cấp ngoại hình thể thao, mạnh mẽ và cá tính hơn.",
    image: bodyKit,
    price: "Liên hệ",
  },
  {
    title: "Dán phim cách nhiệt",
    description:
      "Dán phim cách nhiệt cao cấp giúp chống nóng, giảm chói, bảo vệ nội thất và tăng sự riêng tư khi sử dụng xe.",
    image: phimcn,
    price: "Liên hệ",
  },
  {
    title: "Dán PPF",
    description:
      "Dán phim PPF bảo vệ sơn và chi tiết nội thất, chống trầy xước, tự phục hồi xước nhẹ và giữ xe luôn như mới.",
    image: ppf,
    price: "Liên hệ",
  },
  {
    title: "Dán decal đổi màu",
    description:
      "Dán decal đổi màu theo phong cách cá nhân, bảo vệ lớp sơn zin và dễ dàng tháo đổi khi cần.",
    image: danDecal,
    price: "Liên hệ",
  },

 
];
const ITEMS_PER_PAGE = 6;
const ServicesSection = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, services.length));
  };

  const handleCollapse = () => {
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const isAllVisible = visibleCount >= services.length;

  return (
    <section id="services" className="section-padding">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Dịch Vụ Của Chúng Tôi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Dịch Vụ <span className="text-gradient">Chuyên Nghiệp</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Đa dạng dịch vụ chăm sóc và độ xe, đáp ứng mọi nhu cầu của bạn
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.slice(0, visibleCount).map((service, index) => (
            <article
              key={index}
              className="group card-glass overflow-hidden hover-lift cursor-pointer"
              onClick={scrollToContact}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={`Dịch vụ ${service.title} tại AutoPro Detailing`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                  Tìm hiểu thêm <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Load More / Collapse */}
        <div className="flex justify-center mt-12">
          {!isAllVisible ? (
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
            >
              Xem thêm dịch vụ
              <ChevronDown className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleCollapse}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold hover:bg-muted transition"
            >
              Ẩn bớt dịch vụ
              <ChevronUp className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
