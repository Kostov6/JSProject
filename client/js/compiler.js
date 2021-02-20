const indexers = ["i", "j", "k", "s", "t", "q"];

const indexRegexes = [/(\W)(i)(\W)/g, /(\W)(j)(\W)/g, /(\W)(k)(\W)/g, /(\W)(s)(\W)/g, /(\W)(t)(\W)/g, /(\W)(q)(\W)/g]
/*const iRegex = /(\W)(i)(\W)/g;
const jRegex = /(\W)(j)(\W)/g;
const kRegex = /(\W)(k)(\W)/g;
const sRegex = /(\W)(s)(\W)/g;
const tRegex = /(\W)(t)(\W)/g;
const qRegex = /(\W)(q)(\W)/g;
*/
const minIRegex = /(\W)(minI)(\W)/g;

const replaceBugfix = /(.*)(,)(.*)/g

const i = simpleProxy("i");
const j = simpleProxy("j")
const k = simpleProxy("k");
const s = simpleProxy("s")
const t = simpleProxy("t");
const q = simpleProxy("q")

const minI = simpleProxy("minI")

function swapA(i, j) {
    tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;

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
        message: `swapping element[${i}] with element[${j}] on array a`
    })
}

function swapB(i, j) {
    tmp = b[i];
    b[i] = b[j];
    b[j] = tmp;

    console.log(`   swapping element[${i}] with element[${j}] on array b`);

    actions.push({
        function: "swap2",
        minIndex: i < j ? i : j,
        maxIndex: i > j ? i : j,
        message: `swapping element[${i}] with element[${j}] on array b`
    })
}


let originalArray = [];

//const steps = [];
let actions = [];
let index = 0;
let variableUsed = [];

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
    value: "//use variables i, j, k, s, t, q, minI if you want variable tracking",
    lineNumbers: true,
    tabSize: 2,
});