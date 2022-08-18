import { Link } from "react-router-dom";

function CategoryItems({ categoryRef }) {
  return (
    <div
      ref={categoryRef}
      className="absolute bg-white animate-fade top-[50px] lg:top-16 lg:left-0 z-10 w-full border border-gray-300 shadow-lg"
    >
      <ul className="text-left">
        <li className="px-5">
          <Link to="/products" className="block py-3 border-b border-gray-300">
            Power Tools
          </Link>
        </li>
        <li className="px-5">
          <Link to="/products" className="block py-3 border-b border-gray-300">
            Hand Tools
          </Link>
        </li>
        <li className="px-5">
          <Link to="/products" className="block py-3 border-b border-gray-300">
            Cordless Tools
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default CategoryItems;
