function sumDow(){
    var i;
    wynik = 0;
    var parametr1 = arguments.length;
    for(i = 0; i < parametr1; i++){
        wynik += arguments[i];
    }
    return wynik;
}

sumDow(3,2,7);
document.write("Suma argumentów:" + wynik);