let house = {
    twoWindowWithEntrance: { // 8em wide side
        tallPillar: 6,
        mediumWideBlock: 4, 
        windowPane: 8,
        frontEntranceWindowPane: 2,
        frontEntranceWindowTrim: 4,
        door: 1,
        doorHandlePlate: 1,
        doorHandle: 1,
        frontEntranceTop: 1
    },
    twoWindowNoEntrance: { // 8em wide side
        tallPillar: 10,
        mediumWideBlock: 4, 
        windowPane: 8
    },
    threeWindowNoEntrance: { // 8em wide side
        tallPillar: 6,
        tallColumn: 2,
        mediumWideBlock: 6, 
        windowPane: 12 
    },
    largeWindow4PaneSmall: { // 4em wide side
        tallPillar: 2,
        wideBlock: 2, 
        windowPane: 8
    },
    largeWindow3PaneSmall: { // 4em wide side 
        tallPillar: 3,
        tallColumn: 1,
        block: 2,
        windowPane: 6
    },
    highWindowSmall: { // 4em wide side
        tallPillar: 2,
        wideBlock: 4, 
        windowPane: 4
    },
    highWindowWithEntranceSmall: {
        tallPillar: 3,
        mediumWideBlock: 4,
        windowPane: 2,
        door: 1,
        doorHandlePlate: 1,
        doorHandle: 1,
        mediumBlock: 1
    },
    noWindowWithEntrance: { // 4em wide side
        tallPillar: 6,
        door: 1,
        doorHandlePlate: 1,
        doorHandle: 1,
        mediumBlock: 1
    },
    noWindowNoEntrance: { // 4em wide side
        tallPillar: 8
    },
    garage: {
        tallPillar: 2,
        wideBlock: 1,
        wideRow: 1,
        garageDoorSection: 3
    }
}

let twoWindowWithEntrance = document.getElementsByClassName("twoWindowWithEntrance");
twoWindowWithEntrance.innerHTML = "";
let twoWindowNoEntrance = document.getElementsByClassName("twoWindowNoEntrance");
twoWindowNoEntrance.innerHTML = "";
let threeWindowNoEntrance = document.getElementsByClassName("threeWindowNoEntrance");
threeWindowNoEntrance.innerHTML = "";
let largeWindow4PaneSmall = document.getElementsByClassName("largeWindow4PaneSmall");
largeWindow4PaneSmall.innerHTML = "";
let largeWindow3PaneSmall = document.getElementsByClassName("largeWindow3PaneSmall");
largeWindow3PaneSmall.innerHTML = "";
let highWindowSmall = document.getElementsByClassName("highWindowSmall");
highWindowSmall.innerHTML = "";
let highWindowWithEntranceSmall = document.getElementsByClassName("highWindowWithEntranceSmall");
highWindowWithEntranceSmall.innerHTML = "";
let noWindowWithEntrance = document.getElementsByClassName("noWindowWithEntrance");
noWindowWithEntrance.innerHTML = "";
let noWindowNoEntrance = document.getElementsByClassName("noWindowNoEntrance");
noWindowNoEntrance.innerHTML = "";
let garage = document.getElementsByClassName("garage");
garage.innerHTML = "";

function setBlocks() {
    let sideTypes = Object.keys(house);
    console.log(sideTypes);
    for (let i = 0; i < sideTypes.length; i++) {
        if (sideTypes[i]) {
            let blockTypes = Object.keys(house[sideTypes[i]]);
            let blocksWithAmounts = house[sideTypes[i]];
            console.log(sideTypes[i] + " required block types are " + blockTypes);
            console.log(blocksWithAmounts);
            for (let j = 0; j < blockTypes.length; j++) {
                for (k = 0; k < house[sideTypes[i]][blockTypes[j]]; k++) {
                    if (sideTypes[i] == "twoWindowWithEntrance") {
                        for (let l = 0; l < twoWindowWithEntrance.length; l++) {
                            twoWindowWithEntrance[l].innerHTML += "<div class=\"block "+ blockTypes[j] + "\"></div>";
                            console.log(blockTypes[j] + " was added to " + sideTypes[i] + " " + l);
                        }
                    } else if (sideTypes[i] == "twoWindowNoEntrance") {
                        for (let l = 0; l < twoWindowNoEntrance.length; l++) {
                            twoWindowNoEntrance[l].innerHTML += "<div class=\"block "+ blockTypes[j] + "\"></div>";
                            console.log(blockTypes[j] + " was added to " + sideTypes[i] + " " + l);
                        }
                    } else if (sideTypes[i] == "threeWindowNoEntrance") {
                        for (let l = 0; l < threeWindowNoEntrance.length; l++) {
                            threeWindowNoEntrance[l].innerHTML += "<div class=\"block "+ blockTypes[j] + "\"></div>";
                            console.log(blockTypes[j] + " was added to " + sideTypes[i] + " " + l);
                        }
                    } else if (sideTypes[i] == "largeWindow4PaneSmall") {
                        for (let l = 0; l < largeWindow4PaneSmall.length; l++) {
                            largeWindow4PaneSmall[l].innerHTML += "<div class=\"block "+ blockTypes[j] + "\"></div>";
                            console.log(blockTypes[j] + " was added to " + sideTypes[i] + " " + l);
                        }
                    } else if (sideTypes[i] == "largeWindow3PaneSmall") {
                        for (let l = 0; l < largeWindow3PaneSmall.length; l++) {
                            largeWindow3PaneSmall[l].innerHTML += "<div class=\"block "+ blockTypes[j] + "\"></div>";
                            console.log(blockTypes[j] + " was added to " + sideTypes[i] + " " + l);
                        }
                    } else if (sideTypes[i] == "highWindowSmall") {
                        for (let l = 0; l < highWindowSmall.length; l++) {
                            highWindowSmall[l].innerHTML += "<div class=\"block "+ blockTypes[j] + "\"></div>";
                            console.log(blockTypes[j] + " was added to " + sideTypes[i] + " " + l);
                        }
                    } else if (sideTypes[i] == "highWindowWithEntranceSmall") {
                        for (let l = 0; l < highWindowWithEntranceSmall.length; l++) {
                            highWindowWithEntranceSmall[l].innerHTML += "<div class=\"block "+ blockTypes[j] + "\"></div>";
                            console.log(blockTypes[j] + " was added to " + sideTypes[i] + " " + l);
                        }
                    } else if (sideTypes[i] == "noWindowWithEntrance") {
                        for (let l = 0; l < noWindowWithEntrance.length; l++) {
                            noWindowWithEntrance[l].innerHTML += "<div class=\"block "+ blockTypes[j] + "\"></div>";
                            console.log(blockTypes[j] + " was added to " + sideTypes[i] + " " + l);
                        }
                    } else if (sideTypes[i] == "noWindowNoEntrance") {
                        for (let l = 0; l < noWindowNoEntrance.length; l++) {
                            noWindowNoEntrance[l].innerHTML += "<div class=\"block "+ blockTypes[j] + "\"></div>";
                            console.log(blockTypes[j] + " was added to " + sideTypes[i] + " " + l);
                        }
                    } else if (sideTypes[i] == "garage") {
                        for (let l = 0; l < garage.length; l++) {
                            garage[l].innerHTML += "<div class=\"block "+ blockTypes[j] + "\"></div>";
                            console.log(blockTypes[j] + " was added to " + sideTypes[i] + " " + l);
                        }
                    } else {
                        console.log("Error: side type wasn't found.")
                    }
                }
            }
        }
    }
}

setBlocks();

let blocks = document.getElementsByClassName("block");
let numOfBlocks = blocks.length;

function setSides() {
    let sides = ["front", "back", "right", "left", "top", "bottom"];
    for (let i = 0; i < blocks.length; i++){
        blocks[i].innerHTML = "";
        for (let j = 0; j < sides.length; j++) {
            blocks[i].innerHTML += "<div class=\"side "+ sides[j] + "\"></div>";
        }
    } 
}

setSides();

let siding = document.getElementsByClassName("siding");
siding.innerHTML = "";

function setSidingBlocks() {
    let frontOfHouse = 60;
    let backOfHouse = 28;
    let leftSideOfHouse = 12;
    let rightSideOfHouse = 36;
    if (siding[0]) {
        for (let j = 0; j < frontOfHouse; j++) {
            siding[0].innerHTML += "<div class=\"block\"></div>";
        }
        console.log("Front of house had " + frontOfHouse + " siding blocks added");
    }
    if (siding[1]){
        for (let j = 0; j < backOfHouse; j++) {
            siding[1].innerHTML += "<div class=\"block\"></div>";
        } 
        console.log("Back of house had " + backOfHouse + " siding blocks added");
    }
    if (siding[2]){
        for (let j = 0; j < leftSideOfHouse; j++) {
            siding[2].innerHTML += "<div class=\"block\"></div>";
        } 
        console.log("Left side of house had " + leftSideOfHouse + " siding blocks added");
    }
    if (siding[3]){
        for (let j = 0; j < rightSideOfHouse; j++) {
            siding[3].innerHTML += "<div class=\"block\"></div>";
        } 
        console.log("Right side of house had " + rightSideOfHouse + " siding blocks added");
    }
    
    else {
        console.log("Siding DIV not found or does not exist.")
    }
    setSides();
}

setSidingBlocks();