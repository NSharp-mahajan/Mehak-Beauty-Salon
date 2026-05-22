import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(import.meta.env.VITE_GA_ID);
};

export const pageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};

export const trackEvent = (category, action, label = "") => {
  ReactGA.event({
    category,
    action,
    label,
  });
};