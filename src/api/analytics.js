import ReactGA from "react-ga";

const TRACKING_ID = VITE_API_KEY_TRACKING_ID;
function init() {
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  ReactGA.initialize(TRACKING_ID, { debug: isDev });
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
