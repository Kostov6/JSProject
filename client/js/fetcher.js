fetch("http://localhost:3000/rest/tests/sorting")
    .then(response => response.json())
    .then(data => {
        tests = document.getElementById("multi-select");
        for (test of data) {
            let domTest = document.createElement("option");
            domTest.setAttribute("value", test.value);
            domTest.innerText = test.text;
            tests.appendChild(domTest);
        }

    })



const algId = getParameterByName("algId");

fetch("http://localhost:3000/rest/algorithms/" + algId)
    .then(response => response.json())
    .then(data => {
        document.getElementById("alg_name").innerHTML = data.alg_name;
        document.getElementById("alg_text").innerHTML = data.alg_text;
        document.getElementById("alg_input").innerHTML = data.alg_input;
        document.getElementById("alg_output").innerHTML = data.alg_output;
        document.getElementById("alg_T").innerHTML = data.alg_T;
        document.getElementById("alg_M").innerHTML = data.alg_M;
        document.getElementById("alg_img").setAttribute("src", data.alg_img)
    })

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}