import { FiShoppingCart } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
function Banner() {
  return (
    <div>
      <Swiper
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        speed={900}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Pagination, Autoplay]}
        className="mySwiper3"
      >
        <SwiperSlide className="h-max py-14 lg:py-[140px] bg-cover bg-no-repeat bg-center bg-[url('https://templates.envytheme.com/ehay/default/assets/images/slider/bg-5.jpg')]">
          <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
            <div className="h-max flex flex-col text-center lg:text-start items-center lg:items-start max-w-[900px]">
              <span className="mb-[10px]">Special Offer</span>
              <h1 className="text-2xl lg:text-[60px] font-bold mb-6 leading-none">
                Best Collection For Home Decoration 2021
              </h1>
              <p className="mb-[30px] leading-[1.8]">
                Free shipping & discount 40% on products
              </p>
              <button className="flex items-center text-white w-max bg-orange py-3 px-7">
                <FiShoppingCart size={17} />
                <span className="ml-2">Shop Now</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-max py-14 lg:py-[140px] bg-cover bg-no-repeat bg-center bg-[url('https://templates.envytheme.com/ehay/default/assets/images/slider/bg-6.jpg')]">
          <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
            <div className="h-max flex flex-col text-center lg:text-start items-center lg:items-start max-w-[900px]">
              <span className="mb-[10px]">Special Offer</span>
              <h1 className="text-2xl lg:text-[60px] font-bold mb-6 leading-none">
                All Types Of Premium Quality Tools
              </h1>
              <p className="mb-[30px] leading-[1.8]">
                Free shipping & discount 40% on products
              </p>
              <button className="flex items-center text-white w-max bg-orange py-3 px-7">
                <FiShoppingCart size={17} />
                <span className="ml-2">Shop Now</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-max py-14 lg:py-[140px] bg-cover bg-no-repeat bg-center bg-[url('https://templates.envytheme.com/ehay/default/assets/images/slider/bg-4.jpg')]">
          <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
            <div className="h-max flex flex-col text-center lg:text-start items-center lg:items-start max-w-[900px]">
              <span className="mb-[10px]">Special Offer</span>
              <h1 className="text-2xl lg:text-[60px] font-bold mb-6 leading-none">
                Get The Best Collection Of Hand Tools Right
              </h1>
              <p className="mb-[30px] leading-[1.8]">
                Free shipping & discount 40% on products
              </p>
              <button className="flex items-center text-white w-max bg-orange py-3 px-7">
                <FiShoppingCart size={17} />
                <span className="ml-2">Shop Now</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
