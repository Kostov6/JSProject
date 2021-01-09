fetch("http://localhost:3000/bubble/tests")
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