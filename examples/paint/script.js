CSS.paintWorklet.addModule('avenga.js');

function animate() {
  document.querySelector('.avenga-footer').style.setProperty('--timestep', new Date().getTime() % 1000);
  requestAnimationFrame(animate)
}

animate()
