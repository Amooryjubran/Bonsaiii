import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Scroller({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return children;
}
