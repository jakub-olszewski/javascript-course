function sayHello() {
    let age = parseFloat(document.forms["helloForm"].elements["age"].value);
    let name = document.getElementById("name").value;
    let label = name +" masz " +age+ "lat :)";
    document.getElementById("result").innerHTML = label;

    if(name == '' || name.length<2){
        alert("Imię nie może być puste!");
    }
}

