var age;

age = prompt("What is your age?")
if (age >= 65) {
    output = "Free Coffee on Friday Night for Seniors!" 
    document.getElementById('verify').style.color = 'maroon';
    document.getElementById('verify').style.fontVariantCaps = 'small-caps';
} else {
    output = "Enjoy your Friday night!"
}

document.getElementById("verify").innerHTML = output;
