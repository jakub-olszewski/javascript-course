/**
 * Metody 
 **/
    function title(title){
    document.write("<h3>"+title+"</h3>");
}

function createOneExercise(dzial,startStop){
    createExercise(dzial,startStop,startStop);
}

function createExercise(dzial,start, stop){
    var positions = 3;
    document.write("<br>");
    for(var i = start ; i<=stop ; i++)
    {
        //count zeros
        var countZeros = positions-String(i).length;
        document.write("<a href='x"+getZeros(countZeros)+i+"/index.html'><i>Ćwiczenie "+dzial+"."+i+"</i></a><br>");
    }
}

function createProject(name){
    document.write("<br>");
    document.write("<a href='projects/"+name+"/index.html'>Projekt "+name+"</a><br>");

}

function createExamples(dzial,title,start, stop){
    document.write("<p>"+title+"</p>");
    var positions = 3;
    for(var i = start ; i<=stop ; i++)
    {
        //count zeros
        var countZeros = positions-String(i).length;
        document.write("<a href='e"+getZeros(countZeros)+i+"/index.html'>Przykład "+dzial+"."+i+"</a><br>");
    }
}

function createExample(dzial,title,startStop){
    createExamples(dzial,title,startStop, startStop);
}

function getZeros(count){
    var zeros = "";
    for(var i = 0 ; i < count ; i++){
        zeros += "0";
    }
    return zeros;
}