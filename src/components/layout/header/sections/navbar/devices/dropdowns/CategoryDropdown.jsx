import { RiMenuLine } from "react-icons/ri";
import { useRef, useState } from "react";
import CategoryItems from "./CategoryItems";
import useClickOutside from "../../../../../../../hooks/useClickOutside";

function CategoryDropdown() {
  const [showCategory, setShowCategory] = useState(false);
  const categoryRef = useRef();

  useClickOutside(categoryRef, "category", setShowCategory);
  const categoryToggler = () => {
    setShowCategory(!showCategory);
  };

  return (
    <>
      <button className="category text-orange mr-4" onClick={categoryToggler}>
        <RiMenuLine size={24} />
      </button>
      {showCategory && <CategoryItems categoryRef={categoryRef} />}
    </>
  );
}

export default CategoryDropdown;
