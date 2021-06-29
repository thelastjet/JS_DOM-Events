/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").textContent = "I used the getElementById(\"node1\") method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
document.getElementsByClassName("node2")[0].textContent = "I used the getElementByClassName(\"node2\") method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const headings = document.getElementsByTagName("h3");
for (let el of headings) {
    el.textContent = "I used the getElementByTagName(\"h3\") method to access all of these";
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
let newParagraph = document.createElement("p");
newParagraph.textContent = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.getElementById("parent");
parent.appendChild(newParagraph);
// TODO: Create an <a> element using this element.createElement() and put this text inside "I am an <a> tag"
let newA = document.createElement("a");
newA.textContent = "Link to my Github for this exercise!"
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(newA, newParagraph);
// BONUS: Add a link href to the <a>
newA.href = "https://github.com/thelastjet/JS_DOM-Events";

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let newPElement = document.createElement("p");
newPElement.innerHTML = "New Child Node";
let parentExercise3 = document.getElementById("exercise3");
let child = document.getElementById("N1");
parentExercise3.replaceChild(newPElement, child);
// TODO: Remove the "New Child Node"
setTimeout(function () {parentExercise3.removeChild(newPElement); }, 3000);

/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left

//COMMENTED OUT THE CODE AND CHANGED TO USING CSS FOR THIS!!!!
// const box = document.getElementById("box");
// let boxPosition = 0;
// const timer = setInterval(moveRight, 20);

// function moveRight() {
//     if (boxPosition >= container.offsetWidth - box.offsetWidth) {
//         clearInterval(timer);
//     } else {
//         boxPosition++;
//         box.style.left = boxPosition + "px";
//     }
// }

// BONUS - Make the red box go all the way around the perimeter of the green box */

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show() {
    let modal = document.createElement("div");
    modal.setAttribute('id', 'modal');
    let modalP = document.createElement("p");
    let modalBtn = document.createElement("button");
    modalBtn.textContent = "X";
    modalBtn.addEventListener("click", function () {
        document.body.removeChild(modal);
    });

    modalP.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    modal.appendChild(modalBtn);
    modal.appendChild(modalP);
    document.body.appendChild(modal);    
}

let btn = document.getElementById("btn");
btn.addEventListener("click", show);




