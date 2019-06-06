//-----------------------TOOLBAR--------------------

const red = document.body.children[0].children[0];
const green = document.body.children[0].children[1];
const blue = document.body.children[0].children[2];
let paints = document.querySelectorAll(".paints");
console.log(paints);


document.addEventListener("click", (e) => {
    if (e.target.id === "red" ||
        e.target.id === "green" ||
        e.target.id === "blue") {
        red.style.border = "transparent";
        green.style.border = "transparent";
        blue.style.border = "transparent";
        e.target.style.border = "2px solid white"
    }
});

//--------------------------GRID----------------------

let gridItem = document.querySelectorAll(".grid-item");
console.log(gridItem);

function changeToRed() {
    gridItem.forEach((c) => {
        c.addEventListener("click", (e) => {
            e.target.style.background = "red";
        });
    });
};


function changeToBlue() {
    gridItem.forEach((c) => {
        c.addEventListener("click", (e) => {
            e.target.style.background = "blue"
        });
    });
};


function changeToGreen() {
    gridItem.forEach((c) => {
        c.addEventListener("click", (e) => {
            e.target.style.background = "green"
        });
    });
};

function changeToTeal() {
    gridItem.forEach((c) => {
        c.addEventListener("click", (e) => {
            e.target.style.background = "teal"
        });
    });
};

function changeToPurple() {
    gridItem.forEach((c) => {
        c.addEventListener("click", (e) => {
            e.target.style.background = "purple"
        });
    });
};

function changeToBrown() {
    gridItem.forEach((c) => {
        c.addEventListener("click", (e) => {
            e.target.style.background = "brown"
        });
    });
};

function changeToBlack() {
    gridItem.forEach((c) => {
        c.addEventListener("click", (e) => {
            e.target.style.background = "black"
        });
    });
};

document.addEventListener("click", (e) => {
    if (e.target.id === "red") {
        changeToRed();
    } else if (e.target.id === "green") {
        changeToGreen();
    } else if (e.target.id === "blue") {
        changeToBlue();
    }
});