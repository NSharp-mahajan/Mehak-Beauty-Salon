import ReactGA from "react-ga4";

export const initGA = () => {
  const gaId = import.meta.env.VITE_GA_ID;
  if (gaId) {
    ReactGA.initialize(gaId);
  } else {
    console.warn("GA ID not found in environment variables.");
  }
};

export const pageView = () => {
  if (import.meta.env.VITE_GA_ID) {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  }
};

export const trackEvent = (category, action, label = "") => {
  if (import.meta.env.VITE_GA_ID) {
    ReactGA.event({
      category,
      action,
      label,
    });
  }
};