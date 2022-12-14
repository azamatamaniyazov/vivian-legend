import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetViewBasketQuery } from "../../../../api/apiSlice";
function BottomHeader() {
  const { data: basket, isSuccess } = useGetViewBasketQuery();
  const { orders, total_sum } = isSuccess && basket.payload;
  return (
    <div className="flex flex-col items-center lg:grid lg:grid-cols-3 py-2">
      {/* LOGO */}
      <Link to="/" className="hidden lg:block">
        <img src="http://vivian-legend.uz/frontas/images/logo.png" alt="logo" />
      </Link>

      {/* SEARCH INPUT */}
      <div className="relative w-full">
        <input
          className="h-[50px] w-full mb-5 lg:mb-0 py-2 px-5 border border-orange outline-none rounded"
          type="search"
          placeholder="Искать..."
        />
        <button className="flex items-center absolute text-white bg-orange py-2.5 px-2 rounded top-1 right-1">
          <FiSearch />
          <span className="ml-1">Поиск</span>
        </button>
      </div>

      <div className="flex justify-end">
        {/* FAVORITE PRODUCTS ELEMENT*/}
        <div className="favorite  flex items-center mr-7">
          <div className="relative flex justify-center items-center h-12 w-12 mr-3 rounded-full bg-[#fff1e8]">
            <MdFavoriteBorder size={26} className="text-orange" />
            <span className="absolute text-[12px] text-white text-center font-semibold h-[18px] w-[18px] rounded-full bg-orange top-0 -right-1">
              0
            </span>
          </div>
          <div>
            <span className="text-[#9c9c9c]">
              Избранное
              <br />
              <span className="text-[#111111] font-semibold">
                Список желаний
              </span>
            </span>
          </div>
        </div>

        {/* CART PRODUCTS ELEMENT*/}
        <Link to={"/shopping-cart"} className="cart flex items-center">
          <div className="relative flex justify-center items-center h-12 w-12 mr-3 rounded-full bg-[#fff1e8]">
            <FiShoppingCart size={26} className="text-orange" />
            <span className="absolute text-[12px] text-white text-center font-semibold h-[18px] w-[18px] rounded-full bg-orange top-0 -right-1">
              {orders ? orders.length : 0}
            </span>
          </div>
          <div>
            <span className="text-[#9c9c9c]">
              Корзина:
              <br />
              <span className="text-[#111111] font-semibold">
                {total_sum ? total_sum : 0} UZS
              </span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BottomHeader;
