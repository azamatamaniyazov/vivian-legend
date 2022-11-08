import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCategoryId } from "../../../../slices/categorySlice";
function PopularCategories() {
  const categories = useSelector((state) =>
    state.category.categories.slice(0, 6)
  );
  const dispatch = useDispatch();

  const onSelectCategoryId = (id) => {
    dispatch(setCategoryId(id));
  };
  return (
    <div className="pt-[54px]">
      <h2 className="text-[25px] text-center mb-7">Популярный Категории</h2>

      <div className="grid grid-rows-2 grid-cols-12 gap-6">
        {categories.map((elem) => {
          return (
            <div
              key={elem.id}
              onClick={() => onSelectCategoryId(elem.id)}
              className="col-span-12 lg:col-span-4 sm:col-span-6"
            >
              <Link
                to="/products"
                className="block relative border border-gray-300 p-5 hover:border-orange hover:text-orange transition-colors before:absolute before:top-0 before:right-0 before:w-[50%] before:h-full before:bg-[#fff3ef] before:clip-path"
              >
                {/* <img
                  src={elem.image}
                  alt="tool"
                  className="mx-auto sm:w-[234px] mb-[10px] bg-[#eeeeee] xl:bg-transparent xl:absolute xl:max-w-[145px] top-0 right-[35px]"
                /> */}
                <h3 className="text-xl font-medium mb-2">{elem.name}</h3>
                <span className="text-[#9c9c9c] mb-5 block">15 Products</span>
                <span>Shop Now</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularCategories;
