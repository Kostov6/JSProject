var iRegex = /(\W)(i)(\W)/g;
var jRegex = /(\W)(j)(\W)/g;

var steps = [];
var actions = [];


function swap(i, j) {
    console.log(`   swapping element[${i}] with element[${j}]`);
    steps.push(`   swapping element[${i}] with element[${j}]`);
    sleep(80);
}

var j = new Proxy({
    value: 0
}, {
    set: function (target, prop, newVal) {
        console.log(`   j: ${target[prop]} - ${newVal}`);
        steps.push(`   j: ${target[prop]} - ${newVal}`);
        actions.push({
            old: "j" + target[prop],
            new: "j" + newVal
        });

        target[prop] = newVal;

        sleep(80);
    },

})

var i = new Proxy({
    value: 0
}, {
    set: function (target, prop, newVal) {
        console.log(`i: ${target[prop]} - ${newVal}`);
        steps.push(`i: ${target[prop]} - ${newVal}`);
        actions.push({
            old: "i" + target[prop],
            new: "i" + newVal
        });
        target[prop] = newVal;

        sleep(80);
    },

})

var index = 0;

document.getElementById("next").addEventListener("click", function () {
    document.getElementById(actions[index].old).style.backgroundColor = "white";
    document.getElementById(actions[index].new).style.backgroundColor = "lightblue";
    index++;
});

document.getElementById("run").addEventListener("click", () => {
    let str = document.getElementById("alg").value;
    str = str.replaceAll(iRegex, "$1$2.value$3");
    console.log(str);
    str = str.replaceAll(jRegex, "$1$2.value$3");
    console.log(str);

    eval(str);
})


function sleep(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {}
}