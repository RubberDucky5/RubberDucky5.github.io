import *  as CLIMB from "./climbManager.js";

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

    append($("body"), '<div id="climbs"></climbs>');

    // let climbdata = [];
    let climbdata = CLIMB.StorageInterface.getClimbs().climbs;

    climbdata.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    buildClimbs(climbdata);
}
window.addEventListener('load', reload);

function buildClimbs (data) {
    let root = $("#climbs");
    root.innerHTML = "";

    append(root, `
        <div id="addbutton" class="climbs__add">
            <h2>+</h2>
        </div>`);
    
    $("#addbutton").addEventListener("click", () => {
        // CLIMB.StorageInterface.printData();
        document.location.href = './add';
    });

    if(data == []) {
        // Dirty
        append(root, `
        <div class="climbs__empty">
            <h2>No Climbs Yet</h2>
        </div>`);
        return;
    }

    let lastd = 0;
    for (let c of data) {
        // if(lastd != new Date(c).getDate()){
        //     lastd = new Date(c).getDate();

        //     append(root, `<hr class="daydiv">`);
        // }
        append(root, `
        <div id="${c.uuid}" class="climbs__climb">
            <h2>${c.grade}</h2>
            <p class="small">${
                c.type + " | " + (c.name == "" ?  "" : c.name + " | ") + new Intl.DateTimeFormat('default', {month: '2-digit', day: '2-digit', year: '2-digit'}).format(new Date(c.date))
            }</p>
        </div>`);
    }
}

// Bind for making an element and from html and appending it to an element
function append( parent, html ) {
    let out = document.createElement("div");
    parent.appendChild(out);
    out.outerHTML = html;
}

function $ ( selector ) {
    return document.querySelector(selector);
}