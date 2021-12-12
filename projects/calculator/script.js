function addition() {
    let a = parseFloat(document.forms["calculator"].elements["a"].value);
    let b = parseFloat(document.forms["calculator"].elements["b"].value);
    let c = a + b;
    document.getElementById("result").innerHTML = c;
}

function execute(){
    var action = document.getElementById("action").value;
    console.log(action);
    switch (action) {
        case "add":
            console.log("obliczenia dodawania")
            break;
        case "sub":
            console.log("obliczenia odejomowania")
            break;
    }
}
