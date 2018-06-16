let mediaList = [];

const HEADER_ELEMENT = '.post-header [data-reactroot]';
const IMAGES_ELEMENT = '.post-images [data-reactroot]';
const REACT_FUNCTION = 0;
const REACT_ELEMENT = 0;
const DEFAULT_TRANSTION_TIME = 5000;
const SLIDE_SHOW_ID = 'slide-show';
const BODY_STYLE = 'overflow: hidden;';
const SLIDE_SHOW_STYLE = `
  display: block;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 102;
  background-color: black;
`

const qsa = document.querySelectorAll.bind(document);
const ce = document.createElement.bind(document);

const getReactComponent = (selector) => {
  let el = qsa(selector).item(REACT_ELEMENT).wrappedJSObject;

  return el[Object.keys(el)[REACT_FUNCTION]]
    ._currentElement
    ._owner
    ._instance;
}

const getReactChildren = (selector) => {

}

const getHeader = () => {
  return getReactComponent(HEADER_ELEMENT);
}

const setSlideShowElement = () => {
  let div = ce('div')
  div.setAttribute('id', SLIDE_SHOW_ID);
  div.setAttribute('style', SLIDE_SHOW_STYLE);
  return document.body.appendChild(div);
}

let images = getReactComponent(IMAGES_ELEMENT);

//console.log(images);

//setSlideShowElement();
//document.body.setAttribute('style', BODY_STYLE);

//setInterval(() => (getHeader()._next()), DEFAULT_TRANSTION_TIME);
