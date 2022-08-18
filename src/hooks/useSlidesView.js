const { useState, useEffect } = require("react");

const useSlidesView = (initialValue) => {
  const [slidesView, setSlidesView] = useState(initialValue);

  const widthSize = () => {
    if (window.innerWidth < 1200) {
      initialValue === 1
        ? setSlidesView(1)
        : initialValue === 3
        ? setSlidesView(2)
        : setSlidesView(3);
    }
    if (window.innerWidth < 992) {
      setSlidesView(2);
    }
    if (window.innerWidth < 576) {
      setSlidesView(1);
    }
    if (window.innerWidth > 1200) {
      initialValue === 1 ? setSlidesView(1) : setSlidesView(initialValue);
    }
  };
  useEffect(() => {
    widthSize();
    window.addEventListener("resize", widthSize);

    return () => window.removeEventListener("resize", widthSize);
    // eslint-disable-next-line
  }, []);

  return { slidesView };
};

export default useSlidesView;
