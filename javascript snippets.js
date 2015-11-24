var numeric = document.createElement('script');
numeric.src = "http://www.numericjs.com/lib/numeric-1.2.6.min.js";
document.getElementsByTagName('head')[0].appendChild(numeric);
// ... give time for script to load, then type.
//jQuery.noConflict();

//Code ideas:
map = {d1:5, d2:6}
map.weights = [map.d1, map.d2]

numeric.dot(map.weights,[-0.5, 0.5])