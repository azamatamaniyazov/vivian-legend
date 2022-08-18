import { useEffect } from "react";

const useClickOutside = (ref, className, closeFun) => {
  const dropdownClicked = (event) => {
    // eslint-disable-next-line
    const array = event.path.map((item) => {
      if (item.tagName === "BUTTON" && item.classList[0] === className) {
        return true;
      }
    });
    return array.some((elem) => elem === true);
  };

  useEffect(() => {
    const closeCategory = (e) => {
      if (e.target !== ref.current && !dropdownClicked(e)) {
        closeFun(false);
      }
    };
    document.body.addEventListener("click", closeCategory);
    return () => document.body.removeEventListener("click", closeCategory);
    // eslint-disable-next-line
  }, []);
};

export default useClickOutside;
