CSS.registerProperty({
  name: '--progress',
  syntax: '<number>',
  inherits: false,
  initialValue: 0.0,
})

CSS.paintWorklet.addModule('avenga.js');

const canvas = document.getElementById('test-canvas');
const ctx = canvas.getContext('2d');

renderRect(ctx);
