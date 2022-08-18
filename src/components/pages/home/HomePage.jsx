import React from "react";
import Banner from "./banner/Banner";
import FeaturedProducts from "./featuredProducts/FeaturedProducts";
import PopularCategories from "./popularCategories/PopularCategories";
import CommentsBlock from "./commentsBlock/CommentsBlock";
import BestSellers from "./bestSellers/BestSellers";
import Services from "./services/Services";

function HomePage() {
  return (
    <>
      <Banner />
      <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
        <PopularCategories />
        <div className="lg:grid grid-rows-1 grid-cols-12 gap-x-5 pt-[54px]">
          <div className="col-span-3">
            <CommentsBlock />
          </div>
          <div className="col-span-9">
            <FeaturedProducts />
          </div>
        </div>
        <BestSellers />
        <Services />
      </div>
    </>
  );
}

export default HomePage;
