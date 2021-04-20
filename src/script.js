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


    function increment() {
        textBox.innerHTML = Number(textBox.innerHTML) + 1;
    }

    function decrement() {
        textBox.innerHTML = Number(textBox.innerHTML) - 1;
    }

    function reset() {
        textBox.innerHTML = 0;
    }
}
