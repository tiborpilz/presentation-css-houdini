CSS.registerProperty({
  name: '--progress',
  syntax: '<number>',
  inherits: false,
  initialValue: 0.0,
})

function renderRect(ctx) {
  ctx.globalCompositeOperation = 'multiply';
  ctx.fillStyle = 'rgb(255,0,255)'
  ctx.fillRect(50, 50, 50, 50);
  ctx.fillStyle = 'rgb(0,255,255)'
  ctx.fillRect(60, 60, 50, 50);
  ctx.fillStyle = 'rgb(255,255,0)'
  ctx.fillRect(70, 70, 50, 50);
}

CSS.paintWorklet.addModule('avenga.js');

const canvas = document.getElementById('test-canvas');
const ctx = canvas.getContext('2d');

renderRect(ctx);
