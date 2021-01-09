const iRegex = /(\W)(i)(\W)/g;
const jRegex = /(\W)(j)(\W)/g;
const minIRegex = /(\W)(minI)(\W)/g;

const i = simpleProxy("i");
const j = simpleProxy("j")
const minI = simpleProxy("minI")

function swap(i, j) {
    console.log(`   swapping element[${i}] with element[${j}]`);
    let cont = document.getElementById("imp-cont");
    let content = document.createElement("div");
    content.innerText = `   swapping element[${i}] with element[${j}]`;
    cont.appendChild(content);
    steps.push(`   swapping element[${i}] with element[${j}]`);
}

//const a = [1, 2, 3, 4];

const steps = [];
const actions = [];


const index = 0;

document.getElementById("next").addEventListener("click", function () {
    document.getElementById(actions[index].old).style.backgroundColor = "white";
    document.getElementById(actions[index].new).style.backgroundColor = "lightblue";
    index++;
});

document.getElementById("run").addEventListener("click", () => {
    let str = editor.getValue();
    str = str.replaceAll(iRegex, "$1$2.value$3");
    console.log(str);
    str = str.replaceAll(jRegex, "$1$2.value$3");
    console.log(str);
    str = str.replaceAll(minIRegex, "$1$2.value$3");
    console.log(str);

    eval(str);
})


function sleep(sleepDuration) {
    const now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {}
}

function simpleProxy(proxyName) {
    return new Proxy({
        value: 0
    }, {
        set: function (target, prop, newVal) {
            console.log(`${proxyName}: ${target[prop]} - ${newVal}`);
            steps.push(`${proxyName}: ${target[prop]} - ${newVal}`);
            actions.push({
                old: proxyName + target[prop],
                new: proxyName + newVal
            });
            target[prop] = newVal;

        },

    });
}

const editor = CodeMirror(document.getElementById("alg"), {
    value: "//use variables i,j,minI,minJ if you want variable tracking",
    lineNumbers: true,
    tabSize: 2,
});