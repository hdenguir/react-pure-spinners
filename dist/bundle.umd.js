!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e((n="undefined"!=typeof globalThis?globalThis:n||self).ReactPureSpinners={},n.React)}(this,(function(n,e){"use strict";function l(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var i=l(e);n.Ellipsis=function(){return i.default.createElement(i.default.Fragment,null,i.default.createElement("style",null,"".concat(".lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-ellipsis div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #f0f0f0;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.lds-ellipsis div:nth-child(1) {\n  left: 8px;\n  animation: lds-ellipsis1 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(2) {\n  left: 8px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(3) {\n  left: 32px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(4) {\n  left: 56px;\n  animation: lds-ellipsis3 0.6s infinite;\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n")),i.default.createElement("div",{className:"lds-ellipsis"},i.default.createElement("div",null),i.default.createElement("div",null),i.default.createElement("div",null),i.default.createElement("div",null)))},n.Ring=function(){return i.default.createElement(i.default.Fragment,null,i.default.createElement("style",null,"".concat(".lds-dual-ring {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n}\n.lds-dual-ring:after {\n  content: '';\n  display: block;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 6px solid #f0f0f0;\n  border-color: #f0f0f0 transparent #f0f0f0 transparent;\n  animation: lds-dual-ring 1.2s linear infinite;\n}\n@keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n")),i.default.createElement("div",{className:"lds-dual-ring"}))},n.Ripple=function(){return i.default.createElement(i.default.Fragment,null,i.default.createElement("style",null,"".concat(".lds-ripple {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #f0f0f0;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n@keyframes lds-ripple {\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0;\n  }\n}\n")),i.default.createElement("div",{className:"lds-ripple"},i.default.createElement("div",null),i.default.createElement("div",null)))},Object.defineProperty(n,"__esModule",{value:!0})}));
