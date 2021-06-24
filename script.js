const techs = document.querySelector(".techs");

const stackT = [
    ["HTML","100","slarge"],
    ["CSS","90","slarge"],
    ["JS","75","slarge"],
    ["PHP","50","ssmall"],
    ["SQL","100","slarge"],
    ["SCSS","75","smedium"],
    ["CSharp","65","smedium"],
    ["CPP","65","smedium"],
    ["Java","35","ssmall"],
    ["Python","40","ssmall"]
];
const stackA = ["workbench","xampp","ssms","postgresql","mysql","sqlserver","net","vsc","vs","git","gimp","scoutapp","figma","inkscape"];


stackT.forEach((item) => {
    techs.innerHTML += 
    `<div class="tcont ${item[2]} ${item[0]}">
         <img src="./img/${item[0]}.png" alt="${item[0]} logo">
         <div class="border"></div>
         <span>${item[0]} - ${item[1]}%</span>
    </div>`;
});
stackA.forEach((item) => {
    techs.innerHTML += `
    <div class="tcont exsmall ${item}">
        <img src="./img/${item}.png" alt="${item} logo">
        <div class="border"></div>
    </div>`;
});