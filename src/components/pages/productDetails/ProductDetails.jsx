import { useState } from "react";
import { MdOutlineStar, MdOutlineFavoriteBorder } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { useSelector } from "react-redux";

function ProductDetails() {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);
  const product = useSelector((state) =>
    state.products.products.filter(
      (item) => item.id == localStorage.getItem("productId")
    )
  );

  return (
    <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
      {/* WRAPPER */}
      <div className="py-12">
        <div className="lg:grid grid-cols-10 gap-x-9 items-center justify-center">
          <div className="mb-4 col-span-4 p-1 lg:p-6 bg-[#eeeeee]">
            <img
              src={product[0] && product[0].image}
              alt="product"
              className="w-full"
            />
          </div>
          <div className="col-span-5">
            <h3 className="text-xl font-medium mb-3">
              {product[0] && product[0].name}
            </h3>
            <ul className="text-orange flex mb-[10px]">
              <li>
                <MdOutlineStar size={20} />
              </li>
              <li>
                <MdOutlineStar size={20} />
              </li>
              <li>
                <MdOutlineStar size={20} />
              </li>
              <li>
                <MdOutlineStar size={20} />
              </li>
              <li>
                <MdOutlineStar size={20} />
              </li>
              <li className="cursor-pointer ml-2 text-black hover:text-orange">
                4 Review
              </li>
            </ul>
            <div className="my-[10px]">
              <span className="text-orange text-[18px] mr-2">
                UZS {product[0] && product[0].price}
              </span>
              <span className="text-green-500 text-sm">In Stock (8 items)</span>
            </div>
            <p className="text-[#9c9c9c] mb-3 leading-[1.8]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda sequi impedit magnam dolorum delectus in, vitae dicta
              porro culpa aperiam necessitatibus aut sint iure omnis beatae
              numquam! Officiis, non voluptas.
            </p>
            <div className="flex flex-col sm:flex-row">
              <div className="flex items-center">
                <div className="mr-3 text-center inline-flex items-center relative">
                  <span
                    onClick={() => setCount(count - 1)}
                    className="cursor-pointer absolute text-xl text-[#9c9c9c] left-2.5 w-[30px] h-[30px] leading-[30px] bg-[#ddd] border border-gray-300 rounded-full hover:bg-orange hover:border-orange hover:text-white transition-colors"
                  >
                    -
                  </span>
                  <input
                    type="text"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    className="text-center font-medium outline-0 border border-gray-300 max-w-[130px] h-12"
                  />
                  <span
                    onClick={() => setCount(count + 1)}
                    className="cursor-pointer absolute text-xl text-[#9c9c9c] right-2.5 w-[30px] h-[30px] leading-[30px] bg-[#ddd] border border-gray-300 rounded-full hover:bg-orange hover:border-orange hover:text-white transition-colors"
                  >
                    +
                  </span>
                </div>
                <button className="flex items-center bg-orange text-white p-3 mr-3">
                  <RiShoppingCartLine size={17} className="mr-2" />
                  <span className="whitespace-nowrap">Add To Cart</span>
                </button>
              </div>
              <button className="mt-3 sm:mt-0 w-fit flex items-center text-[#9c9c9c] border border-gray-300 py-3 px-4">
                <MdOutlineFavoriteBorder size={16} className="mr-1" />
                <span className="whitespace-nowrap">Wishlist</span>
              </button>
            </div>

            <div className="flex items-center mt-6">
              <span className="font-medium mr-5">Share</span>
              <span className="cursor-pointer p-1.5 hover:bg-orange hover:text-white transition-colors rounded-md mr-1">
                <FaFacebookF />
              </span>
              <span className="cursor-pointer p-1.5 hover:bg-orange hover:text-white transition-colors rounded-md mr-1">
                <FaInstagram />
              </span>
              <span className="cursor-pointer p-1.5 hover:bg-orange hover:text-white transition-colors rounded-md mr-1">
                <FaTelegramPlane />
              </span>
              <span className="cursor-pointer p-1.5 hover:bg-orange hover:text-white transition-colors rounded-md mr-1">
                <FaTwitter />
              </span>
            </div>
          </div>
        </div>

        {/* OTHER DETAILS */}
        <div className="pt-9">
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setShow(true)}
              className={`${
                show && "text-orange"
              } font-medium mr-6 hover:text-orange`}
            >
              Description
            </button>
            <button
              onClick={() => setShow(false)}
              className={`${
                !show && "text-orange"
              } font-medium mr-6 hover:text-orange`}
            >
              Additional Information
            </button>
          </div>
          <div className="p-[30px] border border-gray-300">
            {/* DESCRIPTION */}
            <div className={`${show ? "block" : "hidden"}`}>
              <h3 className="text-xl font-medium mb-5">Product Description</h3>
              <p className="text-[#9c9c9c] leading-[1.8]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                enim cum corporis numquam accusantium natus provident sit, eum
                ex necessitatibus a est excepturi recusandae laboriosam dolorem
                amet accusamus similique delectus? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nostrum suscipit, eligendi
                asperiores quasi, quisquam ea a ullam accusantium possimus
                reiciendis exercitationem, error reprehenderit. Maxime fugiat at
                nesciunt officia doloremque dolore!
              </p>
            </div>
            {/* ADDITIONAL INFO */}
            <ul
              className={`${show ? "hidden" : "block"} border border-gray-300`}
            >
              <li className="w-full text-[#9c9c9c] px-[15px] py-[10px] border-b border-gray-300">
                <span className="w-[30%] inline-block font-medium text-black">
                  Brand:
                </span>
                ThemeForest
              </li>
              <li className="w-full text-[#9c9c9c] px-[15px] py-[10px] border-b border-gray-300">
                <span className="w-[30%] inline-block font-medium text-black">
                  Size:
                </span>
                Large, Medium
              </li>
              <li className="w-full text-[#9c9c9c] px-[15px] py-[10px]">
                <span className="w-[30%] inline-block font-medium text-black">
                  Wheight:
                </span>
                27 kg
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
