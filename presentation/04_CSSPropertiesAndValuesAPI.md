# Property and Values API

- Basically CSS custom properties...
- ...but with types!
- enables:
  - typing
  - inheritance
  - initial values
  - animations ✨

# Example
```css
  .box {
    --color-top: turquoise;
    --color-bottom: orange;
    
    width: 250px;
    height: 250px;
    
    background: linear-gradient(var(--color-top), var(--color-bottom));
    
    transition: 1s;
    transition-property: --color-top, --color-bottom;
  }

  .box:hover {
    --color-top: orange;
    --color-bottom: turquoise;
  }
```

- CSS custom values can't be animated

# Example - First Try

<iframe style="width: 512px; height: 512px" src="https://AnimatedGradients-1--tbrpilz.repl.co"></iframe>

# Example - Extension

```js
CSS.registerProperty({
  name: '--color-top',
  syntax: '<color>',
  inherits: false,
  initialValue: '#c0ffee',
});

CSS.registerProperty({
  name: '--color-bottom',
  syntax: '<color>',
  inherits: false,
  initialValue: '#c0ffee',
})
```

# Example - Second Try

<iframe style="width: 512px; height: 512px" src="https://AnimatedGradients--tbrpilz.repl.co"></iframe>

