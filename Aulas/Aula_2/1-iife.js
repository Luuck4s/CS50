const dizerOi = (function() {
  console.log("Olá");
})();

// Utilizando IIFE para resolver o bug da closure
function fazerUmArray() {
  const arr = [];

  for (var i = 0; i < 5; i++) {
    arr.push((function(x) {
      return function() {  console.log(x);  };
    })(i));
  }

  return arr;
}

const arr = fazerUmArray();

arr[0](); // 0
