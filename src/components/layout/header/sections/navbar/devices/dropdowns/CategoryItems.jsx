import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCategoryId } from "../../../../../../../slices/categorySlice";

function CategoryItems({ categoryRef }) {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const onSelectCategoryId = (id) => {
    dispatch(setCategoryId(id));
  };

  const renderItems = categories.map((item) => {
    return (
      <li key={item.id} className="px-5">
        <Link
          to="/products"
          onClick={() => onSelectCategoryId(item.id)}
          className="block hover:text-orange py-3 border-b border-gray-300"
        >
          {item.name}
        </Link>
      </li>
    );
  });

  return (
    <div
      ref={categoryRef}
      className="absolute overflow-y-scroll h-[300px] bg-white animate-fade top-[50px] lg:top-16 lg:left-0 z-10 w-full border border-gray-300 shadow-lg"
    >
      <ul className="text-left">{renderItems}</ul>
    </div>
  );
}

export default CategoryItems;
