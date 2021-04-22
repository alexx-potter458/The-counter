document.addEventListener("DOMContentLoaded", run);

function run() {

    var textBox = document.getElementById("textBox");

    textBox.innerHTML = 0;

    var incrementBtn = document.getElementById("increment");
    incrementBtn.addEventListener("click", increment);

    var decrementBtn = document.getElementById("decrement");
    decrementBtn.addEventListener("click", decrement);

    var resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", reset);

    var saveBtn = document.getElementById("save");
    saveBtn.addEventListener("click", save);

    var restoreBtn = document.getElementById("restore");
    restoreBtn.addEventListener("click", restore);


    function increment() {
        textBox.innerHTML = Number(textBox.innerHTML) + 1;
    }

    function decrement() {
        textBox.innerHTML = Number(textBox.innerHTML) - 1;
    }

    function reset() {
        textBox.innerHTML = 0;
    }

    function save() {
        var myNumber = {number: Number(textBox.innerHTML)};
        var myNuberJson = JSON.stringify(myNumber);
        localStorage.setItem("numberJson", myNuberJson);
    }

    function restore() {


        var myNuberJson = localStorage.getItem("numberJson");
        var myNumber = JSON.parse(myNuberJson);

        textBox.innerHTML = myNumber.number;
    }
}
