---
title: CSS Houdini
author: Tibor Pilz
date: 24.08.2020
---

## CSS Houdini

1. Einführung
2. Bestandteile
3. Beispiele

## Einführung

- Eine Sammlung von low-level APIs, die Teile der CSS Engine freilegen
- Nicht production-ready
- Grösstenteils unterstützt in Chrome, Edge, Opera
- Nicht unterstützt in Firefox und Safari

## Bestandteile

1. CSS Parser API
2. CSS Typed OM
3. CSS Properties and Values API
4. CSS Layout API
5. CSS Painting API
6. Worklets

## CSS Parser API

- Eine API, die den CSS Parser direkter exposed
- Zur Zeit in keinem Browser unterstützt
- Keine Spezifikation verfügbar

## CSS Typed OM

- Ersetzt direkte Zugriffe auf das `.style` DOM-Attribut
- Für `attributeStyleMap` und `computedStyleMap` 
- Alle CSS Werte sind Subklassen der `CSSStyleValue`-Klasse, z.B:
  - `CSSUnitValue`, enthält den Wert und die Einheit.
  - `CSSKeywordValue`, enthält CSS Keywords.
  - `CSSPositionValue`, enthält `x` und `y` Wert.
  - ...
