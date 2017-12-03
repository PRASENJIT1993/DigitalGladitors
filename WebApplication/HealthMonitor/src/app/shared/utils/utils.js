
import 'whatwg-fetch';

//const addCredentialsHeader = (options = {}) => { return { ...options, credentials: 'include' }; };
const addCredentialsHeader = (options = {}) => { return { ...options }; };

export const request = (url, options) => {
  const newOptions = addCredentialsHeader(options);
  const newUrl = new URL(url);
  return fetch(newUrl, newOptions)
    .then((resp) => {
      return resp.json();
    });
};

export function consoleLogger(msg) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(msg);
  }
}

/**
 * Function to get Base URL of current environment
 */
export function getBASEURL() {
  return `${getOriginBASEURL()}`;
}

/**
 * Function to get Origin of Base URL of current environment
 */
export function getOriginBASEURL() {
  const baseURL = window.location.origin;
  let freedomUrl = baseURL;
  if (baseURL.search(/localhost/ig) !== -1 || baseURL.search(/file:\/\/\//ig) !== -1) {
    // if running on local host get base url from webpack config file
    freedomUrl = process.env.API_URL;
  }
  return `${freedomUrl}`;
}