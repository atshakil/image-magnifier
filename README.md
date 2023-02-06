# Image Magnifier

Image magnifier is a NPM package that allows a magnified preview of an image on hover over specific areas of the image.

## Installation

TODO

## Usage

```javascript
<ImageMagnifier
  src={imageSrc}
  alt={imageAlt}
  magnifiedViewRegion={({ baseImageBox, windowSize }) => ({
    x: baseImageBox.right,
    y: baseImageBox.top,
    width: windowSize.width - baseImageBox.right,
    height: windowSize.height - baseImageBox.top
  })}
/>
```
