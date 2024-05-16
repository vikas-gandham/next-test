import { useState } from "react";
import { MdStar } from "react-icons/md";
import Link from "next/link";

export default function Product(props) {
  const {
    id,
    img,
    title,
    description,
    price,
    reference_price,
    rating,
    ratingCount,
    colorCount,
    colors,
  } = props;

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const hoverText = () => {
    return (
      <Link
        href="https://www.johnlewis.com/"
        className="px-3 py-2 border rounded-sm text-center border-black bg-white absolute translate-x-4 translate-y-60 delay-300 duration-300 w-[200px] transition-all animate-pulse"
      >
        Quick view
      </Link>
    );
  };

  return (
    <>
      {isHovering && hoverText()}
      <div
        key={id}
        className=" lg:w-[230px] mx-auto flex flex-col items-start justify-center "
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img src={img} alt="" />
        <button className="text-white bg-black px-3 py-2 mx-4 rounded-sm w-[200px] hover:bg-green-500 hover:text-black">
          Add to basket
        </button>
        <h1 className="mx-4 text-left pt-4"> {title}</h1>
        <p className="text-slate-500 px-4 py-3 border-b w-[218px]">
          {description}
        </p>
        <span className=" font-bold border-b px-4 py-3 w-[218px] text-green-500">
          {price}
        </span>
        <span className=" font-bold border-b px-4 py-3 w-[218px] text-red-500">
          {reference_price}
        </span>
        <div className="flex items-center justify-start px-4 py-3 border-b w-[218px]">
          {Array.from({ length: rating }, (i) => (
            <MdStar />
          ))}
          <span>{ratingCount}</span>
        </div>

        <></>
      </div>
      <div className="flex items-center justify-start p-4 gap-2">
        {Array.from({ length: colorCount }, (i) => (
          <button
            className={`px-2 py-2 border border-slate-400 rounded-full ring ring-slate-300 hover:ring-offset-1 bg-[${colors.map(
              (color, i) => `color`
            )}] `}
          ></button>
        ))}
      </div>
    </>
  );
}
