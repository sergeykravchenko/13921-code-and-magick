'use strict';

(function () {
  var colorIndex = 0;

  window.colorizeElement = function (el, colorArray, cb) {
    colorIndex++;
    if (colorIndex > colorArray.length) {
      colorIndex = 0;
    }

    cb(el, colorArray[colorIndex]);
  };
})();
