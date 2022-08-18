import BottomHeader from "./sections/BottomHeader";
import Navbar from "./sections/navbar/Navbar";
import TopHeader from "./sections/TopHeader";

function Header() {
  return (
    <header>
      <div className="w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1176px] 2xl:w-[1320px] mx-auto px-3">
        <TopHeader />
        <BottomHeader />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
