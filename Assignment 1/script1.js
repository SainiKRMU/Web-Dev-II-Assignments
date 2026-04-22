// Selecting elements
const form = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");
const clearBtn = document.getElementById("clearBtn");
const sampleBtn = document.getElementById("sampleBtn");

// FORM SUBMIT
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    createEventCard(title, date, category, description);

    form.reset();
});


// FUNCTION TO CREATE EVENT CARD
function createEventCard(title, date, category, description) {

    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p>${description}</p>
        <button class="delete-btn">X</button>
    `;

    eventList.appendChild(card);
}


// EVENT DELEGATION (Delete button)
eventList.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-btn")) {
        const card = e.target.parentElement; // DOM Traversal
        eventList.removeChild(card);
    }
});


// CLEAR ALL
clearBtn.addEventListener("click", function() {
    eventList.innerHTML = "";
});


// ADD SAMPLE EVENT
sampleBtn.addEventListener("click", function() {
    createEventCard("Tech Meetup", "2026-03-10", "Conference", "Networking event");
});


// ---------------------
// DOM MANIPULATION DEMO
// ---------------------

const demoText = document.getElementById("demoText");
const output = document.getElementById("output");

document.getElementById("innerTextBtn").addEventListener("click", function() {
    output.innerText = "innerText: " + demoText.innerText;
});

document.getElementById("innerHTMLBtn").addEventListener("click", function() {
    output.innerText = "innerHTML: " + demoText.innerHTML;
});

document.getElementById("textContentBtn").addEventListener("click", function() {
    output.innerText = "textContent: " + demoText.textContent;
});