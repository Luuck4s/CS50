function fazerUmArray(){
    const arr = [];

    for(var i = 0; i < 5; i++){
        arr.push(function (){console.log(i)})
    }

    return arr;
}

const arr = fazerUmArray();

arr[0](); // Esperado é 0 porem retornou 5 