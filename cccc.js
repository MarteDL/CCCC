let numberOfCookies = 0;
let num = 1
let multiply = 2
let multiplierCost = 20

document.getElementById("multiply-number").innerHTML = multiply;
document.getElementById("multiply-cost").innerHTML = multiplierCost;

let cookieClicker = document.getElementById("cookie-clicker");
let cookieMultiplier = document.getElementById("cookie-multiplier");

function cookieIncrease() {
    numberOfCookies += num
    document.getElementById("cookie-count").innerHTML = numberOfCookies;
}

cookieClicker.addEventListener("click", cookieIncrease);

cookieMultiplier.addEventListener("click", function () {
    if (numberOfCookies >= multiplierCost) {

        num += 1;
        numberOfCookies -= multiplierCost;
        document.getElementById("cookie-count").innerHTML = numberOfCookies;

        multiply += 1;
        document.getElementById("multiply-number").innerHTML = multiply;

        multiplierCost *= 2;
        document.getElementById("multiply-cost").innerHTML = multiplierCost;

        console.log(multiplierCost);

    } else {
        alert("You need " + multiplierCost + " cookies to use this");
    }
})

