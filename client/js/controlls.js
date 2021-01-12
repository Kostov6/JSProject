document.getElementById("next").addEventListener("click", function () {
    if (index >= actions.length)
        return;

    let cont = document.getElementById("imp-cont");
    let content = document.createElement("div");
    content.innerHTML = actions[index].message;
    cont.appendChild(content);

    if (actions[index].variable !== undefined) {
        const variable = actions[index].variable;
        const oldValue = actions[index].old;
        const newValue = actions[index].new;

        console.log(variable, oldValue, newValue)



        if (indexers.includes(variable)) {

            let tabbedMessage = "";

            for (indexer of indexers) {
                if (variable === indexer)
                    break;
                else
                    tabbedMessage += "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            content.innerHTML = tabbedMessage + actions[index].message

            const containerChildrem = document.getElementById(variable).children;
            if (oldValue <= a.length + 1)
                containerChildrem.item(oldValue).style.border = "1px solid black";
            if (newValue <= a.length + 1)
                containerChildrem.item(newValue).style.border = "2px solid greenyellow";
        } else {
            const variableBox = document.getElementById(variable);
            variableBox.innerText = newValue;
        }
    } else if (actions[index].function === "swap") {
        animateSwap(actions[index].minIndex, actions[index].maxIndex)
    }
    index++;
});

document.getElementById("run").addEventListener("click", () => {
    variableUsed = [];


    let str = editor.getValue();

    str = str.replaceAll(replaceBugfix, "$1 $2 $3");
    console.log(str);
    str = str.replaceAll(iRegex, "$1$2.v$3");
    console.log(str);
    str = str.replaceAll(jRegex, "$1$2.v$3");
    console.log(str);
    str = str.replaceAll(minIRegex, "$1$2.v$3");
    console.log(str);

    eval(str);

    setupAnimationBoard();
})


const domTests = document.getElementById("multi-select");
let a = JSON.parse(domTests.value);
console.log(a);

domTests.onchange = () => {
    a = JSON.parse(domTests.value);
    originalArray = JSON.parse(domTests.value);
    console.log(a);

    setupAnimationBoard();
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