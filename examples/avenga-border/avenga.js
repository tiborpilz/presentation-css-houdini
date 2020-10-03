function paintBezier(ctx, geom, perturbation, progress) {
  const colors = [
    'rgb(0,255,255)',
    'rgb(255,0,255)',
    'rgb(255,255,0)'
  ];

  for(let i = 0; i < 3; i++) {
    const color = colors[i];
    ctx.fillStyle = color;
    let start = { x: 0, y: geom.height/2  };

    let cp1 = {
      x: Math.round(geom.width*(i/3)),
      y: geom.height/(2 + Math.sin(3.14/2*(progress+perturbation)))
    };

    let cp2 = {
      x: Math.round(0.8*geom.width*(progress**0.5)),
      y: geom.height/(2 - Math.sin(3.14/2*(progress+perturbation)))
    };

    let end = { x: geom.width,   y: geom.height/2 };

    ctx.moveTo(start.x, start.y)
    ctx.bezierCurveTo(
      cp1.x, cp1.y,
      cp2.x, cp2.y,
      end.x, end.y
    )
    ctx.lineTo(geom.width, geom.height)
    ctx.lineTo(0, geom.height)
    ctx.fill()
  }
}

class AvengaPainter {
  static get inputProperties() { return ['--progress'] }

  paint(ctx, geom, properties) {
    const progress = parseFloat(properties.get('--progress'))

    ctx.globalCompositeOperation = 'multiply';
    paintBezier(ctx, geom, 0.5, progress)
  }
}

registerPaint('avenga', AvengaPainter)
