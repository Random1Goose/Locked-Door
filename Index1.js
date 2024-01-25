let pin = "";

let code = "1234";
let n = 3;

function reset() {
    pin = "";
    document.getElementById("Inputs").innerHTML = "Enter Code";
}

function touch(x) {
    pin += x;
    document.getElementById('Inputs').innerHTML = pin;
}

function check() {

    if (code == pin) {
        document.getElementById("close").src = "Open.PNG";
        alert("Access Granted")
    }

    else {
        alert("Failed, The code is four digits");
        reset()
        Attempts()
    }
}
function Attempts() {
    n -= 1;
    document.getElementById('Attempts').innerHTML = 'Attempts: ' + n;
    if (n == 0) {

        alert("Ran out of attempts")
    }
    else (
        reset()
    )
}
function party() {
    document.getElementById("Shrek").src="Shrek.PNG";
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
