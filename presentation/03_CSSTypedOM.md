# The CSS Typed Object Model

- CSS has an object model (CSSOM)
- Access is done via the `style` attribute

```js
const el = document.getElementById('test-element');
el.style.opacity = 0.3;
el.style.fontSize = '24px';
```

# Problems with CSSOM

```js
console.log(typeof el.style.opacity); // 'string'
el.style.opacity += 0.1;
console.log(el.style.opacity); // '0.30.1' - wat
```

- These attributes are *always* strings.

# Problems with CSSOM
::: notes

Furthermore, working with CSS units such as 'px' is cumbersome.
This example shows that even when converting back, the 'px' suffix must be strictly considered.

:::

```js
const { fontSize, opacity } = footer.style;
const parsedFontSize = parseFloat(fontSize);

el.style.fontSize = `${parsedFontSize + 5}px`;

const parsedOpacity = parseFloat(opacity);
el.style.opacity = parsedOpacity + 0.1;
```

- Working with unit values is laborious, as it requires constant parsing or serialization of strings.

# CSS Typed OM - attributeStyleMap

::: notes

Styles can be set and retrieved using `attributeStyleMap.set` and `.get`.

:::

```js
el.attributeStyleMap.get('opacity').value; // 0.5
el.attributeStyleMap.get('fontSize').value; // 29
el.attributeStyleMap.get('fontSize').unit; // 'px'
```

- `el.attributeStyleMap.get` returns a `CSSUnitValue` with a `value` and a `unit`.

# Setting CSS Typed OM Values

::: notes

It's advisable to pass a `CSSUnitValue` to `el.attributeStyleMap.set`.
An explanation of `CSSUnitValue` follows.

:::

```js
footer.attributeStyleMap.set('fontSize', CSS.px(29));
footer.attributeStyleMap.set('fontSize', '29px'); // Just as valid
```

# CSS Style Values

- Numbers are represented in two ways:
  1. `CSSUnitValue`: corresponds to, e.g., "42px"
  2. `CSSMathValue`: corresponds to, e.g., "calc(56em + 10%)"

# CSS Unit Values

- To create `CSSUnitValue`s, these factory methods exist (among others):

```js
const { value, unit } = CSS.number('10');
// value === 10, unit === 'number'

const { value, unit } = CSS.px(42);
// value === 42, unit === 'px'

const { value, unit } = CSS.vw('100');
// value === 100, unit === 'vw'

const { value, unit } = CSS.percent('10');
// value === 10, unit === 'percent'
```

# CSSUnitValues - Alternative:

- Alternatively, the constructor can be called directly

```js
const { value, unit } = new CSSUnitValue(10, 'number');
// value === 10, unit === 'number'

const { value, unit } = new CSSUnitValue(42, 'px');
// value === 10, unit === 'number'

const { value, unit } = new CSSVWValue('100');
// value === 100, unit === 'vw'

const { value, unit } = new CSSPercentValue('10');
// value === 10, unit === 'percent'
```

# CSSMathValues

```js
const cssSum = new CSSMathSum(CSS.vw(100), CSS.px(-10));

cssSum.toString(); // "calc(100vw + -10px)"
```

- Similar classes exist for other CSS calc expressions, like `CSSMathNegate`, `CSSMathInvert`, `CSSMathProduct`, etc.

# CSSMathValues - Nested

```js
const calculation = new CSSMathSum(
  CSS.px(1),
  new CSSMathNegate(
    new CSSMathProduct(2, CSS.em(3))
  )
);

calculation.toString(); // "calc(1px - 2 * 3em)"
```

- Calculations with multiple operators can be expressed using nested constructors.

# CSSStyleValues - Beyond

- CSSStyleValues support additional features:

# CSS calc shorthand
::: notes
  Instead of using a `CSSMathAdd` constructor, function calls can be chained.
  Notably, arithmetic on two similar units automatically returns the result in that unit,
  while arithmetic on two different units returns an instance of `CSSMathValue`.
:::

```js
CSS.px(1).add(CSS.px(2)); // { value: 3, unit: 'px' }
CSS.px(1).add(CSS.vw(50)).toString(); // "calc(1px + 50vw)"
```

# Unit Conversion
```js
CSS.px(1).to('mm'); // { value: 0.26444, unit: "mm" }
```

# Equality Comparison
```js
const width = CSS.px(200);
CSS.px(200).equals(width); // true
```
