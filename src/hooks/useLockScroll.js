import { useLayoutEffect } from "react";
export default function useLockScroll() {
  useLayoutEffect(() => {
    const bodyOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = bodyOverflow);
  }, []);
}
