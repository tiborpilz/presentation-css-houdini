---
title: Houdini CSS 
author: Tibor Pilz
date: 17.08.2020
---

### CSS Houdini

%% 1. High-Level Überblick
%% 1. Beispiele

%% ### CSS Houdini

%% * Eine Sammlung von low-level APIs, welche Teile der CSS Engine externalisieren
%% * Ermöglicht es Entwicklern, den Styling- und Layout- Prozess des Browsers zu erweitern
%% * Direkter Zugriff zum CSS Object Model (CSSOM)

%% ### Warum Houdini?

%% * Polyfills for CSS

%% ### Warnung

%% ishoudinireadyyet.com

%% ### Houdini APIs

%% * CSS Properties and Values API
%% * CSS Painting API
%% * CSS Typed Object Model
%% * CSS Layout API
%% * CSS Parser API

%% ### Examples

%% * Animierter Gradient
%% * Canvas aber ohne Canvas

%% ### Animierter Gradient

%% * Normally needs hacks

%% https://animatedgradients--tbrpilz.repl.co/

%% ### Animierter Gradient - Code

%% ```CSS
%% .box {
%%   --color-top: turquoise;
%%   --color-bottom: orange;
%%   background: linear-gradient(var(--color-top), var(--color-bottom));

%%   width: 250px;
%%   height: 250px;

%%   transition: 1s;
%%   transition-property: --color-top, --color-bottom;
%% }

%% .box:hover {
%%   --color-top: orange;
%%   --color-bottom: turquoise;
%% }
%% ```
