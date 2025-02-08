import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useLocoScroll = (start = true) => {
  useEffect(() => {
    if (!start) return;

    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [start]);
};

export default useLocoScroll;
