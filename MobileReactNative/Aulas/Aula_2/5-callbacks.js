function facaAlgoAsync(callback) {
  setTimeout(function() {
    callback(1);
  }, 1000);
}


facaAlgoAsync(console.log); // 1
