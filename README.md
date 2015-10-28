Symmetric
=========
[![Build Status](https://travis-ci.org/matheuslc/symmetric.svg)](https://travis-ci.org/matheuslc/symmetric)

If you have problems with the height of its columns, use it!

## How to use
With bower

```bash
bower install symmetric
```


* Download symmetric.js or symmetric.min.js (minified)
* Put data-symmetric in your wrapper element
* Put data-symmetric-item on the items that will be equalized
* That's all

* If you want to listen the Window Resize event, put data-symmetric-resize in your wrapper element

## Example

```html
<section data-symmetric>
  <div data-symmetric-item>
    <p>Lorem ipsum dolor sit amet</p>
  </div>
</section>
```

With Resize option
```html
<section data-symmetric data-symmetric-resize>
  <div data-symmetric-item>
    <p>Lorem ipsum dolor sit amet</p>
  </div>
</section>
```

[See an example](http://matheuslc.com/symmetric/examples/)
