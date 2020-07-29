function paintBezier(ctx, geom, progress) {
  let start = { x: 0, y: geom.height/2  };
  let cp1 = {
    x: Math.round(geom.width*(progress**2)),
    y: geom.height/(2 + Math.sin(3.14*progress))
  };

  let cp2 = {
    x: Math.round(geom.width*(progress**0.5)),
    y: geom.height/(2 - Math.sin(3.14*progress))
  };

  let end = { x: geom.width, y: geom.height/2 };

  ctx.moveTo(start.x, start.y)
  ctx.bezierCurveTo(
    cp1.x, cp1.y,
    cp2.x, cp2.y,
    end.x, end.y
  )
  ctx.lineTo(geom.width, geom.height)
  ctx.lineTo(0, geom.height)
}

class AvengaPainter {
  static get inputProperties() { return ['--timestep'] }

  paint(ctx, geom, props, args) {
    ctx.globalCompositeOperation = 'multiply';
    const cyan = 'rgb(0,176,255)'
    const magenta = 'rgb(255,0,205)'
    const yellow = 'rgb(255,194,0)'
    const colors = [cyan, magenta, yellow]

    const timestep = props.get('--timestep')
    const progress = (timestep % 1000) / 1000

    colors.forEach((color, index) => {
      console.log(color)
      ctx.fillStyle = color;
      ctx.beginPath()
      paintBezier(ctx, geom, progress**index)
      ctx.fill()
    })
  }
}

registerPaint('avenga', AvengaPainter)
