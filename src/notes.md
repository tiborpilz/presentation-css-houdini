# What is Houdini

* High-Level explanation
* Teasers
* Warning
* The APIs

## Houdini High-Level explanation
-

## Teasers
* Properties and Values example
* Painting API example

## Houdini APIs

* CSS Properties and Values API
* CSS Painting API
* CSS Typed OM
* (CSS Layout API)
* (CSS Parser API)

### Properties and Values API

#### Refresher/Comparison CSS custom properties
* usage
* pitfalls
* limitations

#### Example redux
* why wouldn't this work with default properties
* why does it work now

#### Benefits
* circumvent traditional problems
* clean css compared to pure js solution
* themeability cause of still using custom props
* fine grained-control over the type of custom props

### Painting API

#### Refresher/Comparison Canvas
* usage
* pitfalls
* limitations

#### Example redux
* what this would look like with a canvas
* seperability
* styling in css
* auto-repaint
* auto-size
* off the main thread

#### Beyond
* border-image
* mask-image

#### Worklets

##### Comparison to workers
* why they're similar
* why they're not
* different kind of worklets

### Typed OM

#### Comparison to just doing it yourself
* It's painful (parsing strings for numerical values of e.g. width, height)
* It's *very* painful (parsing things like transform, etc.)
* Everything is just a string (for typescript folks)

#### Layout API
* This is not implemented yet
* This also is highly complex
