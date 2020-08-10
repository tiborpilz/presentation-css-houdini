---
author: Tibor Pilz
title: Houdini CSS
date: 28.07.2020
---

:smile:

# CSS Houdini

---

1. High-Level Überblick <!-- .element class="fragment" data-fragment-index="0" -->
1. Beispiele <!-- .element class="fragment" data-fragment-index="1" -->

---

### Was ist Houdini?

> Houdini is a set of low-level APIs that exposes parts of the CSS engine, giving developers the power to extend CSS by hooking into the styling and layout process of a browser’s rendering engine.  Houdini is a group of APIs that give developers direct access to the CSS Object Model (CSSOM), enabling developers to write code the browser can parse as CSS, thereby creating new CSS features without waiting for them to be implemented natively in browsers.

* Eine Sammlung von low-level APIs, welche Teile der CSS Engine externalisieren
* Ermöglicht es Entwicklern, den Styling- und Layout- Prozess des Browsers zu erweitern
* Direkter Zugriff zum CSS Object Model (CSSOM)

---

### Warum Houdini?

* Polyfills for CSS

---

### Warnung

ishoudinireadyyet.com

---

### Houdini APIs

* CSS Properties and Values API
* CSS Painting API
* CSS Typed Object Model
* CSS Layout API
* CSS Parser API

---

### Examples

* Animierter Gradient
* Canvas aber ohne Canvas

---

### Animierter Gradient

* Normally needs hacks

https://animatedgradients--tbrpilz.repl.co/

---

### Animierter Gradient - Code

```CSS
.box {
  --color-top: turquoise;
  --color-bottom: orange;
  background: linear-gradient(var(--color-top), var(--color-bottom));

  width: 250px;
  height: 250px;

  transition: 1s;
  transition-property: --color-top, --color-bottom;
}

.box:hover {
  --color-top: orange;
  --color-bottom: turquoise;
}
```
