import { Link } from "react-router-dom";
import CategoryDropdown from "./dropdowns/CategoryDropdown";
import MenuDropdown from "./dropdowns/MenuDropdown";

function MobileNav() {
  return (
    <div className="flex justify-between items-center lg:hidden relative">
      <div className="flex items-center">
        <CategoryDropdown />
        <Link to="/">
          <img
            className="w-28"
            src="https://templates.envytheme.com/ehay/default/assets/images/logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <MenuDropdown />
    </div>
  );
}

export default MobileNav;
