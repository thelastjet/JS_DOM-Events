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
const newParagraph = document.createElement("p");
newParagraph.textContent = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
const parent = document.getElementById("parent");
parent.appendChild(newParagraph);
// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <a> tag"
const newElement = document.createElement("a");
newElement.innerText = "I am a <a> tag"
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(newElement, newParagraph);
// BONUS: Add a link href to the <a>
newElement.href = "https://github.com/thelastjet/JS_DOM-Events";

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const newPElement = document.createElement("p");
newPElement.textContent = "New Child Node";
const parentExercise3 = document.getElementById("exercise3");
const child = document.getElementById("N1");
parentExercise3.replaceChild(newPElement, child);
// TODO: Remove the "New Child Node"
parentExercise3.removeChild(newPElement);
/*----------- Exercise #4: ANIMATIONS ----------- */

// TODO: Write your JavaScript here to make the red box go from right to left
const timer = setInterval(moveLeft, 20);
let boxPosition = 0;
const box = document.getElementById("box");

function moveLeft() {
    if (boxPosition >= 150) {
        clearInterval(timer);
    } else {
        boxPosition++;
        box.style.right = boxPosition + "px";
    }
}

// BONUS - Make the red box go all the way around the perimeter of the green box */

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show() {
	let newDiv = document.createElement("div");
	newDiv.setAttribute('class', 'modal');
	let parentDiv = document.getElementsByClassName("exercise5")[0];
	parentDiv.appendChild(newDiv);
    let newDiv2 = document.createElement("div");
    newDiv2.setAttribute('class', 'modal-content');
    let parentDiv2 = document.getElementsByClassName("modal")[0];
    parentDiv2.appendChild(newDiv2);
    let paragraph = document.createElement("p");
    paragraph.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    newDiv2.appendChild(paragraph);
	let newSpan = document.createElement("span");
	newSpan.setAttribute('class', 'close');
    newSpan.setAttribute('innerText', '&times;');
    newSpan.textContent = 'x';
	newDiv2.insertBefore(newSpan, paragraph);
    document.getElementsByClassName("modal")[0].style.display = "block";
    newSpan.onclick = function() {
        document.getElementsByClassName("modal")[0].style.display = "none";
        location.reload();
    }
}




