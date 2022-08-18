import DesktopNav from "./devices/DesktopNav";
import MobileNav from "./devices/MobileNav";
function Navbar() {
  return (
    <nav className="lg:bg-orange shadow-navbar w-screen xl:w-full py-[15px] lg:py-0">
      <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
        <DesktopNav />
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
