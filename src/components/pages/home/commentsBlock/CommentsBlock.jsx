import useSlidesView from "../../../../hooks/useSlidesView";
import CommentsCard from "../../../commentsCard/CommentsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

function CommentsBlock() {
  const { slidesView } = useSlidesView(1);

  return (
    <div className="pb-10">
      <h2 className="text-2xl font-medium mb-5">Customer Comment</h2>
      <Swiper
        slidesPerView={slidesView}
        speed={900}
        grabCursor={true}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        <SwiperSlide>
          <CommentsCard />
        </SwiperSlide>
        <SwiperSlide>
          <CommentsCard />
        </SwiperSlide>
        <SwiperSlide>
          <CommentsCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CommentsBlock;
