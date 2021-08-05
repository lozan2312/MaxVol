/* eslint-disable no-console */
/* eslint-disable no-undef */
/* ------------------------------ */
map = ImmutableLinkedOrderedMap.map();
map = map.set({ 8: "a8" });
map = map.replace(9, { 9: "a9" }, true);
map = map.set(
  [
    { 1: "a1111" },
    { 2: "a2222" },
    { 3: "a3333" },
    { 4: "a4444" },
    { 5: "a5555" },
    { 6: "a6666" },
    { 7: "a7777" },
    { 8: "a8888" },
    { 9: "a9999" },
  ],
  true
);
map = map.set({ 10: "a10!!!" });
map.forEach(function (v, k) {
  console.warn(k, v);
});
/* ------------------------------ */

/* ------------------------------ */
map = map.set([{ 1: "aaa" }, { 2: "bbb" }]);
map = map.set([{ 1: "1aaa" }, { 2: "2bbb" }, { 3: "3ccc" }]);
map.forEach(function (v, k) {
  console.warn(k, v);
});
/* ------------------------------ */

/* ------------------------------ */
map = map.set([{ 2: "bbb" }, { 1: "aaa" }]);
map = map.set([{ 1: "1aaa" }, { 2: "2bbb" }, { 3: "3ccc" }]);
map.forEach(function (v, k) {
  console.warn(k, v);
});
/* ------------------------------ */

/* ------------------------------ */
map = map.set([{ 1: "aaa" }, { 3: "3ccc" }]);
map = map.set([{ 1: "1aaa" }, { 2: "2bbb" }], true);
map.forEach(function (v, k) {
  console.warn(k, v);
});
/* ------------------------------ */

/* ------------------------------ */
map = new ImmutableLinkedOrderedMap({
  mode: ImmutableLinkedOrderedMap.MODE.LIGHTWEIGHT,
});
map = map.set([{ 1: "a" }, { 2: "b" }, { 3: "c" }]);
map = map.replace(3, { 4: "d" }, true);
map.forEach(function (v, k) {
  console.warn(k, v);
});
/* ------------------------------ */

/* ------------------------------ */
map = new ImmutableLinkedOrderedMap({
  mode: ImmutableLinkedOrderedMap.MODE.LIGHTWEIGHT,
});
map = map.set([{ 1: "a" }, { 2: "b" }, { 3: "c" }]);
map = map.replace(4, { 4: "d" }, true);
map.forEach(function (v, k) {
  console.warn(k, v);
});
/* ------------------------------ */

/* ------------------------------ */
map = new ImmutableLinkedOrderedMap();
map = map.set({ 23: "Value of key 23" });
map = map.set({ 0: "Value of key 0" }, true);
map = map.unset(0);
map = map.set({ 0: "Value of key 0" }, true);
map.forEach(function (v, k) {
  console.warn(k, v);
});
/* ------------------------------ */

/* ------------------------------ */
map = new ImmutableLinkedOrderedMap({
  mode: ImmutableLinkedOrderedMap.MODE.LIGHTWEIGHT,
});
map = map.set({ 23: "Value of key 23" });
map = map.set({ 0: "Value of key 0" }, true);
map = map.unset(0);
map = map.set({ 0: "Value of key 0" }, true);
map.forEach(function (v, k) {
  console.warn(k, v);
});
/* ------------------------------ */

/* ------------------------------ */
map = new ImmutableLinkedOrderedMap({
  mode: ImmutableLinkedOrderedMap.MODE.MULTIWAY,
});
map = map.set({ 23: "Value of key 23" });
map = map.set({ 0: "Value of key 0" }, true);
map = map.unset(0);
map = map.set({ 0: "Value of key 0" }, true);
map.forEach(function (v, k) {
  console.warn(k, v);
});
/* ------------------------------ */

/* ------------------------------ */
map = new ImmutableLinkedOrderedMap({
  mode: ImmutableLinkedOrderedMap.MODE.MULTIWAY,
});
for (let i = 1; i <= 11; i++) {
  if (i == 10) {
    map = map.set({ [15 * 15]: `HEY!!! A value of key 15 * 15` });
  } else {
    map = map.set({ [i]: `Value of key ${i}` });
  }
}
map.forEach(function (v, k) {
  console.warn(k, v);
});

console.log(
  "======================================================================"
);

mapsMap = {};
map2 = map.ancestorMap.ancestorMap;
for (let i = 1; i <= 120; i++) {
  let newMap;
  if (i == 15) {
    const key = "djskamlk21mklm";
    newMap = map2.set({ [key]: `Value of key ${key}` });
  } else {
    newMap = map2.set({ [i * i]: `Value of key ${i * i}` });
  }

  if (i >= 8) {
    mapsMap[i] = newMap;
  }
}
map2.forEach(function (v, k) {
  console.warn(k, v);
});

console.warn(map.ancestorMap.get(15 * 15));
console.warn(mapsMap[15].get(15 * 15)); // This should print "undefined"!!!
/* ------------------------------ */

console.log(
  "======================================================================"
);

map = ImmutableLinkedOrderedMap.map({
  initialItems: [
    { [1]: "a" },
    { [2]: "b" },
    { [3]: "c" },
    { [4]: "d" },
    { [5]: "e" },
    { [6]: "f" },
    { [7]: "g" },
    { [8]: "h" },
    { [9]: "i" },
    { [10]: "l" },
  ],
});
rangeBefore = map.rangeBefore(2);
rangeAfter = map.rangeAfter(2);
console.log("rangeBefore", rangeBefore);
console.log("rangeAfter", rangeAfter);

console.log(
  "======================================================================"
);
