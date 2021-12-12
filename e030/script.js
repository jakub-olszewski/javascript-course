
function trzy(x){
    for(var i = 0; i <= x; i++){
        if((i % 3) != 0){
            continue;
        }
        document.write(i + "; ");
    }
    document.write("<br>");
}

trzy(50);
trzy(120);