const cyanProgress = (progress, width, height) => ({
  cp1: {
    x: Math.round((width*progress)/3),
    y: height/(2 + Math.sin(Math.PI/2*progress))
  },
  cp2: {
    x: Math.round(0.8*width*progress**0.5),
    y: height/(2 - Math.sin(Math.PI/2*progress))
  }
})

const magentaProgress = (progress, width, height) => ({
  cp1: {
    x: Math.round((width*progress)/3),
    y: height/(2 - Math.sin(Math.PI/2*progress))
  },
  cp2: {
    x: Math.round(0.8*width*progress**0.5),
    y: height/(2 + Math.sin(Math.PI/2*progress))
  }
})

const yellowProgress = (progress, width, height) => ({
  cp1: {
    x: Math.round((width*progress)/3),
    y: height/(2 - 0.2*Math.sin(Math.PI/2*progress))
  },
  cp2: {
    x: Math.round(0.8*width*progress**0.5),
    y: height/(2 + 0.2*Math.sin(Math.PI/2*progress))
  }
})

function paintBezier(ctx, geom, perturbation, progress) {
  ctx.globalCompositeOperation = 'multiply';
  let start = { x: 0, y: geom.height/2  };
  let end = { x: geom.width,   y: geom.height/2 };
  // Cyan
  ctx.fillStyle = 'rgb(0,255,255)';
  let { cp1, cp2 } = cyanProgress(progress, geom.width, geom.height)

  ctx.beginPath()
  ctx.moveTo(start.x, start.y)
  ctx.bezierCurveTo(
    cp1.x, cp1.y,
    cp2.x, cp2.y,
    end.x, end.y
  )
  ctx.lineTo(geom.width, geom.height)
  ctx.lineTo(0, geom.height)
  ctx.closePath()
  ctx.fill()

  // Magenta
  ctx.beginPath()
  ctx.fillStyle = 'rgb(255,0,255)';
  const m = magentaProgress(progress, geom.width, geom.height)

  ctx.moveTo(start.x, start.y)
  ctx.bezierCurveTo(
    m.cp1.x, m.cp1.y,
    m.cp2.x, m.cp2.y,
    end.x, end.y
  )
  ctx.lineTo(geom.width, geom.height)
  ctx.lineTo(0, geom.height)
  ctx.closePath()
  ctx.fill()

  // Yellow
  ctx.fillStyle = 'rgb(255,255,0)';

  ctx.beginPath()
  ctx.moveTo(start.x, start.y)
  ctx.lineTo(end.x, end.y)
  ctx.lineTo(geom.width, geom.height)
  ctx.lineTo(0, geom.height)
  ctx.closePath()
  ctx.fill()
}

class ColorBorderPainter {
  static get inputProperties() { return ['--progress'] }

  paint(ctx, geom, properties) {
    const progress = parseFloat(properties.get('--progress'))

    paintBezier(ctx, geom, 0.5, progress)
  }
}

registerPaint('colorborder', ColorBorderPainter)
