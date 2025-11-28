import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from '../types'
import LogoIcon from "../icons/Logo.svg?react";
import EyeIcon from "../icons/Eye.svg?react";
import VisaIcon from "../icons/Visa.svg?react";



export default function CardCarousel({ cards }: { cards: Card[] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showNumberForIndex, setShowNumberForIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleShowNumber = () => {
    if (showNumberForIndex === activeSlide) {
      setShowNumberForIndex(null);
    } else {
      setShowNumberForIndex(activeSlide);
    }
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: isMobile,
    beforeChange: (_: any, next: number) => setActiveSlide(next),
    appendDots: (dots: any) => (
      <div>
        <ul className=" flex justify-center gap-1 ">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-primary opacity-20 rounded-full cursor-pointer mt-4"></div>
    ),
  };

  return (
    <div className="md:max-w-[414px] mt-8">

      <button
        onClick={toggleShowNumber}
        className=" place-self-end hidden md:flex items-center gap-1 text-primary text-[12px] font-semibold mb-3 hover:underline"
      >
        <EyeIcon className={"text-primary"} />
        {showNumberForIndex === activeSlide ? "Hide card number" : "Show card number"}
      </button>

      <Slider {...settings}>
        {cards.map((card, index) => {
          const showNumber = showNumberForIndex === index;

          return (
            <div key={index} className="px-1">
              <button
                onClick={toggleShowNumber}
                className=" place-self-end flex md:hidden relative top-[17px] bg-white md:bg-none rounded-md p-2 pb-5  items-center gap-1 text-primary text-[12px] font-semibold mb-0 hover:underline"
              >
                <EyeIcon className={"text-primary"} />
                {showNumberForIndex === activeSlide ? "Hide card number" : "Show card number"}
              </button>
              <div className="bg-[#00C853] rounded-[12px] text-white h-[248px] p-6 shadow-lg relative">

                <div className="absolute right-6 top-5">
                  <LogoIcon className="text-white h-6 w-20" />
                </div>

                <div className="mt-7 text-[22px] font-semibold">
                  {card.name}
                </div>

                <div className="mt-7 font-mono text-[22px] tracking-[0.18em] font-semibold">
                  {showNumber
                    ? card.number.replace(/(.{4})/g, "$1 ").trim()
                    : card.number
                      .replace(/^(\d{12})/, "••••••••••••")
                      .replace(/(.{4})/g, "$1 ")
                      .trim()
                  }
                </div>


          
                <div className="flex gap-5 mt-4 text-[14px]">
                  <p>
                    Thru:{" "}
                    <span className="font-semibold">{card.expiry}</span>
                  </p>
                  <p>
                    CVV:{" "}
                    <span className="font-semibold">
                      {showNumber ? card.cvv : "***"}
                    </span>
                  </p>
                </div>

                <div className="absolute bottom-6 right-6">
                  <VisaIcon className="text-white h-6" />
                </div>

              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
