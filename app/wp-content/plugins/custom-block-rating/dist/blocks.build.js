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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__ = __webpack_require__(/*! @wordpress/blocks */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss__ = __webpack_require__(/*! ./style.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_scss__);\n\n\n\n\n//  Import CSS.\n\n\n\nObject(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__[\"registerBlockType\"])('cgb/block-custom-block-rating', {\n  title: 'レーティング用のブロック',\n  description: 'レーティングを表示するためのブロックです。',\n  // MEMO: アイコン一覧 https://developer.wordpress.org/resource/dashicons/\n  icon: 'star-empty',\n  category: 'layout',\n  // MEMO: 検索する際のキーワードを指定\n  keywords: ['レーティング', '装飾'],\n\n  // MEMO: 入力された値を保存するための属性を追加\n  attributes: {\n    ratingTitle: {\n      type: 'string',\n      default: ''\n    },\n    ratingSelect: {\n      type: 'string',\n      default: ''\n    },\n    ratingText: {\n      type: 'string',\n      default: ''\n    }\n  },\n\n  edit: function edit(_ref) {\n    var _ref$attributes = _ref.attributes,\n        ratingTitle = _ref$attributes.ratingTitle,\n        ratingSelect = _ref$attributes.ratingSelect,\n        ratingText = _ref$attributes.ratingText,\n        setAttributes = _ref.setAttributes;\n\n    var options = [{ value: '-', label: '評価を選択してください' }, { value: 1, label: '★' }, { value: 2, label: '★★' }, { value: 3, label: '★★★' }, { value: 4, label: '★★★★' }, { value: 5, label: '★★★★★' }];\n\n    return wp.element.createElement(\n      'div',\n      { className: 'wp-block-cgb-block-my-block rating-content' },\n      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__[\"RichText\"], {\n        value: ratingTitle,\n        onChange: function onChange(newText) {\n          return setAttributes({ ratingTitle: newText });\n        },\n        tagName: 'h2',\n        placeholder: '\\u30BF\\u30A4\\u30C8\\u30EB\\u3092\\u5165\\u529B\\u3057\\u3066\\u304F\\u3060\\u3055\\u3044',\n        keepPlaceholderOnFocus: false\n      }),\n      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__[\"SelectControl\"], {\n        options: options,\n        value: ratingSelect,\n        onChange: function onChange(newId) {\n          return setAttributes({ ratingSelect: newId });\n        }\n      }),\n      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__[\"RichText\"], {\n        value: ratingText,\n        onChange: function onChange(newText) {\n          return setAttributes({ ratingText: newText });\n        },\n        tagName: 'p',\n        placeholder: '\\u672C\\u6587\\u3092\\u5165\\u529B\\u3057\\u3066\\u304F\\u3060\\u3055\\u3044',\n        keepPlaceholderOnFocus: false\n      })\n    );\n  },\n\n  save: function save(_ref2) {\n    var _ref2$attributes = _ref2.attributes,\n        ratingTitle = _ref2$attributes.ratingTitle,\n        ratingSelect = _ref2$attributes.ratingSelect,\n        ratingText = _ref2$attributes.ratingText;\n\n    return wp.element.createElement(\n      'div',\n      { className: 'rating-content' },\n      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__[\"RichText\"].Content, { value: ratingTitle, tagName: 'h2' }),\n      wp.element.createElement(\n        'div',\n        { className: 'rating-' + ratingSelect },\n        wp.element.createElement(\n          'span',\n          { className: 'star' },\n          '\\u2605'\n        ),\n        wp.element.createElement(\n          'span',\n          { className: 'star' },\n          '\\u2605'\n        ),\n        wp.element.createElement(\n          'span',\n          { className: 'star' },\n          '\\u2605'\n        ),\n        wp.element.createElement(\n          'span',\n          { className: 'star' },\n          '\\u2605'\n        ),\n        wp.element.createElement(\n          'span',\n          { className: 'star' },\n          '\\u2605'\n        )\n      ),\n      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__[\"RichText\"].Content, { value: ratingText, tagName: 'p' })\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tICdAd29yZHByZXNzL2Jsb2NrLWVkaXRvcic7XG5pbXBvcnQgeyBTZWxlY3RDb250cm9sIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2diL2Jsb2NrLWN1c3RvbS1ibG9jay1yYXRpbmcnLCB7XG4gIHRpdGxlOiAn44Os44O844OG44Kj44Oz44Kw55So44Gu44OW44Ot44OD44KvJyxcbiAgZGVzY3JpcHRpb246ICfjg6zjg7zjg4bjgqPjg7PjgrDjgpLooajnpLrjgZnjgovjgZ/jgoHjga7jg5bjg63jg4Pjgq/jgafjgZnjgIInLFxuICAvLyBNRU1POiDjgqLjgqTjgrPjg7PkuIDopqcgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvXG4gIGljb246ICdzdGFyLWVtcHR5JyxcbiAgY2F0ZWdvcnk6ICdsYXlvdXQnLFxuICAvLyBNRU1POiDmpJzntKLjgZnjgovpmpvjga7jgq3jg7zjg6/jg7zjg4njgpLmjIflrppcbiAga2V5d29yZHM6IFsn44Os44O844OG44Kj44Oz44KwJywgJ+ijhemjviddLFxuXG4gIC8vIE1FTU86IOWFpeWKm+OBleOCjOOBn+WApOOCkuS/neWtmOOBmeOCi+OBn+OCgeOBruWxnuaAp+OCkui/veWKoFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgcmF0aW5nVGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIHJhdGluZ1NlbGVjdDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgcmF0aW5nVGV4dDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH1cbiAgfSxcblxuICBlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcbiAgICB2YXIgX3JlZiRhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgICByYXRpbmdUaXRsZSA9IF9yZWYkYXR0cmlidXRlcy5yYXRpbmdUaXRsZSxcbiAgICAgICAgcmF0aW5nU2VsZWN0ID0gX3JlZiRhdHRyaWJ1dGVzLnJhdGluZ1NlbGVjdCxcbiAgICAgICAgcmF0aW5nVGV4dCA9IF9yZWYkYXR0cmlidXRlcy5yYXRpbmdUZXh0LFxuICAgICAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBbeyB2YWx1ZTogJy0nLCBsYWJlbDogJ+ipleS+oeOCkumBuOaKnuOBl+OBpuOBj+OBoOOBleOBhCcgfSwgeyB2YWx1ZTogMSwgbGFiZWw6ICfimIUnIH0sIHsgdmFsdWU6IDIsIGxhYmVsOiAn4piF4piFJyB9LCB7IHZhbHVlOiAzLCBsYWJlbDogJ+KYheKYheKYhScgfSwgeyB2YWx1ZTogNCwgbGFiZWw6ICfimIXimIXimIXimIUnIH0sIHsgdmFsdWU6IDUsIGxhYmVsOiAn4piF4piF4piF4piF4piFJyB9XTtcblxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnd3AtYmxvY2stY2diLWJsb2NrLW15LWJsb2NrIHJhdGluZy1jb250ZW50JyB9LFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG4gICAgICAgIHZhbHVlOiByYXRpbmdUaXRsZSxcbiAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG5ld1RleHQpIHtcbiAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IHJhdGluZ1RpdGxlOiBuZXdUZXh0IH0pO1xuICAgICAgICB9LFxuICAgICAgICB0YWdOYW1lOiAnaDInLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1xcdTMwQkZcXHUzMEE0XFx1MzBDOFxcdTMwRUJcXHUzMDkyXFx1NTE2NVxcdTUyOUJcXHUzMDU3XFx1MzA2NlxcdTMwNEZcXHUzMDYwXFx1MzA1NVxcdTMwNDQnLFxuICAgICAgICBrZWVwUGxhY2Vob2xkZXJPbkZvY3VzOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoU2VsZWN0Q29udHJvbCwge1xuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICB2YWx1ZTogcmF0aW5nU2VsZWN0LFxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV3SWQpIHtcbiAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IHJhdGluZ1NlbGVjdDogbmV3SWQgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG4gICAgICAgIHZhbHVlOiByYXRpbmdUZXh0LFxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV3VGV4dCkge1xuICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgcmF0aW5nVGV4dDogbmV3VGV4dCB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdGFnTmFtZTogJ3AnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1xcdTY3MkNcXHU2NTg3XFx1MzA5MlxcdTUxNjVcXHU1MjlCXFx1MzA1N1xcdTMwNjZcXHUzMDRGXFx1MzA2MFxcdTMwNTVcXHUzMDQ0JyxcbiAgICAgICAga2VlcFBsYWNlaG9sZGVyT25Gb2N1czogZmFsc2VcbiAgICAgIH0pXG4gICAgKTtcbiAgfSxcblxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYyKSB7XG4gICAgdmFyIF9yZWYyJGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzLFxuICAgICAgICByYXRpbmdUaXRsZSA9IF9yZWYyJGF0dHJpYnV0ZXMucmF0aW5nVGl0bGUsXG4gICAgICAgIHJhdGluZ1NlbGVjdCA9IF9yZWYyJGF0dHJpYnV0ZXMucmF0aW5nU2VsZWN0LFxuICAgICAgICByYXRpbmdUZXh0ID0gX3JlZjIkYXR0cmlidXRlcy5yYXRpbmdUZXh0O1xuXG4gICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICdyYXRpbmctY29udGVudCcgfSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7IHZhbHVlOiByYXRpbmdUaXRsZSwgdGFnTmFtZTogJ2gyJyB9KSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAncmF0aW5nLScgKyByYXRpbmdTZWxlY3QgfSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N0YXInIH0sXG4gICAgICAgICAgJ1xcdTI2MDUnXG4gICAgICAgICksXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdzdGFyJyB9LFxuICAgICAgICAgICdcXHUyNjA1J1xuICAgICAgICApLFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnc3RhcicgfSxcbiAgICAgICAgICAnXFx1MjYwNSdcbiAgICAgICAgKSxcbiAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N0YXInIH0sXG4gICAgICAgICAgJ1xcdTI2MDUnXG4gICAgICAgICksXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdzdGFyJyB9LFxuICAgICAgICAgICdcXHUyNjA1J1xuICAgICAgICApXG4gICAgICApLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LkNvbnRlbnQsIHsgdmFsdWU6IHJhdGluZ1RleHQsIHRhZ05hbWU6ICdwJyB9KVxuICAgICk7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************!*\
  !*** external "wp.blocks" ***!
  \****************************/
/*! dynamic exports provided */
/*! exports used: registerBlockType */
/***/ (function(module, exports) {

module.exports = wp.blocks;

/***/ }),
/* 3 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/*! exports used: RichText */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ }),
/* 4 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: SelectControl */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 5 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);