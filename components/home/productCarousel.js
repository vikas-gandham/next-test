import Product from "@/components/reusable/product";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProductCarousal() {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: "/Stanley.webp",
      title: "Stanley",
      description: "Quencher Recycled Stainless Steel Flowstate Tumbler, 1.18L",
      price: "£44.99",
      reference_price: "£55.6",
      rating: 5,
      ratingCount: 43,
      colorCount: 4,

      colors: ["#8fbc8f", "#f5f5dc", "#000", "#ffebcd"],
    },

    {
      id: 2,
      img: "/Anyday.webp",
      title: "John Lewis ANYDAY",
      description: "Handheld & Foldable Desk Fan, 4 inch",
      price: "£12.00",
      reference_price: "£25.6",
      rating: 2,
      ratingCount: 1183,
      colorCount: 4,

      colors: ["#f0ffff", "#a9a9a9", "#6495ed", "#f0e68c"],
    },
    {
      id: 3,
      img: "/Janerio.webp",
      title: "Sol de Janerio",
      description: "Perfume Mist Discovery Fragrance Gift Set",
      price: "£44.99",
      reference_price: "£55.6",
      rating: 4,
      ratingCount: null,
      colorCount: null,

      colors: [""],
    },
    {
      id: 4,
      img: "/Long.webp",
      title: "Longchamp",
      description: "Le Pliage Original Large Shoulder Bag",
      price: "£115.00",
      reference_price: "£155.6",
      rating: 5,
      ratingCount: 549,
      colorCount: 6,

      colors: ["#000", "#191970", "#faebd7", "#a9a9a9", "#5f9ea0", "#ff8c00"],
    },
    {
      id: 5,
      img: "/John.webp",
      title: "John Lewis",
      description: "Aelia Bloom Maxi Dress",
      price: "£65.00",
      reference_price: "£75.6",
      rating: null,
      ratingCount: null,
      colorCount: null,

      colors: [""],
    },

    {
      id: 1,
      img: "/Stanley.webp",
      title: "Stanley",
      description: "Quencher Recycled Stainless Steel Flowstate Tumbler, 1.18L",
      price: "£44.99",
      reference_price: "£55.6",
      rating: 5,
      ratingCount: 43,
      colorCount: 4,

      colors: ["#8fbc8f", "#f5f5dc", "#000", "#ffebcd"],
    },

    {
      id: 2,
      img: "/Anyday.webp",
      title: "John Lewis ANYDAY",
      description: "Handheld & Foldable Desk Fan, 4 inch",
      price: "£12.00",
      reference_price: "£25.6",
      rating: 2,
      ratingCount: 1183,
      colorCount: 4,

      colors: ["#f0ffff", "#a9a9a9", "#6495ed", "#f0e68c"],
    },
    {
      id: 3,
      img: "/Janerio.webp",
      title: "Sol de Janerio",
      description: "Perfume Mist Discovery Fragrance Gift Set",
      price: "£44.99",
      reference_price: "£55.6",
      rating: 3,
      ratingCount: null,
      colorCount: null,

      colors: [""],
    },
    {
      id: 4,
      img: "/Long.webp",
      title: "Longchamp",
      description: "Le Pliage Original Large Shoulder Bag",
      price: "£115.00",
      reference_price: "£155.6",
      rating: 5,
      ratingCount: 549,
      colorCount: 6,

      colors: ["#000", "#191970", "#faebd7", "#a9a9a9", "#5f9ea0", "#ff8c00"],
    },
    {
      id: 5,
      img: "/John.webp",
      title: "John Lewis",
      description: "Aelia Bloom Maxi Dress",
      price: "£65.00",
      reference_price: "£75.6",
      rating: null,
      ratingCount: null,
      colorCount: null,

      colors: [""],
    },
  ]);
  return (
    <div className=" w-full mx-auto ">
      <div className="flex flex-col items-center justify-center gap-10  m-[10%] overflow-hidden relative min-w-[100px]">
        <strong className=" text-2xl">Popular products</strong>
        <div className=" w-full">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={5}
            spaceBetween={30}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {products.map((product) => (
              <>
                <SwiperSlide>
                  <Product
                    rating={product.rating}
                    id={product.id}
                    img={product.img}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    reference_price={product.reference_price}
                    ratingCount={product.ratingCount}
                    colors={product.colors}
                    colorCount={product.colorCount}
                  />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
