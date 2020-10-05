# Die Property and Values API

- Im Grunde genommen CSS custom values.
- Aber mit Typen!
- Ermöglicht:
  - Typisierung
  - Vererbung
  - Initialwert
  - Animationen

# Beispiel
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
    --color-top: turquoise;
    --color-bottom: orange;
  }
```

- CSS custom values sind nicht animierbar

# Beispiel - Versuch 1

<iframe style="width: 512px; height: 512px" src="https://AnimatedGradients-1--tbrpilz.repl.co"></iframe>

# Beispiel - Erweiterung

```js
['--color-top', '--color-bottom'].forEach((name) => {
  CSS.registerProperty({
    name,
    syntax: '<color>',
    inherits: false,
    initialValue: '#c0ffee',
  })
})
```

# Beispiel - Versuch 2

<iframe style="width: 512px; height: 512px" src="https://AnimatedGradients--tbrpilz.repl.co"></iframe>

