import { useRef, useState } from "react";
import { RiArrowDropDownLine, RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import CategoryItems from "./dropdowns/CategoryItems";

function DesktopNav() {
  const [showCategory, setShowCategory] = useState(false);
  const categoryRef = useRef();

  useClickOutside(categoryRef, "category", setShowCategory);

  const categoryToggler = () => setShowCategory(!showCategory);
  return (
    <div className="hidden lg:flex">
      {/* CATEGORY */}
      <button
        className="category relative flex justify-between items-center bg-white w-[220px] xl:w-80 py-5 px-2 xl:px-6"
        onClick={categoryToggler}
      >
        <div className="flex items-center text-orange">
          <RiMenuLine size={20} />
          <span className="ml-2 uppercase text-sm xl:text-base">
            all categories
          </span>
        </div>
        <RiArrowDropDownLine size={20} className="text-orange" />
        {showCategory && <CategoryItems categoryRef={categoryRef} />}
      </button>

      {/* MENU */}
      <div className="flex w-full justify-between items-center text-white ml-4 xl:ml-6">
        <ul className="flex">
          <li className="py-5">
            <Link to="/" className="cursor-pointer mr-3 xl:mr-5">
              Home
            </Link>
          </li>
          <li className="py-5">
            <span className="cursor-pointer mx-3 xl:mx-5">
              Shop
              <RiArrowDropDownLine size={25} className="inline" />
            </span>
          </li>
          <li className="py-5">
            <span className="cursor-pointer mx-3 xl:mx-5">
              Pages
              <RiArrowDropDownLine size={25} className="inline" />
            </span>
          </li>
          <li className="py-5">
            <span className="cursor-pointer mx-3 xl:mx-5">
              Blog
              <RiArrowDropDownLine size={25} className="inline" />
            </span>
          </li>
          <li className="py-5">
            <span className="cursor-pointer mx-3 xl:mx-5">Contact</span>
          </li>
        </ul>
        <span>Free shipping on all orders over $100</span>
      </div>
    </div>
  );
}

export default DesktopNav;
