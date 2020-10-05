# CSS Painting API

- Ermöglicht es, die `paint()` CSS-Funktion zu implementieren
- Benutzt `PaintWorklets`, die einen ctx erhalten
- Bedienung ist deswegen sehr ähnlich zu einem Canvas

# Paint Worklet

Ein Worklet nach der Houdini CSS worklet spec

`main.js`
```js
CSS.paintWorklet.addModule('my-paint-worklet.js')
```

`my-paint-worklet.js`
```js
class MyPainter {
  paint(ctx, geometry, properties) {
    // go Pollock
  }
}

registerPaint('myPainter', MyPainter)
```

`main.css`
```css
.box {
  background-image: paint('myPainter')
}
```
