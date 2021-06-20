var counter = 0;

function increment() {

    counter = counter + 1;
    document.getElementById("container-counter").innerHTML = counter;
}

function decrement() {

    counter = counter - 1;
    document.getElementById("container-counter").innerHTML = counter;
}
