import *  as CLIMB from "../climbManager.js";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('sw.js');
}
registerServiceWorker();

// Test For mobile
if (/iPhone|Android/i.test(navigator.userAgent)) {
    // document.getElementById("click").innerHTML = "Tap!";
}

function reload() {
    let root = $("#root");

    makeGraph("", root);
}
window.addEventListener('load', reload);


function makeGraph(data, root) {
    // Declare the chart dimensions and margins.
    const width = root.offsetWidth;
    const height = 500;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 30;
    const marginLeft = 40;

    // Declare the x (horizontal position) scale.
    const x = d3.scaleUtc()
        .domain([new Date("2023-01-01"), new Date("2024-01-01")])
        .range([marginLeft, width - marginRight]);

    // Declare the y (vertical position) scale.
    const y = d3.scaleLinear()
        .domain([0, 100])
        .range([height - marginBottom, marginTop]);

    // Create the SVG container.
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height);

    // Add the x-axis.
    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x));

    // Add the y-axis.
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y));

    // Append the SVG element.
    root.append(svg.node());
}


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
function append(parent, html) {
    let out = document.createElement("div");
    parent.appendChild(out);
    out.outerHTML = html;
}

function $(selector) {
    return document.querySelector(selector);
}