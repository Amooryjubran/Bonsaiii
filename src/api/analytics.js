import ReactGA from "react-ga";

function init() {
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  ReactGA.initialize(import.meta.env.VITE_API_KEY_TRACKING_ID, {
    debug: isDev,
  });
}
function sendEvent(payload) {
  ReactGA.event(payload);
}
function sendPageview(path) {
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
}
export default {
  init,
  sendEvent,
  sendPageview,
};
