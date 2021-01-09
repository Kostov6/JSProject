const domTests = document.getElementById("multi-select");
let a = JSON.parse(domTests.value);
console.log(a);

domTests.onchange = () => {
    a = JSON.parse(domTests.value);
    console.log(a);
};

document.getElementById("switch").addEventListener("click", () => {
    if (!document.getElementById("switch").checked) {
        document.getElementById("anim").style.display = "none";
        document.getElementById("alg-desc").style.display = "block";
    } else {
        document.getElementById("anim").style.display = "block";
        document.getElementById("alg-desc").style.display = "none";
    }
});