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
const IMG_URL = "//i.imgur.com/"

const qsa = document.querySelectorAll.bind(document);
const ce = document.createElement.bind(document);

const getReactComponent = (selector) => {
  let el = qsa(selector).item(REACT_ELEMENT).wrappedJSObject;

  return el[Object.keys(el)[REACT_FUNCTION]];
}

const getReactInstance = (selector) => {
  return getReactComponent(selector)
    ._currentElement
    ._owner
    ._instance;
}

const getReactDisplayName = (reactObj) => {
  return reactObj
    .constructor
    .displayName;
}

const getHeader = () => {
  return getReactInstance(HEADER_ELEMENT);
}

const setSlideShowElement = () => {
  let div = ce('div')
  div.setAttribute('id', SLIDE_SHOW_ID);
  div.setAttribute('style', SLIDE_SHOW_STYLE);
  document.body.appendChild(div);

  return div
}

const getImagesFromReactElement = (selector) => 
  (getReactInstance(selector).props.data.album_images)

let images = cloneInto(getImagesFromReactElement(IMAGES_ELEMENT), window).map((i) => (`${IMG_URL}${i.hash}${i.ext}`));

let show = setSlideShowElement();
let currentImage = 0;

setInterval(() => {
  if (images[currentImage]) {
    show.setAttribute('style', `${SLIDE_SHOW_STYLE}; background-image: url('${images[currentImage]}'); background-repeat: no-repeat;
      background-position: center;
    `)
    currentImage += 1
  } else {
    currentImage = 0;
    getHeader()._next()
    images = cloneInto(getImagesFromReactElement(IMAGES_ELEMENT), window).map((i) => (`${IMG_URL}/${i.hash}${i.ext}`));
  }
}, DEFAULT_TRANSTION_TIME)
