import { Fragment, useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./style.css";
export default function ScrollToTop() {
  const [hidden, setHiddent] = useState(false);
  const showScroll = () => {
    if (window.pageYOffset > 200) {
      setHiddent(true);
    } else setHiddent(false);
  };
  const ScrolToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", showScroll);
    return () => {
      window.removeEventListener("scroll", showScroll);
    };
  }, []);

  return (
    <Fragment>
      {hidden && (
        <button className="scrollToTop">
          <KeyboardArrowUpIcon onClick={ScrolToTop} />
        </button>
      )}
    </Fragment>
  );
}
