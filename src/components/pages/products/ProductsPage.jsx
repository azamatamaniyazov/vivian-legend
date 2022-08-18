import { useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineViewWeek,
  MdViewList,
} from "react-icons/md";
import ProductCard from "../../productCard/ProductCard";

const Products = [
  {
    img: "https://templates.envytheme.com/ehay/default/assets/images/products/product-3.jpg",
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

function ProductsPage() {
  const [displayIsBlock, setDisplayIsBlock] = useState(true);

  return (
    <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
      {/* WRAPPER */}
      <div className="py-[54px]">
        <div className="grid grid-cols-12 gap-6">
          {/* CATEGORIES BLOCK */}
          <div className="col-span-12 lg:col-span-4 h-max border border-gray-300">
            <h3 className="text-xl font-medium p-6">Product Categories</h3>
            <ul>
              <li className="flex items-center cursor-pointer hover:text-orange transition-colors py-[10px] px-5 border-t border-gray-300">
                <MdOutlineKeyboardArrowRight size={20} />
                <span>Power tools</span>
              </li>
              <li className="flex items-center cursor-pointer hover:text-orange transition-colors py-[10px] px-5 border-t border-gray-300">
                <MdOutlineKeyboardArrowRight size={20} />
                <span>Hand tools</span>
              </li>
              <li className="flex items-center cursor-pointer hover:text-orange transition-colors py-[10px] px-5 border-t border-gray-300">
                <MdOutlineKeyboardArrowRight size={20} />
                <span>Cordless tools</span>
              </li>
              <li className="flex items-center cursor-pointer hover:text-orange transition-colors py-[10px] px-5 border-t border-gray-300">
                <MdOutlineKeyboardArrowRight size={20} />
                <span>Safety tools</span>
              </li>
              <li className="flex items-center cursor-pointer hover:text-orange transition-colors py-[10px] px-5 border-t border-gray-300">
                <MdOutlineKeyboardArrowRight size={20} />
                <span>Garden tools</span>
              </li>
            </ul>
          </div>
          {/* PRODUCTS BLOCK */}
          <div className="col-span-12 lg:col-span-8">
            {/* DISPLAY */}
            <div className="grid items-center grid-cols-12">
              <div className="flex items-center col-span-6">
                <MdOutlineViewWeek
                  onClick={() => setDisplayIsBlock(true)}
                  size={25}
                  className={`${
                    displayIsBlock ? "text-orange " : "text-[#9c9c9c] "
                  } mr-2 cursor-pointer`}
                />
                <MdViewList
                  onClick={() => setDisplayIsBlock(false)}
                  size={25}
                  className={`${
                    displayIsBlock ? "text-[#9c9c9c] " : "text-orange "
                  } cursor-pointer`}
                />
              </div>
              <div className="col-span-6">
                <select className="outline-none p-2 w-full border border-gray-300 text-base text-[#9c9c9c]">
                  <option value="default">Default Sorting</option>
                  <option value="default">Drill</option>
                  <option value="default">Core Dills</option>
                  <option value="default">Power Dills</option>
                </select>
              </div>
            </div>
            {/* PRODUCTS LIST*/}
            <div className="grid grid-cols-12 gap-5 py-6">
              {Products.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`col-span-12 md:col-span-6 ${
                      !displayIsBlock && "lg:col-span-12 xl:col-span-6"
                    }`}
                  >
                    <ProductCard {...item} display={displayIsBlock} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
