import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Phone,
    title: "Điện Thoại",
    content: "0975 416 999",
    href: "tel:+84975416999",
  },
  {
    icon: Mail,
    title: "Email",
    content: "hieuduong8181@gmail.com",
    href: "mailto:hieuduong8181@gmail.com",
  },
  {
    icon: MapPin,
    title: "Địa Chỉ",
    content: "90 Nguyễn Mân, Nhơn Bình, Quy Nhơn, Bình Định",
    href: "https://www.google.com/maps/place/Hi%E1%BA%BFu+Th%E1%BA%A3o+Auto/@13.7944349,109.2058583,1003m/data=!3m2!1e3!4b1!4m6!3m5!1s0x316f6b2aff823577:0x5dd25346c13120b7!8m2!3d13.7944349!4d109.2058583!16s%2Fg%2F11ytcyl0ng!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Clock,
    title: "Giờ Làm Việc",
    content: "T2 - CN: 7:30 - 18:00",
    href: null,
  },
];

const serviceMap: Record<string, string> = {
  "rua-xe": "Rửa xe",
  "danh-bong-hieu-chinh-son": "Đánh bóng hiệu chỉnh bề mặt sơn",
  "ve-sinh-noi-that": "Vệ sinh nội thất",
  "danh-bong-kinh": "Đánh bóng kính",
  "han-kinh-o-to": "Hàn kính ô tô",
  "do-den-tang-sang": "Độ đèn tăng sáng",
  "lap-dat-do-choi": "Lắp đặt đồ chơi",
  "dan-phim-cach-nhiet": "Dán phim cách nhiệt",
  "dan-ppf-noi-that-ngoai-that": "Dán PPF nội thất ngoại thất",
  "boc-ghe-da": "Bọc ghế da",
  "man-hinh-android": "Màn hình Android",
  "cam-360": "Cam 360",
  "guong-gap-chinh-dien": "Gương gập chỉnh điện",
  "phu-ceramic": "Phủ Ceramic",
  "phu-gam-xe": "Phủ gầm xe",
  "dan-decal-doi-mau-son-xe": "Dán decal đổi màu sơn xe",
  "do-body-kit": "Độ body kit",
  "bao-duong-dau-nhot-phu-gia": "Dịch vụ bảo dưỡng dầu nhớt phụ gia",
};


const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    console.log(e.target.name, e.target.value);
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ Helper: validate phone quickly
  const isValidPhone = (phone: string) => {
    const clean = phone.replace(/\s/g, "");
    return /^0\d{9,10}$/.test(clean); // VN common
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate cơ bản
      if (!formData.name.trim() || !formData.phone.trim()) {
        toast({
          title: "Thiếu thông tin",
          description: "Vui lòng điền Họ tên và Số điện thoại.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      if (!isValidPhone(formData.phone)) {
        toast({
          title: "Số điện thoại chưa đúng",
          description: "Vui lòng nhập đúng định dạng số điện thoại Việt Nam.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // ✅ EmailJS config từ ENV
      const serviceId = "service_jhvfv1c";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const templateAdmin = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN;
      const templateCustomer = import.meta.env.VITE_EMAILJS_TEMPLATE_CUSTOMER;
      const receiverEmail = import.meta.env.VITE_RECEIVER_EMAIL;

      // ✅ Data gửi đi cho template
      const templateParams = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email || "Không cung cấp",
        service: formData.service || "Không chọn",
        service_name: serviceMap[formData.service] || "Chưa chọn dịch vụ",
        message: formData.message || "Không có nội dung",
        to_email: receiverEmail, // admin nhận
        reply_to: formData.email || "", // để admin reply dễ
      };

      // ✅ 1) Gửi mail về tiệm
      await  emailjs.send(
        "service_jhvfv1c",
        "template_tbx3kv7",
        
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email || "Không cung cấp",
        service: formData.service || "Không chọn",
        service_name: serviceMap[formData.service] || "Chưa chọn dịch vụ",
        message: formData.message || "Không có nội dung",
        to_email: receiverEmail, // admin nhận
        reply_to: formData.email || "", // để admin reply dễ
      },
        "yidF4_VmJa118K5t_"
      );

      // ✅ 2) (Optional) nếu khách có email thì gửi auto reply
      // if (formData.email && formData.email.includes("@")) {
      //   const customerParams = {
      //     ...templateParams,
      //     to_email: formData.email, // khách nhận
      //   };
      //   await emailjs.send( "service_jhvfv1c",
      //   "template_tbx3kv7", customerParams,  "yidF4_VmJa118K5t_");
      // }

      toast({
        title: "Gửi thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Gửi thất bại!",
        description: "Có lỗi xảy ra khi gửi. Vui lòng thử lại hoặc gọi hotline.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Liên Hệ Với Chúng Tôi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Đặt Lịch <span className="text-gradient">Ngay Hôm Nay</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Liên hệ để được tư vấn miễn phí và nhận báo giá chi tiết cho dịch vụ bạn cần
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info & Map */}
          <div>
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="card-glass p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors text-[14px]"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.content}
                        </a>
                      ) : (
                        <span className="text-muted-foreground text-[14px]">
                          {item.content}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden h-[300px] lg:h-[350px] border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4369.174955242231!2d109.20585829999999!3d13.794434899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6b2aff823577%3A0x5dd25346c13120b7!2zSGnhur91IFRo4bqjbyBBdXRv!5e1!3m2!1svi!2s!4v1767325420975!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hiếu Thảo Auto Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glass p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Gửi Yêu Cầu Tư Vấn</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Họ và Tên *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Số Điện Thoại *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="0975 416 999"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="hieuduong8181@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-secondary/50 border-border"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Dịch Vụ Quan Tâm
                </label>
               <select
  id="service"
  name="service"
  value={formData.service}
  onChange={handleChange}
  className="w-full h-10 px-3 rounded-md bg-secondary/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
>
  <option value="">Chọn dịch vụ</option>

  <option value="rua-xe">Rửa xe</option>
  <option value="danh-bong-hieu-chinh-son">Đánh bóng hiệu chỉnh bề mặt sơn</option>
  <option value="ve-sinh-noi-that">Vệ sinh nội thất</option>
  <option value="danh-bong-kinh">Đánh bóng kính</option>
  <option value="han-kinh-o-to">Hàn kính ô tô</option>
  <option value="do-den-tang-sang">Độ đèn tăng sáng</option>
  <option value="lap-dat-do-choi">Lắp đặt đồ chơi</option>
  <option value="dan-phim-cach-nhiet">Dán phim cách nhiệt</option>
  <option value="dan-ppf-noi-that-ngoai-that">Dán PPF nội thất ngoại thất</option>
  <option value="boc-ghe-da">Bọc ghế da</option>
  <option value="man-hinh-android">Màn hình Android</option>
  <option value="cam-360">Cam 360</option>
  <option value="guong-gap-chinh-dien">Gương gập chỉnh điện</option>
  <option value="phu-ceramic">Phủ Ceramic</option>
  <option value="phu-gam-xe">Phủ gầm xe</option>
  <option value="dan-decal-doi-mau-son-xe">Dán decal đổi màu sơn xe</option>
  <option value="do-body-kit">Độ body kit</option>
  <option value="bao-duong-dau-nhot-phu-gia">Dịch vụ bảo dưỡng dầu nhớt phụ gia</option>
</select>

              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Nội Dung
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Mô tả yêu cầu của bạn..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-secondary/50 border-border resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="btn-gold w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Đang gửi..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Gửi Yêu Cầu
                  </>
                )}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              * Thông tin của bạn sẽ được bảo mật và chỉ dùng để liên hệ tư vấn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
