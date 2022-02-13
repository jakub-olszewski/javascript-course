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
    // document.write("<br>");
    for(var i = start ; i<=stop ; i++)
    {
        //count zeros
        var countZeros = positions-String(i).length;
        document.write("<div class='collapsible-todo'><a href='x"+getZeros(countZeros)+i+"/index.html'><i>Ćwiczenie "+dzial+"."+i+"</i></a></div>");
    }
}

function createProject(name){
    // document.write("<br>");
    document.write("<div class='collapsible-todo'><a href='projects/"+name+"/index.html'>Projekt "+name+"</a></div>");

}

function createExamples(dzial,title,start, stop){
    // document.write("<p>"+title+"</p>");
    document.write('<button type="button" class="collapsible">'+title+'</button>');
    var positions = 3;

    document.write('<div class="content"><p>');
    for(var i = start ; i<=stop ; i++)
    {
        //count zeros
        var countZeros = positions-String(i).length;
        document.write("<a href='e"+getZeros(countZeros)+i+"/index.html'>Przykład "+dzial+"."+i+"</a><br><br>");
    }
    document.write('</p></div>');
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