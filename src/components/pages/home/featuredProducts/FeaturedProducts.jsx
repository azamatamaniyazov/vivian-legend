import ProductCard from "../../../productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import useSlidesView from "../../../../hooks/useSlidesView";

const featuredProducts = [
  {
    img: "https://templates.envytheme.com/ehay/default/assets/images/products/product-9.jpg",
    title: "Power Tools Set Chinese Manufacturer Production 50V",
    price: "150.00",
  },
  {
    img: "https://templates.envytheme.com/ehay/default/assets/images/products/product-7.jpg",
    title: "Professional Cordless Drill Power Tools Competitive",
    price: "130.00",
  },
  {
    img: "https://templates.envytheme.com/ehay/default/assets/images/products/product-8.jpg",
    title: "DFMALB 20V Max XX Oscillating Multi Tool Variable Speed Tool",
    price: "190.00",
  },
  {
    img: "https://templates.envytheme.com/ehay/default/assets/images/products/product-6.jpg",
    title: "Cordless Drill Professional Combo Drill And Screwdriver",
    price: "200.00",
  },
];
function FeaturedProducts() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { slidesView } = useSlidesView(3);

  return (
    <div className="relative pb-12">
      <h2 className="text-2xl font-medium mb-5">Featured Products</h2>
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
        {featuredProducts.map((elem, index) => {
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

export default FeaturedProducts;
