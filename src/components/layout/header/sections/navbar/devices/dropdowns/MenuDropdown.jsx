import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import useClickOutside from "../../../../../../../hooks/useClickOutside";

function MenuDropdown() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  useClickOutside(menuRef, "menu", setShowMenu);
  const menuToggler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <button className="menu text-orange" onClick={menuToggler}>
        <GiHamburgerMenu size={35} />
      </button>
      {showMenu && (
        <div
          ref={menuRef}
          className="absolute bg-white animate-fade top-[52px] z-10 w-full shadow-menu"
        >
          <ul>
            <li>
              <Link
                to="/tools"
                className="block pl-9 pr-3 py-3 hover:text-orange transition-colors border-b border-[#dbeefd]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/tools"
                className="flex justify-between pl-9 pr-3 py-3 hover:text-orange transition-colors border-b border-[#dbeefd]"
              >
                <span>Shops</span>
                <span className="text-xl font-bold">+</span>
              </Link>
            </li>
            <li>
              <Link
                to="/tools"
                className="flex justify-between pl-9 pr-3 py-3 hover:text-orange transition-colors border-b border-[#dbeefd]"
              >
                <span>Pages</span>
                <span className="text-xl font-bold">+</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MenuDropdown;
