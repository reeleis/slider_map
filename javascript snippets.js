var numeric = document.createElement('script');
numeric.src = "http://www.numericjs.com/lib/numeric-1.2.6.min.js";
document.getElementsByTagName('head')[0].appendChild(numeric);
// ... give time for script to load, then type.
//jQuery.noConflict();

//Code ideas:
map = {d1:5, d2:6}
map.weights = [map.d1, map.d2]

numeric.dot(map.weights,[-0.5, 0.5])


// Cutpoint function
// Reads in a list of numbers, sorts the list, and steps through by the integer division of items.length / n
// Adjusted in funky ways to make it work correctly - Lee, do you want to stress test the function?
// Like any quantile function, this will not perform well with a list of numbers with very many duplicates
// Fortunately, then, our indices do not have a whole lot (if any) of duplicates!

var arr = [];
for (var i=0, t=100; i<t; i++) {
    arr.push(Math.random());
}

function sortNumber(a,b) {
    return a - b;
}

function cutpoints(items, n) {
    items.sort(sortNumber);
    var size = ~~(items.length / n);
    var cuts = [items[0] - 1];
    var done = size;
    do {
        cuts.push(items[done - 1]);
        done = done + size;
    } while(done + size <= items.length);
    cuts.push(items[items.length - 1]);
    return cuts;
}

var bins = 5;

var quantiles = cutpoints(arr, bins);
console.log(quantiles)

var counts = Array.apply(null, Array(bins)).map(function(){return 0});

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < quantiles.length; j++) {
        if(quantiles[j] < arr[i] && arr[i] <= quantiles[j+1]) {
            counts[j]++;
            console.log(j); // If we assign j, the number of the quantile, to each feature, we could then format that feature according to a switch statement elsewhere
            // so, like, we have our seven colors predefined and we fill the feature with the color corresponding to quantile j
        }
    }
}

console.log(counts);