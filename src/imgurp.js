let mediaList = [];

const HEADER_ELEMENT = '.post-header [data-reactroot]';
const REACT_FUNCTION = 0;
const REACT_ELEMENT = 0;
const DEFAULT_TRANSTION_TIME = 5000;

const qsa = document.querySelectorAll.bind(document);

const getReactComponent = (selector) => {
  let el = qsa(selector).item(REACT_ELEMENT).wrappedJSObject;

  return el[Object.keys(el)[REACT_FUNCTION]]
    ._currentElement
    ._owner
    ._instance;
}

const getHeader = () => {
  return getReactComponent(HEADER_ELEMENT);
}

setInterval(() => (getHeader()._next()), DEFAULT_TRANSTION_TIME);
