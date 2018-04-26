# owd-path-builder

Generate SVG path data declarative way. API inspired by https://github.com/andrewgrewell/svg-path-builder

## Installation
```bash
$ npm install owd-path-builder
```

## Usage
```javascript
import PathBuilder from 'owd-path-builder';

const pathData = new PathBuilder()
    .absolute()
    .moveTo(10, 10)
    .line(20, 20)
    .relative()
    .horizontalLine(10)
    .verticalLine(10)
    .curve(10, 0, 10, 10, 10, 10)
    .quadraticCurve(10, 0, 10, 10)
    .symmetricCurve(10, 20, 15, 15)
    .arc(30, 50, -45, 0, 1, 215.1, 109.9)
    .close()
    .toString();
```

The above call will produce `M10 10 L20 20 h10 v10 c10 0 10 10 10 10 q10 0 10 10 s10 20 15 15 a30 50 -45 0 1 215.1 109.9 Z`. You can learn more about the details of SVG paths from https://css-tricks.com/svg-path-syntax-illustrated-guide/

## API

### Classes

You can instantiate new builder instance by calling `new PathBuilder()`.

### Methods

* `absolute()` - switch next nodes to absolute mode
* `relative()` - switch next nodes to relative mode (default)
* `moveTo(x, y)` - move to position
* `line(x, y)` - draw line to position
* `horizontalLine(x)` - draw horizontal line to position
* `verticalLine(y)` - draw vertical line to position
* `curve(x1, y1, x2, y2, x3, y3)` - draw berier curve
* `quadraticCurve(x1, y1, x2, y2)` - draw quadratic curve
* `symmetricCurve(x1, y1, x2, y2)` - draw symmetric curve
* `arc(x1, y1, rotation, arc, sweep, x2, y2)` - draw arc
* `close()` - close the path
* `toString()` - export path into string in SVG compatibile format

## Contributing

This package is experimental and was made primarily to be used in our team's internal projects. If you find this useful and want to improve the package, then contributions welcome. Please submit all pull requests against the master branch. Please include tests covering your improvements.

## Author

Jakub Przyborowski <kuba@owlsdepartment.com> 
http://github.com/przyb
http://www.owlsdepartment.com/

## License

 - **MIT** : http://opensource.org/licenses/MIT