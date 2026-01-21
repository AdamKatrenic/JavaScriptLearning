//Callbacks

sum(displayPage, 5, 10);

function sum(callback, a, b) {
    let result = a + b;
    callback(result);
}

function displaySum(result) {
    console.log("The sum is: " + result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = "The sum is: " + result;
}