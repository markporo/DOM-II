// Your code goes here

// 1. Animate the first h2 Title to move to the right on Mouseover

const funBusTitle = document.querySelector('h1');

funBusTitle.addEventListener("mouseover", function (e) {
    e.target.style.color = "#FFD801";

    setTimeout(
        function () {
            e.target.style.color = "black";
        }, 5000);

});

// 2. Use Scroll function to change all font on page
window.addEventListener("keydown", function (e) {
    console.log(e.target);
    if (e.keyCode === 32) {
        document.body.style.fontFamily = "Indie Flower"
    }

});

// 3. when selecting input text put that below in an h2 element
const input = document.querySelector("input");
function selectionFunction(e) {
    const selectInput = document.querySelector("#selectInput");
    let selected = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
    selectInput.textContent = `Your fun Selection is: ${selected}`;
}

input.addEventListener("select", selectionFunction);

//4. use the click event
const coolH2 = document.querySelector("#coolH2");
const button = document.querySelector("button");
button.addEventListener("click", (e) => {
    console.log(e);
    coolH2.textContent = "You clicked this button: " + e.detail + " times!  Good Job!";
});


//5. dbclick - click the first image and cut it in half size
const img = document.querySelector("img");

img.addEventListener("dblclick", (e) => {
    console.log(e);
    e.target.style.width = "400px"

    setTimeout(
        function () {
            e.target.style.width = "800px"
        }, 5000);

});

//6. copy event - copy some text and see it explode 
// at the bottom of the page
const copied = document.querySelector("#copySection");

document.addEventListener('copy', (e) => {
    console.log(e);
    let copiedSelection = e.target.innerHTML;
    console.log('copy action initiated', copiedSelection)

    copied.innerHTML = copiedSelection;
    copied.style.fontSize = "5rem";

    setTimeout(function () {
        copied.innerHTML = "copy something from these bottom sections and see it explode!";
        copied.style.fontSize = "2rem";
    }, 3000);
});

//7.  add a focus background to input
input.addEventListener("focus", (e) => {
    e.target.style.background = 'yellow';


});

//8.  wheel event makes photo bigger
const funDiv = document.querySelector("#innerDiv");
funDiv.onwheel = scaler;
let scale = 1;

function scaler(e) {
    // * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
    e.preventDefault();

    scale += e.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    funDiv.style.transform = `scale(${scale})`;

}

//9.  blur

// const input2 = document.querySelector("#input2");

input.addEventListener('blur', (e) => {
    e.target.style.background = '';
});

//10. keyup on the enter key
const home = document.querySelector(".home");

window.addEventListener("keyup", e => {
    console.log(e.code);
    if (e.keyCode === 13) {
        home.style.backgroundColor = "yellow";
    }
});


// [ ] Stop the navigation items from refreshing the page by using `preventDefault()`
const navLink = document.querySelectorAll("#nav-link");

navLink.forEach(function (link) {

    link.addEventListener('click', function (e) {
        e.target.preventDefault();
        console.log(e);
    });

});
