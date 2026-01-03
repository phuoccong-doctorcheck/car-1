import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/leus.png";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/vf5.png";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryItems = [
  {
    image: gallery1,
    title: "Lexus GS F - Ceramic Coating",
    category: "Phủ Ceramic",
  },
  {
    image: gallery2,
    title: "Mercedes AMG - Full Detailing",
    category: "Chăm Sóc Toàn Diện",
  },
  {
    image: gallery3,
    title: "BMW M4 - Paint Correction",
    category: "Đánh Bóng",
  },
  { image: gallery4, title: "VF5 - Decal", category: "Dán Decal" },
  { image: gallery5, title: "Audi RS7 - Chrome Delete", category: "Độ Xe" },
  {
    image: gallery6,
    title: "McLaren 720S - Full Protection",
    category: "Bảo Vệ Toàn Diện",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
  } | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center max-w-[690px] mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Thư Viện Hình Ảnh
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Dự Án <span className="text-gradient">Nổi bật</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Những chiếc xe được chăm sóc và độ bởi đội ngũ chuyên gia của chúng
            tôi
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-foreground font-bold mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 text-center text-foreground font-semibold text-lg">
            {selectedImage.title}
          </p>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
