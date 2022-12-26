let body = document.querySelector("body");
body.style.margin="0";



let container = document.createElement("div");
container.style.width="100%";
container.style.height="100vh";
container.style.position="relative";
body.appendChild(container);
// container.style.backgroundColor="green";


//black
let black = document.createElement("div");
black.style.width="100%";
black.style.top="0";
black.style.position="absolute";
black.style.backgroundColor="black";
black.style.height="33.3333%";
container.appendChild(black);




// green
let green = document.createElement("div");
green.style.width="100%";
green.style.bottom="0";
green.style.position="absolute";
green.style.backgroundColor="green";
green.style.height="33.3333%";
container.appendChild(green);

//red
// let red = document.createElement("div");
// green.style.position="absolute";
// red.style.borderStyle="solid";
// red.style.borderColor="red";
// red.style.borderWidth="50vh";
// container.appendChild(red);

//red
//I createElement
let red = document.createElement("div");
red.style.position="absolute";
red.style.borderStyle="solid";
red.style.borderColor="transparent transparent transparent red";
red.style.borderWidth="50vh";
container.appendChild(red);