import { Link } from "react-router-dom";
import {
  MdOutlineStar,
  MdOutlineFavoriteBorder,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setProductId } from "../pages/products/productsSlice";

function ProductCard({ id, name, image, price, display }) {
  const dispatch = useDispatch();

  const onSelectProductId = (id) => {
    dispatch(setProductId(id));
    localStorage.setItem("productId", id);
  };
  return (
    <div
      onClick={() => onSelectProductId(id)}
      className={`${
        !display && "flex items-center "
      } block hover:border-orange transition-colors relative border border-gray-300`}
    >
      <Link
        to="/product-details"
        className="w-full overflow-hidden hover:opacity-75"
      >
        <img
          src={image}
          alt="tool"
          className={`w-full h-[304px] object-center object-contain ${
            !display && " h-[189px] w-[189px]"
          }`}
        />
      </Link>
      <div
        className={`flex flex-col justify-between p-[15px] ${
          !display && "border-none min-h-[210px]"
        } border-t border-gray-300`}
      >
        <h3 className="mb-3">
          <Link to="/product-details">{name}</Link>
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
          <li>
            <Link
              to={"/product-details"}
              className="text-[#9c9c9c] ml-2 hover:text-orange transition-colors"
            >
              (03 Review)
            </Link>
          </li>
        </ul>
        <span className="text-orange font-medium">UZS {price}</span>
        <div className="flex items-center mt-2">
          <button
            className={`${
              display
                ? "py-[10px] px-2 lg:px-4 2xl:px-5 "
                : "text-[13px] py-[8px] px-2 "
            } flex items-center text-[#9c9c9c] border border-gray-300`}
          >
            <RiShoppingCartLine size={17} className="mr-2" />
            <span className="whitespace-nowrap">Add To Cart</span>
          </button>
          <button
            className={`${
              display ? "p-[6px] lg:p-[7px] mx-3 " : "p-[4px] lg:p-[5px] mx-2"
            }  hover:bg-orange hover:text-white border text-[#9c9c9c] text-center border-gray-300 rounded-full`}
          >
            <MdOutlineFavoriteBorder size={22} className="inline" />
          </button>
          <button
            className={`${
              display ? "p-[6px] lg:p-[7px] " : "p-[4px] lg:p-[5px] "
            }  hover:bg-orange hover:text-white border text-[#9c9c9c] text-center border-gray-300 rounded-full`}
          >
            <MdOutlineRemoveRedEye size={22} className="inline" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
