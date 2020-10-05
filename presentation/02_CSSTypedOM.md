---
title: CSS Houdini - CSSOM
author: Tibor Pilz
date: 05.10.2020
---

<!-- # CSS Typed OM 

(https://developers.google.com/web/updates/2018/03/cssom#parsing)

1. Das CSSOM
1. Styles zugreifen, Styles schreiben
1. Moegliche Werte
1. Parsing -->

# Das CSSOM

```js
  const el = document.getElementById('test-element')
  el.style.opacity = 0.3
  el.style.fontSize = '24px'
  console.log(typeof el.style.opacity) // 'string'
```

- CSS hat ein object model (CSSOM) (https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- Der Zugriff erfolgt ueber das `style`-Attribut:

- Diese Attribute (`.opacity`, `background-color`) sind *immer* Strings.
- ```js
  ```


- Das kann zu klassischen JavaScript-Bugs fuehren

```js
el.style.opacity += 0.1
console.log(el.style.opacity) // '0.30.1'
```

- wat

- Darueber hinaus ist die Arbeit mit CSS-Einheiten wie z.B. 'px' sehr anstrengend

```js
const { fontSize, opacity } = footer.style
const parsedFontSize = parseFloat(fontSize)

el.style.fontSize = `${parsedFontSize + 5}px`

const parsedOpacity = parseFloat(opacity)
el.style.opacity = parsedOpacity + 0.1
```

- Ausserdem ist es extrem unhandlich, nach allen moeglichen Einheiten zu testen, indem ein String ueberprueft wird. 
 
# CSS Typed OM API

## Auf Werte zugreifen / Werte schreiben

- per `attributeStyleMap.set` und `.get` lassen sich Styles schreiben und gesetzte Styles auslesen.

```js
el.attributeStyleMap.get('opacity').value // 0.5
el.attributeStyleMap.get('fontSize').value // 29
el.attributeStyleMap.get('fontSize').unit // 'px'
```

- `el.attributeStyleMap.get` gibt eine `CSSUnitValue` mit einer `value` und einer `unit` zurueck
- Sinnvoll ist es, `el.attributeStyleMap.set` auch eine `CSSUnitValue` zu uebergeben
- (dazu spaeter mehr)

```js
footer.attributeStyleMap.set('fontSize', CSS.px(29))

footer.attributeStyleMap.set('fontSize', '29px') // Just as valid
```

## Auf Computed Styles zugreifen

- Aequivalent zu `window.getComputedStyle(el)` kann `el.computedStyleMap().get` genutzt werden.
<!-- - Achtung: Das Typed OM gibt im gegensatz zum CSSOM 'computed' statt 'resolved' Werte zurueck.
  z.B. gibt Typed OM Prozentwerte anstelle von aufgeloesten Laengeneinheiten zurueck.  -->


# CSSStyleValues

- Zahlen werden in zwei Arten dargestellt:
  1. `CSSUnitValue`: z.B. "42px"
  1. `CSSMathValue`: z.B. "calc(56em + 10%)"

## CSSUnitValues
- Um `CSSUnitValue`s zu erstellen, existieren (unter Anderem) diese Factory-Methoden:

```js
const {value, unit} = CSS.number('10');
// value === 10, unit === 'number'

const {value, unit} = CSS.px(42);
// value === 42, unit === 'px'

const {value, unit} = CSS.vw('100');
// value === 100, unit === 'vw'

const {value, unit} = CSS.percent('10');
// value === 10, unit === 'percent'

const {value, unit} = CSS.deg(45);
// value === 45, unit === 'deg'

const {value, unit} = CSS.ms(300);
// value === 300, unit === 'ms'
```

- Alternativ:
```js
const {value, unit} = new CSSUnitValue(10, 'px')
```

# CSSMathValues

- fuer `CSSMathValues` existieren keine Factory-Methoden, weswegen immer der Konstruktor genutzt werden muss

```js
const cssSum = new CSSMathSum(CSS.vw(100), CSS.px(-10))

cssSum.toString() // "calc(100vw + -10px)"
```

- aehnliche Konstruktor gibt es fuer andere CSS calc Ausdruecke, also `CSSMathNegate`, `CSSMathInvert`, `CSSMathProduct` usw.

## CSSMathValues - Nested
- calc-Ausdruecke mit mehreren Operatoren lassen sich mit verschachtelten Konstruktoren ausdruecken:

```js
const calculation = new CSSMathSum(
  CSS.px(1),
  new CSSMathNegate(
    new CSSMathProduct(2, CSS.em(3))
  )
)

calculation.toString() // "calc(1px - 2 * 3em)"
```

## CSSStyleValues - Beyond
- CSSStyleValues unterstuetzen weitere Features, wie:
  1. calc-shorthand:
    ```js
    CSS.px(1).add(CSS.px(2)) // { value: 3, unit: 'px' }
    CSS.px(1).add(CSS.vw(50)).toString() // "calc(1px + 50vw)"
    ```
  1. length unit conversion:
    ```js
    CSS.px(1).to('mm') // { value: 0.26444, unit: "mm" }
    ```
  1. Equality checks:
    <!-- ```js
    const width = CSS.px(200)
    CSS.px(200).equals(width) // true
    ``` -->
  1. CSS Transform Values
  1. CSS Position Values