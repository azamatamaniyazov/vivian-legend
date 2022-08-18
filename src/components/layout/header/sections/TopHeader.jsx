function TopHeader() {
  return (
    <div className="py-4 flex flex-col lg:flex-row justify-between items-center">
      <ul className="flex flex-wrap items-center justify-center px-2">
        <li className="text-[#555555] cursor-pointer mr-1.5 mb-2 pr-1.5 md:border-r-2 md:mr-3 md:mb-0 md:pr-3 border-gray-300 hover:text-orange">
          About
        </li>
        <li className="text-[#555555] cursor-pointer mr-1.5 mb-2 pr-1.5 md:border-r-2 md:mr-3 md:mb-0 md:pr-3 border-gray-300 hover:text-orange">
          Store Location
        </li>
        <li className="text-[#555555] cursor-pointer mr-1.5 mb-2 pr-1.5 md:border-r-2 md:mr-3 md:mb-0 md:pr-3 border-gray-300 hover:text-orange">
          Order Tracking
        </li>
        <li className="text-[#555555] mb-2 md:mb-0">
          Need Help? Call: <span className="text-orange">+(93) 321-4567</span>
        </li>
      </ul>
      <ul className="flex items-center">
        <li className="text-[#555555] cursor-pointer mr-3 pr-3 border-r-2 border-gray-300 hover:text-orange">
          My Acoount
        </li>
        <li className="mr-3 pr-3 border-r-2 border-gray-300">
          <select
            name="currency"
            className="outline-none uppercase cursor-pointer"
          >
            <option value="usd">usd</option>
            <option value="euro">euro</option>
          </select>
        </li>
        <li>
          <select name="lang" className="outline-none cursor-pointer">
            <option value="en">English</option>
            <option value="ru">Russian</option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default TopHeader;
