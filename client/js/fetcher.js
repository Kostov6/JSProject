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

fetch("http://localhost:3000/rest/algorithms/60081c59080d5416ec3ee565")
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