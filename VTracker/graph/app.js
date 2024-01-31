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