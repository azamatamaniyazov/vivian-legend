import ProductCard from "../../../productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import useSlidesView from "../../../../hooks/useSlidesView";
import { useSelector } from "react-redux";

function BestSellers() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { slidesView } = useSlidesView(4);
  const { products } = useSelector((state) => state.products);

  const bestSellers = [...products]
    .sort((a, b) => b.point - a.point)
    .slice(0, 10);

  return (
    <div className="relative pb-12">
      <h2 className="text-2xl font-medium mb-5">Хит Продаж</h2>
      <div className="absolute bottom-0 right-0 left-0 lg:top-0 lg:bottom-auto flex justify-center lg:justify-end cursor-pointer ">
        <div
          ref={prevRef}
          className="p-2 mr-2 rounded-full border border-gray-300 hover:bg-orange hover:text-white transition-colors"
        >
          <MdKeyboardArrowLeft size={22} />
        </div>
        <div
          ref={nextRef}
          className="p-2 rounded-full border border-gray-300 hover:bg-orange hover:text-white transition-colors"
        >
          <MdKeyboardArrowRight size={22} />
        </div>
      </div>
      <Swiper
        slidesPerView={slidesView}
        spaceBetween={20}
        modules={[Navigation]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mySwiper mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        {bestSellers.map((elem, index) => {
          return (
            <SwiperSlide key={index}>
              <ProductCard {...elem} display={true} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default BestSellers;
