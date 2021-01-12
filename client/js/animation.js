function setupAnimationBoard() {
    const arrayBox = document.getElementById("array-box");
    while (arrayBox.firstChild) {
        arrayBox.removeChild(arrayBox.lastChild);
    }
    const arraySize = a.length;
    for (element of originalArray) {
        const newEl = document.createElement("div");
        newEl.innerHTML = element;
        newEl.setAttribute("class", "cube");
        arrayBox.appendChild(newEl);
    }

    const variablesContainer = document.getElementById("variable-box");
    while (variablesContainer.firstChild) {
        variablesContainer.removeChild(variablesContainer.firstChild)
    }

    setIndexerVariables(variablesContainer);
    setVariables(variablesContainer);
}

function setIndexerVariables(variablesContainer) {
    for (variable of variableUsed) {

        if (indexers.includes(variable)) {
            console.log(variable)
            const variableContainer = document.createElement("div");
            const variableName = document.createElement("div");
            variableName.setAttribute("class", "variableName");
            variableName.innerText = variable;
            const variableFlexBox = document.createElement("div");
            variableFlexBox.setAttribute("style", "display: flex;")
            variableFlexBox.setAttribute("id", variable);
            for (let i = 0; i < originalArray.length + 1; i++) {
                const box = document.createElement("div");
                box.setAttribute("class", "indexer");
                box.innerText = i;
                variableFlexBox.appendChild(box);
            }

            variableContainer.appendChild(variableName);
            variableContainer.appendChild(variableFlexBox);

            variablesContainer.appendChild(variableContainer);
        }
    }
}

function setVariables(variablesContainer) {
    for (variable of variableUsed) {
        if (!indexers.includes(variable)) {
            console.log(variable)
            const variableContainer = document.createElement("div");
            const variableName = document.createElement("div");
            variableName.setAttribute("class", "variableName");
            variableName.innerText = variable;

            const variableBox = document.createElement("div");
            variableBox.setAttribute("class", "variable");
            variableBox.setAttribute("id", variable)

            variableBox.innerText = "?";

            variableContainer.appendChild(variableName);
            variableContainer.appendChild(variableBox)

            variablesContainer.appendChild(variableContainer);
        }
    }
}

//i<=j
function animateSwap(i, j) {
    console.log(i, j)
    const blocks = document.getElementsByClassName("cube");
    if (i < j) {
        blocks[i].setAttribute("class", "cube swapAnimationUp" + (j - i));
        blocks[j].setAttribute("class", "cube swapAnimationDown" + (j - i))
    } else {
        blocks[i].setAttribute("class", "cube swapAnimationInplace");
    }
    setTimeout(() => {
        const iVal = blocks[i].innerHTML;
        const jVal = blocks[j].innerHTML;

        blocks[i].innerHTML = jVal;
        blocks[j].innerHTML = iVal;

        blocks[i].setAttribute("class", "cube");
        blocks[j].setAttribute("class", "cube")
    }, 5000);
}