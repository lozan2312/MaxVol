/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-redeclare */
/* eslint-disable no-var */
/**
 * Usage: benchmark(1000000, function () {});
 */
function benchmark(iterations, f) {
  var start = new Date();
  for (var i = 0; i < iterations; i++) {
    f();
  }
  var end = new Date();
  return "Elapsed time: " + (end - start) + " msec";
}

var iterationsCount = 10000;
var initialItemsCount = 100000;

/* ===========================================
 * Appending an element to a long list.
 * ===========================================
 */

/*** Vanilla JS ***/
// Array.push (not immutable)
var jsArr = new Array(initialItemsCount).fill(88);
var i = 0;
benchmark(iterationsCount, function () {
  // console.log(++i);
  jsArr.push(43);
});

// Array.slice + Array.push
var jsArr = new Array(initialItemsCount).fill(88);
var i = 0;
benchmark(iterationsCount, function () {
  // console.log(++i);
  var newArr = jsArr.slice(0);
  newArr.push(43);
  jsArr = newArr;
});

// Array.concat
var jsArr = new Array(initialItemsCount).fill(88);
var i = 0;
benchmark(iterationsCount, function () {
  // console.log(++i);
  jsArr = jsArr.concat(43);
});
/*** Vanilla JS END ***/

/*** Facebook's Immutable ***/
// OrderedMap
var immutableOrderedMap = Immutable.Range(0, initialItemsCount).toOrderedMap();
var i = 0;
benchmark(iterationsCount, function () {
  // console.log(++i);
  immutableOrderedMap = immutableOrderedMap.set(immutableOrderedMap.size, 43);
});

// List
var immutableList = Immutable.Range(0, initialItemsCount).toList();
var i = 0;
benchmark(iterationsCount, function () {
  // console.log(++i);
  immutableList = immutableList.push(43);
});
/*** Facebook's Immutable END ***/

/*** ImmutableLinkedOrderedMap ***/
// ImmutableLinkedOrderedMap.set in lightweight mode
var map = new ImmutableLinkedOrderedMap({
  mode: ImmutableLinkedOrderedMap.MODE.LIGHTWEIGHT,
  initialItems: new Array(initialItemsCount)
    .fill(88)
    .map((x, i) => ({ [i]: x })),
});
var i = 0;
benchmark(iterationsCount, function () {
  // console.log(++i);
  map = map.set({ [map.length]: 43 });
});

// ImmutableLinkedOrderedMap.set in single mode
var map = new ImmutableLinkedOrderedMap({
  mode: ImmutableLinkedOrderedMap.MODE.SINGLE,
  initialItems: new Array(initialItemsCount)
    .fill(88)
    .map((x, i) => ({ [i]: x })),
});
var i = 0;
benchmark(iterationsCount, function () {
  // console.log(++i);
  map = map.set({ [map.length]: 43 });
});

// ImmutableLinkedOrderedMap.set in multiway mode
var map = new ImmutableLinkedOrderedMap({
  mode: ImmutableLinkedOrderedMap.MODE.MULTIWAY,
  initialItems: new Array(initialItemsCount)
    .fill(88)
    .map((x, i) => ({ [i]: x })),
});
var i = 0;
benchmark(iterationsCount, function () {
  // console.log(++i);
  map = map.set({ [map.length]: 43 });
});
/*** ImmutableLinkedOrderedMap END ***/

/* ===========================================
 */

// Interesting
// ~10000 msec
var jsArr = new Array(1).fill(88);
var i = 0;
benchmark(12000000, function () {
  newArr = [];
  Array.prototype.push.call(newArr, jsArr);
  newArr.push(++i);
  jsArr = newArr;
});
