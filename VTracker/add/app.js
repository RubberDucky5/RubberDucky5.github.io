import *  as CLIMB from "../climbManager.js";

function registerServiceWorker () {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('sw.js');
}
registerServiceWorker();

// Test For mobile
if(/iPhone|Android/i.test(navigator.userAgent)) {
    // document.getElementById("click").innerHTML = "Tap!";
}
 
function reload () {
    let root = $("#root");

    // append($("body"), '<div id="climbs"></climbs>');

    // append(root, `<input type="number"></input>`);

    // alert(JSON.stringify(CLIMB));

    append(root, `<p class="add__header">Grade System:</p>`);
    let gradeSys = `<select id="gradesys">`;
    for(let g of Object.keys(CLIMB.Grades)) {
        gradeSys+= `<option>${g.replace(/_/gu, " ")}</option>`;
    }
    gradeSys+=`</select>`;
    append(root, gradeSys);

    append(root,  `<p class="add__header">Grade:</p>`);
    append(root, `<select id="grade"></select>`);
    let gradeSystemElement = document.getElementById("gradesys");
    let gradesElement = document.getElementById("grade");
    
    let updateGrades;

    gradeSystemElement.addEventListener("change", updateGrades = () => {
        let grades = ``;
        for(let g of CLIMB.Grades[gradeSystemElement.value.replace(/\s/, "_")]) {
            grades += `<option>${g}</option>`
        }
        gradesElement.innerHTML = grades;
    });

    updateGrades();

    append(root, `<p class="add__header">Type:</p>`);
    let climbType = `<select id="climbtype">`;
    for(let g of CLIMB.Types) {
        climbType += `<option>${g}</option>`;
    }
    climbType +=`</select>`;
    append(root, climbType);

    let climbTypeElement = $("#climbtype");

    append(root, `<br>`);
    append(root, `<button class="add__button" id="btn_addition">Add!</button>`);

    $("#btn_addition").addEventListener("click", () => {
        CLIMB.StorageInterface.addClimb(new CLIMB.ClimbData(climbTypeElement.value, gradesElement.value, gradeSystemElement.value));
        window.location.href = "../";
    });

    // alert(JSON.stringify(CLIMB.StorageInterface.getClimbs(), null, 4));
}
window.addEventListener('load', reload);

// function buildClimbs (data) {
//     let root = $("#climbs");
//     root.innerHTML = "";

//     append(root, `
//         <div id="addbutton" class="climbs__add">
//             <h2>+</h2>
//         </div>`);

//     for (let c of data) {
//         append(root, `
//         <div id="${c.uuid}" class="climbs__climb">
//             <h2>${c.grade}</h2>
//             <p class="small">${
//                 c.type + " | " + (c.name == "" ?  "" : c.name + " | ") + new Intl.DateTimeFormat('default', {month: '2-digit', day: '2-digit'}).format(new Date(c.date))
//             }</p>
//         </div>`);
//     }
// }

// Bind for making an element and from html and appending it to an element
function append( parent, html ) {
    let out = document.createElement("div");
    parent.appendChild(out);
    out.outerHTML = html;
}

function $ ( selector ) {
    return document.querySelector(selector);
}