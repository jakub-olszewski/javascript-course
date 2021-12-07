
var a = 3;
var b = 10;

document.write("a="+a+"<br>"); 
document.write("b="+b+"<br>"); 

switch( a * b ){
    case 10:
        document.write("Wynik mnożenia wynosi 10."); 
        break;
    case 30:
        document.write("Wynik mnożenia wynosi 30."); 
        break;
    case 60:
        document.write("Wynik mnożenia wynosi 60."); 
        break;
    default:
        document.write("Nieznany wynik mnożenia."); 
}



