/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/javascript/javascript.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/javascript/emoji.js":
/*!************************************!*\
  !*** ./public/javascript/emoji.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//and That Was How We Got Button Graphics\r\n\r\nconst emoji={\r\n  no: \"⛔\",\r\n  ghost: \"👻\",\r\n  moon_on: \"🌕\",\r\n  moon_off: \"🌑\",\r\n  gemini: \"♊\"\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (emoji);\r\n\n\n//# sourceURL=webpack:///./public/javascript/emoji.js?");

/***/ }),

/***/ "./public/javascript/javascript.js":
/*!*****************************************!*\
  !*** ./public/javascript/javascript.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emoji_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emoji.js */ \"./public/javascript/emoji.js\");\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ \"./public/javascript/state.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction main(){\r\n  function initialize(){\r\n\r\n    let state = new _state_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\r\n      image_ids: [],\r\n      image_id: 1,\r\n      available_folders: [],\r\n      available_tags: [],\r\n      favorites: new Set()\r\n    });\r\n\r\n    let content = document.getElementById(\"content\");\r\n    let urldata = document.getElementById(\"urldata\");\r\n\r\n    let img_tags = document.getElementById(\"img-tags\");\r\n    let tag_txt = document.getElementById(\"tag-txt\");\r\n    let tag_btn= document.getElementById(\"tag-btn\");\r\n\r\n    let filter_btn = document.getElementById(\"filter-btn\");\r\n    let all_btn = document.getElementById(\"filter-all\");\r\n    let none_btn = document.getElementById(\"filter-none\");\r\n    let tag_filters = document.getElementById(\"tag-filters\");\r\n    let fvt_btn = document.getElementById(\"fvt-btn\");\r\n    let gst_btn = document.getElementById(\"gst-btn\");\r\n    let dup_btn = document.getElementById(\"dup-btn\");\r\n\r\n    let feedback = document.getElementById(\"feedback\");\r\n\r\n\r\n    getState((JSONdata)=>{\r\n      let data = JSON.parse(JSONdata);\r\n      let image_ids = data.image_ids;\r\n      let image_id = getRandomImageId(image_ids);\r\n      let available_folders = data.folders;\r\n      let available_tags = data.tags;\r\n      let favorites = data.favorites;\r\n      const newState = {\r\n        image_ids,\r\n        image_id,\r\n        available_folders,\r\n        available_tags,\r\n        favorites\r\n      };\r\n\r\n      updateState(newState);\r\n    })\r\n  }\r\n\r\n  function updateState(someObj){\r\n    keys = Object.keys(someObj)\r\n\r\n    if (keys.includes('favorites') ){\r\n      updateFavorites(someObj['favorites']);\r\n      delete someObj['favorites'];\r\n      keys = keys.filter(\r\n        (key) => {\r\n          return key !== \"favorites\"\r\n        }\r\n      )\r\n    }\r\n\r\n    if (keys.includes('message') ){\r\n      updateFeedback(someObj['message']);\r\n      delete someObj['message'];\r\n      keys = keys.filter(\r\n        (key) => {\r\n          return key !== \"message\"\r\n        }\r\n      )\r\n    }\r\n\r\n    keys.forEach( (k)=>{\r\n      state[k] = someObj[k];\r\n    } );\r\n\r\n    if (keys.includes('available_folders') ){\r\n      updateFiltersNode('available_folders', true);\r\n    }\r\n\r\n    if (keys.includes('available_tags') ){\r\n      updateFiltersNode('available_tags', false);\r\n    }\r\n\r\n    if (keys.includes('image_id') ){\r\n      updateImageState(state['image_id']);\r\n    }\r\n\r\n    console.log(this.state);\r\n  }\r\n\r\n  function updateImageState(image_id){\r\n    src = `http://localhost:4567/images/${image_id}`;\r\n    content.src = src;\r\n\r\n    urldata.innerHTML = state['image_id']+\": \";\r\n\r\n    getTags(image_id, (JSONData)=>{\r\n      let tags = JSON.parse(JSONData);\r\n      updateimg_tagsNode(tags);\r\n    })\r\n\r\n    if(state['favorites'].has(image_id)){\r\n      fvt_btn.innerHTML = _emoji_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].moon_on;\r\n    } else {\r\n      fvt_btn.innerHTML = _emoji_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].moon_off;\r\n    }\r\n\r\n  }\r\n\r\n  function updateFeedback(message){\r\n    feedback.innerHTML = message;\r\n    setTimeout(()=>{feedback.innerHTML = \"\"}, 3000)\r\n  }\r\n\r\n  function updateFavorites(favArray){\r\n    state['favorites'].clear()\r\n\r\n    favArray.forEach((e)=>{state['favorites'].add(e)})\r\n\r\n    if(state['favorites'].has(state.image_id)){\r\n      fvt_btn.innerHTML = _emoji_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].moon_on;\r\n    } else {\r\n      fvt_btn.innerHTML = _emoji_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].moon_off;\r\n    }\r\n  }\r\n\r\n  function updateFiltersNode(filter, defaultState){\r\n    //get usefull values from filter name\r\n    let filterClass = filter.slice(10,-1);\r\n    filterClass += \"-filter\";\r\n    filterType = filterClass += \"s\";\r\n\r\n    let parent = document.getElementById(filterType);\r\n    parent.innerHTML = \"\";\r\n    let options = state[filter].sort();\r\n    options.forEach((option)=>{\r\n      let div = document.createElement(\"div\");\r\n\r\n      let cb = document.createElement(\"input\");\r\n      cb.type = \"checkbox\";\r\n      cb.className = filterClass;\r\n      cb.id = `${filterType}-${option}`;\r\n      cb.customLabel = option;\r\n      cb.defaultChecked = defaultState;\r\n\r\n      let label = document.createElement(\"label\");\r\n      label.for = cb.id;\r\n      label.textContent = option;\r\n\r\n      div.appendChild(cb);\r\n      div.appendChild(label);\r\n      parent.appendChild(div);\r\n    })\r\n  }\r\n\r\n  function getRandomImageId(ary){\r\n    return ary[Math.floor(Math.random()*ary.length)];\r\n  }\r\n\r\n  function getRandomPicture(){\r\n    let image_id = getRandomImageId(state.image_ids);\r\n    updateState({image_id});\r\n  }\r\n\r\n  function getTagFilters(){\r\n    let tagFilters = [];\r\n\r\n    q = $(\".tag-filters\");\r\n    q.each((i)=>{\r\n      if( q[i].checked === true){\r\n        customLabel = q[i].id.slice(12)\r\n        tagFilters.push(customLabel)\r\n      }\r\n    })\r\n    return tagFilters;\r\n  }\r\n\r\n  function getNextImageId(){\r\n    if(state.image_id===state.image_ids[state.image_ids.length-1]){\r\n      return state.image_ids[0];\r\n    } else {\r\n      let currentIndex = state.image_ids.indexOf(state.image_id);\r\n      return state.image_ids[currentIndex+1];\r\n    }\r\n  }\r\n\r\n  function addKeyControls(){\r\n    document.addEventListener(\"keydown\", handleKeyDown);\r\n    function handleKeyRight(){\r\n      let newState = {};\r\n      newState[\"image_id\"] = getNextImageId();\r\n      updateState(newState);\r\n    }\r\n\r\n    function handleKeyLeft(){\r\n      let newState;\r\n      if(state.image_id===state.image_ids[0]){\r\n        newState = {image_id: state.image_ids[state.image_ids.length-1] };\r\n      } else {\r\n        let index = state.image_ids.indexOf(state.image_id);\r\n        newState = {image_id: state.image_ids[index - 1]};\r\n      }\r\n      updateState(newState);\r\n    }\r\n\r\n    function handleKeyDown(e){\r\n\r\n      k = e.key\r\n\r\n      if (k==\"ArrowLeft\"){\r\n        handleKeyLeft();\r\n      }\r\n      if(k==\"ArrowRight\"){\r\n        handleKeyRight();\r\n      }\r\n      if(k==\" \"){\r\n        e.preventDefault();\r\n        getRandomPicture();\r\n      }\r\n      if(k==\"Enter\"){\r\n\r\n      }\r\n      if(k==\"9\"){\r\n        e.preventDefault();\r\n        gst_btn.click();\r\n      }\r\n    }\r\n  }\r\n\r\n  function updateimg_tagsNode(tags){\r\n    img_tags.textContent = \"\";\r\n    tags.forEach( (tag)=>{\r\n      img_tags.textContent += `${tag}, `;\r\n    })\r\n  }\r\n\r\n  function initializeFavoriteButton(){\r\n    function handleFavoriteImageResponse(JSONData){\r\n      let data = JSON.parse(JSONData);\r\n      let message = data.message;\r\n      let favorites = data.favorites;\r\n      updateState({message, favorites});\r\n\r\n    }\r\n\r\n    function favoriteImage(e){\r\n      e.preventDefault();\r\n      postFavoriteImage(state.image_id, handleFavoriteImageResponse);\r\n    }\r\n\r\n    fvt_btn.addEventListener(\"click\", favoriteImage);\r\n\r\n  }\r\n\r\n  function initializeGhostButton(){\r\n    function handleGhostImageResponse(JSONData){\r\n      let data = JSON.parse(JSONData);\r\n      let message = data.message;\r\n      let image_ids = data.image_ids;\r\n      let image_id = getNextImageId();\r\n      updateState({image_ids, image_id});\r\n    }\r\n\r\n    function ghostImage(e){\r\n      e.preventDefault();\r\n      tag_filters = getTagFilters();\r\n      postGhostImage(\r\n        state.image_id,\r\n        {tag_filters},\r\n        handleGhostImageResponse\r\n      );\r\n    }\r\n    gst_btn.innerHTML=_emoji_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ghost;\r\n    gst_btn.addEventListener(\"click\", ghostImage);\r\n  }\r\n\r\n\r\n  function initializeTagButton(){\r\n    function handleTagImageResponse(JSONData){\r\n      let data = JSON.parse(JSONData);\r\n      let available_tags = data.available_tags;\r\n      let img_tags = data.img_tags;\r\n      let message = data.message;\r\n      const newState = {\r\n        available_tags,\r\n        message\r\n      }\r\n      //todo test this\r\n      updateState(newState);\r\n\r\n      updateimg_tagsNode(img_tags);\r\n\r\n    }\r\n\r\n    function tagImage(e){\r\n      e.preventDefault();\r\n      const data = {tag: tag_txt.value};\r\n      tag_txt.value = \"\";\r\n      postTagImage(state.image_id, data, handleTagImageResponse);\r\n    }\r\n\r\n    tag_btn.addEventListener(\"click\", tagImage);\r\n\r\n    tag_txt.addEventListener(\"keyup\",(e)=>{\r\n      e.preventDefault();\r\n      if (e.key == \"Enter\" ){\r\n        tag_btn.click();\r\n      }\r\n    });\r\n  }\r\n\r\n  function initializeFilterButton(){\r\n\r\n    function filter_image_ids(e){\r\n      e.preventDefault();\r\n      // debugger\r\n\r\n      tagFilters = getTagFilters();\r\n\r\n      getImageIds({tagFilters},(JSONData)=>{\r\n        let data = JSON.parse(JSONData);\r\n\r\n        let image_ids = data.image_ids;\r\n        let image_id = getRandomImageId(image_ids);\r\n\r\n        const newState = {\r\n          image_ids,\r\n          image_id,\r\n        };\r\n\r\n        updateState(newState);\r\n      })\r\n    }\r\n    filter_btn.addEventListener(\"click\", filter_image_ids)\r\n  }\r\n\r\n  initialize();\r\n  addKeyControls();\r\n  initializeTagButton();\r\n  initializeFavoriteButton();\r\n  initializeGhostButton();\r\n  initializeFilterButton();\r\n}\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded',()=>{\r\n  main();\r\n})\r\n\n\n//# sourceURL=webpack:///./public/javascript/javascript.js?");

/***/ }),

/***/ "./public/javascript/state.js":
/*!************************************!*\
  !*** ./public/javascript/state.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StateManager; });\nclass StateManager{\r\n  constructor(obj){\r\n    Object.keys(obj).forEach((key)=>{\r\n      this[key] = obj[key]\r\n    })\r\n  }\r\n\r\n  update(newState){\r\n    keys = Object.keys(newState);\r\n\r\n\r\n  }\r\n\r\n  add(name,value){\r\n    this[name] = value;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n//\r\n// export function getGrossState(){\r\n//   state = new StateManager();\r\n//   state.add(\"image_ids\", []);\r\n//   state.add(\"image_id\", 1);\r\n//   state.add(available_folders, []);\r\n//   state.add(\"available_tags\", []);\r\n//   state.add(\"favorites\": new Set());\r\n// }\r\n\n\n//# sourceURL=webpack:///./public/javascript/state.js?");

/***/ })

/******/ });