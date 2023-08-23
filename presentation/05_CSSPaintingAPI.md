# CSS Painting API

- Enables custom implementation of the `paint()` CSS-function
- Uses `PaintWorklets`, which receive a `ctx`
- Really similar to working with a canvas

# Paint Worklet

A worklet according to the CSS Houdini spec

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
# Example

<iframe src="/example" style="background: white; width: 1200px; height: 50vh; margin-top: 0px"></iframe>
