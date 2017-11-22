'use strict';

var CHART_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_INDENT = 50;
var INITIAL_X = 120;
var INITIAL_Y = 90;

var getMaxArray = function (array) {
  var max = array[0];
  for (var i = 1; i <= array.length - 1; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  return max;
};

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

var drawChart = function (ctx, names, times) {
  var step = -CHART_HEIGHT / getMaxArray(times);

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandomNum(0.1, 0.9) + ')';
    }

    var startBarX = INITIAL_X + (BAR_WIDTH + BAR_INDENT) * i;
    var startBarY = INITIAL_Y + CHART_HEIGHT;
    var barHeight = times[i] * step;

    ctx.fillRect(startBarX, startBarY, BAR_WIDTH, barHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], startBarX, startBarY + 15);
    ctx.fillText(Math.floor(times[i]), startBarX, startBarY + barHeight - 5);
  }
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0,0,0,0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx. fillText('Список результатов:', 120, 60);

  drawChart(ctx, names, times);
};
