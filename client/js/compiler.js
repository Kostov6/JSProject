const indexers = ["i", "j"];

const iRegex = /(\W)(i)(\W)/g;
const jRegex = /(\W)(j)(\W)/g;
const minIRegex = /(\W)(minI)(\W)/g;

const replaceBugfix = /(.*)(,)(.*)/g

const i = simpleProxy("i");
const j = simpleProxy("j")
const minI = simpleProxy("minI")

function swap(i, j) {
    tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;

    console.log(`   swapping element[${i}] with element[${j}]`);
    /*
    let cont = document.getElementById("imp-cont");
    let content = document.createElement("div");
    content.innerText = `   swapping element[${i}] with element[${j}]`;
    cont.appendChild(content);
    steps.push(`   swapping element[${i}] with element[${j}]`);
    */
    actions.push({
        function: "swap",
        minIndex: i < j ? i : j,
        maxIndex: i > j ? i : j,
        message: `swapping element[${i}] with element[${j}]`
    })
}

let originalArray = [];

//const steps = [];
const actions = [];

let variableUsed = [];

let index = 0;

function sleep(sleepDuration) {
    const now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {}
}

function simpleProxy(proxyName) {
    return new Proxy({
        v: 0
    }, {
        set: function (target, prop, newVal) {
            console.log(`${proxyName}: ${target[prop]} - ${newVal}`);
            //steps.push(`${proxyName}: ${target[prop]} - ${newVal}`);
            actions.push({
                variable: proxyName,
                old: target[prop],
                new: newVal,
                message: `${proxyName}: ${target[prop]} - ${newVal}`
            });
            target[prop] = newVal;
            if (!variableUsed.includes(proxyName)) {
                variableUsed.push(proxyName);
            }

            console.log(variableUsed);
        },

    });
}

const editor = CodeMirror(document.getElementById("alg"), {
    value: "//use variables i,j,minI,minJ if you want variable tracking",
    lineNumbers: true,
    tabSize: 2,
});