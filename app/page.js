"use client";
import { useState } from "react";
import { MdStar } from "react-icons/md";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const hoverText = () => {
    return (
      <button className="px-4 py-3 border rounded-sm border-black bg-white absolute translate-x-[50%] translate-y-64 delay-300 duration-300">
        Quick view
      </button>
    );
  };

  const [products, setProducts] = useState([
    {
      id: 1,
      img: "/Stanley.webp",
      h1: "Stanley",
      p: "Quencher Recycled Stainless Steel Flowstate Tumbler, 1.18L",
      price: "£44.99",
      rating: (
        <div className="flex items-center justify-start px-4 py-3 border-b w-[218px]">
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
          43
        </div>
      ),
      color: (
        <div className="flex  items-center justify-start gap-3 mx-6 my-4">
          <button className="px-2 py-2 bg-[#8fbc8f] border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1 active:bg-pink-500 "></button>
          <button className="px-2 py-2 bg-[#f5f5dc] border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1 "></button>
          <button className="px-2 py-2 bg-[#000] border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1 "></button>
          <button className="px-2 py-2 bg-[#ffebcd] border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1 "></button>
        </div>
      ),
    },
    {
      id: 2,
      img: "/Anyday.webp",
      h1: "John Lewis ANYDAY",
      p: "Handheld & Foldable Desk Fan, 4 inch",
      price: "£12.00",
      rating: (
        <div className="flex items-center justify-start px-4 py-3 border-b w-[218px]">
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
          1183
        </div>
      ),
      color: (
        <div className="flex justify-start items-center gap-3 mx-6 my-4">
          <button className="px-2 py-2 bg-[#f0ffff] border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1"></button>
          <button className="px-2 py-2 bg-[#a9a9a9] border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1 "></button>
          <button className="px-2 py-2 bg-[#6495ed] border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1 "></button>
          <button className="px-2 py-2 bg-[#f0e68c] border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1 "></button>
        </div>
      ),
    },
    {
      id: 3,
      img: "/Janerio.webp",
      h1: "Sol de Janerio",
      p: "Perfume Mist Discovery Fragrance Gift Set",
      price: "£40.00",
      rating: "",
    },
    {
      id: 4,
      img: "/Long.webp",
      h1: "Longchamp",
      p: "Le Pliage Original Large Shoulder Bag",
      price: "£115.00",
      rating: (
        <div className="flex items-center justify-start px-4 py-3 border-b w-[218px]">
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
          549
        </div>
      ),
      color: (
        <div className="flex justify-start items-center gap-3 mx-6 my-4">
          <button className="px-2 py-2 bg-[#000] border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1"></button>
          <button className="px-2 py-2 bg-[#191970] border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1 "></button>
          <button className="px-2 py-2 bg-[#faebd7] border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1 "></button>
          <button className="px-2 py-2 bg-[#a9a9a9] border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1 "></button>
          <button className="px-2 py-2 bg-[#5f9ea0] border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1 "></button>
          <button className="px-2 py-2 bg-[#ff8c00] border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1 "></button>
        </div>
      ),
    },
    {
      id: 5,
      img: "/John.webp",
      h1: "John Lewis",
      p: "Aelia Bloom Maxi Dress",
      price: "£65.00",
      rating: "",
    },
  ]);
  return (
    <main>
      <div className="w-full  mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 p-16 m-16">
          <strong className="text-2xl">Popular products</strong>
          <div className="flex items-start justify-center gap-2 w-full lg:w-[60%] ">
            {products.map((product) => (
              <div key={product.id}>
                {isHovering && hoverText()}
                <div
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  className=" w-[250px] mx-auto flex flex-col items-start justify-center  "
                >
                  <img src={product.img} alt="" width="250" height="333" />

                  <button className="text-white bg-black px-4 py-3 mx-4 rounded-sm w-[220px] hover:bg-green-500 hover:text-black">
                    Add to basket
                  </button>
                  <h1 className="mx-4 text-left pt-4">{product.h1}</h1>
                  <p className="text-slate-500 px-4 py-3 border-b w-[218px]">
                    {product.p}
                  </p>
                  <span className=" font-bold border-b px-4 py-3 w-[218px]">
                    {product.price}
                  </span>

                  {product.rating}
                </div>
                <span className="">{product.color}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
