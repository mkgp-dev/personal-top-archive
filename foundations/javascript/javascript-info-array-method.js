// Translate border-left-width to borderLeftWidth
function camelize(s) {
   const string = s.split('-');
   const capital = string.slice(1).map(i => i.charAt(0).toUpperCase() + i.slice(1)).join('');
   //for (let i = 1; i < string.length; i++) {
      //string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
   //}
   return [string[0], capital].join('');
}

// Filter range
function filterRange(arr, a, b) {
   const g = arr.filter(value => value >= a);
   const l = g.filter(value => value <= b);
   return l;
}

// Filter range "in place"
function filterRangeInPlace(arr, a, b) {
   const l = arr.length;
   const n = arr.filter(value => value >= a && value <= b);
   arr.splice(0, l, ...n);
}

// Sort in decreasing order
arr.sort((a, b) => a > b ? 1 : -1);

// Copy and sort array
function copySorted(a) {
   return a.sort((a, b) => a > b ? 1 : -1);
}

// Shuffle an array
function shuffle(a) {
   for (let i = a.length - 1; i > 0; i--) {
      let r = Math.floor(Math.random() * (i + 1));
      let temp = a[i];
      a[i] = a[r];
      a[r] = temp;
   }

   return a;
}

// Filter unique array members
function unique(arr) {
   return [...new Set(arr)];
}
