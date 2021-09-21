const showAnswer = document.getElementById('showAnswer');
const nextCard = document.getElementById('nextCard');
let question = document.querySelector('.question')
let answer = document.querySelector('.answer');
let questionNumber = document.querySelector('.question-number');
let currentCard = 1;

const cards = [
    {
        front: "async (keyword)",
        back: "function that returns automatically a promise.",
        no: "1"
    },
    {
        front: "await (keyword)",
        back: "pause the execution of the function until promise is resolved.",
        no: "2"
    },
    {
        front: "throw",
        back: "throws an error",
        no: "3"
    },
    {
        front: "AJAX",
        back: "Asynchronous JavaScript and XML - Allows browser to do quick; incremental changes in inteface automatically - without reloading the entire browser page.",
        no: "4"
    },
    {
        front: "API",
        back: "(def. Application Programming Interface) - Interfaceses that defines communication btw. software intermediaries.",
        no: "5"
    },
    {
        front: "Web APIs",
        back: "HTTP based API. Allows applications to request; send data; save data and many more by using specyfic \"endpoints\". ",
        no: "6"
    },
    {
        front: "JSON",
        back: "(def. Java Script Object Notation). Format of data; that app respond to a requests. Pure data without formatting.",
        no: "7"
    },
    {
        front: "fetch() (method)",
        back: "Provides a generic definition of Request and Response objects",
        no: "8"
    },
    {
        front: "Axios (library)",
        back: "Library for making HTTP requests - easier way than fetch() method.",
        no: "9"
    },
    {
        front: "Hoisting",
        back: "The variable (using var) and function declarations are put into memory during the compile phase; but stay exactly where you typed them in your code. Initializations and declarations (using let) aren't hoisted.",
        no: "10"
    },
    {
        front: "Event bubbling",
        back: "Event propagation flows from the event target to its ancestors (Bottom to top). Default in modern browsers.",
        no: "11"
    },
    {
        front: "Event capturing",
        back: "Event propagation flows from higher DOM element to lower (Top to bottom). Not default in modern browsers.",
        no: "12"
    },
    {
        front: "Self-executing function",
        back: "Is when function is executed immediately upon it's definintion. Variables declared in the self executing function are; by default; only available to code within the self executing function.",
        no: "13"
    },
    {
        front: ".call()",
        back: "The call() method is a predefined JavaScript method. It can be used to invoke (call) a method with an owner object as an argument (parameter).",
        no: "14"
    },
    {
        front: ".apply()",
        back: "The apply() method calls a function with a given this value; and arguments provided as an array.",
        no: "15"
    },
    {
        front: ".bind()",
        back: "� The bind() method creates a new function; when invoked; has the this sets to a provided value.\n� The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.",
        no: "16"
    },
    {
        front: "What is the difference btwn. call() and apply() methods?",
        back: "Fundamental difference is that call() accepts an argument list; while apply() accepts a single array of arguments.",
        no: "17"
    },
    {
        front: "event.preventDefault()",
        back: "The preventDefault() method cancels the event if it is cancelable; meaning that the default action that belongs to the event will not occur.\n\nFor example; this can be useful when:\n\nClicking on a \"Submit\" button; prevent it from submitting a form\nClicking on a link; prevent the link from following the URL\n\nNot all events are cancelable.",
        no: "18"
    },
    {
        front: "event.stopPropagation()",
        back: "prevents further propagation of the current event in the capturing and bubbling phases.",
        no: "19"
    },
    {
        front: "Variable scope",
        back: "Scope in JS determines the accessibility of variables. The two types of scope are local (declared inside of a block) and global(declared outside of a block). \nVariables declared with the var keyword are always function-scoped; meaning they recognize functions as having a separate scope; however let and const are block-scoped. This means that a new; local scope is created from any kind of block; including functions; if statements; and for and while loops.",
        no: "20"
    },
    {
        front: "Agile",
        back: "Agile is an iterative approach to project management and software development that helps teams deliver value to their customers faster and with fewer headaches. This metodology separates  sprints consisting of define; design; develop; test; deploy",
        no: "21"
    },
    {
        front: "Scrum",
        back: "Scrum is a subset of Agile. It is a lightweight process framework for agile development; and the most widely-used one. Scrum process framework requires the use of development cycles called Sprints",
        no: "22"
    },
    {
        front: "http / https",
        back: "Hypertext Transfer Protocol (Secure) - Without HTTPS; any data you enter into the site (such as your username/password; credit card or bank details; any other form submission data; etc.) will be sent plaintext",
        no: "23"
    },
    {
        front: "SSL / TSL",
        back: "Secure Sockets Layer / Transport Layer Security - both are cryptographic protocols that provide authentication and data encryption between servers; machines; and applications operating over a network. SSL has been replaced with newer TSL",
        no: "24"
    },
    {
        front: "DNS",
        back: "Domain Name System; translates human readable domain names (for example; www.amazon.com) to machine readable IP addresses (for example; 192.0.2.44).",
        no: "25"
    },
    {
        front: "Hosting",
        back: "Hosting is the storing of files and data on a web server. The web server is referred to as a host.",
        no: "26"
    },
    {
        front: "HTML",
        back: "HTML is the World Wide Web's core markup language.",
        no: "27"
    },
    {
        front: "CSS",
        back: "Cascading Style Sheets - style sheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen of devices.",
        no: "28"
    },
    {
        front: "RWD",
        back: "Responsive Web Design is about using HTML and CSS to automatically resize; hide; shrink; or enlarge; a website; to make it look good on all devices (desktops; tablets; and phones)",
        no: "29"
    },
    {
        front: "Viewport",
        back: "It's the user's visible area of a web page.",
        no: "30"
    },
    {
        front: "What is a grid-view?",
        back: "Many web pages are based on a grid-view (page is divided into columns). A responsive grid-view often has 12 columns (total width of 100%) and will shrink and expand as you resize the browser window.",
        no: "31"
    },
    {
        front: "Media queries",
        back: "CSS technique introduced in CSS3; uses the @media rule to include a block of CSS properties only if a certain condition is true. It adds a breakpoint where certain parts of the design will behave differently.",
        no: "32"
    },
    {
        front: "Mobile first",
        back: "Means designing for mobile before designing for desktop or any other device (This will make the page display faster on smaller devices).",
        no: "33"
    },
    {
        front: "Git",
        back: "Git is a Distributed Version Control system (DVCS). It can track changes to a file and allows you to revert back to any particular change.\n\nIts distributed architecture major advantage is that it does not rely on a central server to store all the versions of a project�s files.",
        no: "34"
    },
    {
        front: "Prototype-based language",
        back: "To provide inheritance; objects can have a prototype object; which acts as a template object that it inherits methods and properties from.",
        no: "35"
    },
    {
        front: "Prototype chain",
        back: "An object's prototype object may also have a prototype object; which it inherits methods and properties from; and so on. This is often referred to as a prototype chain; and explains why different objects have properties and methods defined on other objects available to them.",
        no: "36"
    },
    {
        front: "Content Security Policy",
        back: "CSP is an added layer of security that helps to detect and mitigate certain types of attacks; including Cross Site Scripting (XSS) and data injection attacks.To enable CSP; you need to configure your web server to return the Content-Security-Policy HTTP header.",
        no: "37"
    },
    {
        front: "CORS",
        back: "Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any other origins (domain; scheme; or port) than its own from which a browser should permit loading of resources.",
        no: "38"
    },
    {
        front: "OWASP Top 10",
        back: "It's a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.",
        no: "39"
    },
    {
        front: "Result of: setTimeout(callback; 0)?",
        back: "Invoking setTimeout with a callback and zero as the second argument will schedule the callback to be run asynchronously; after the shortest possible delay - which will be around 10ms when the tab has focus and the JavaScript thread of execution is not busy.",
        no: "40"
    },
    {
        front: "Race condition",
        back: "Occurs when two or more threads can access shared data and they try to change it at the same time.",
        no: "41"
    },
    {
        front: "JS is single threaded - what does it mean?",
        back: "Javascript is a single threaded language. This means it has one call stack and one memory heap. JS executes code in order and must finish executing a piece code before moving onto the next.",
        no: "42"
    },
    {
        front: "What the promise is used for?",
        back: "This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value; the asynchronous method returns a promise to supply the value at some point in the future.",
        no: "43"
    },
    {
        front: "What are states of promise?",
        back: "� pending: initial state; neither fulfilled nor rejected.\n� fulfilled: meaning that the operation was completed successfully.\n� rejected: meaning that the operation failed.",
        no: "44"
    },
    {
        front: "pseudo-class (:pseudo-class-name)",
        back: "Is a selector that selects elements that are in a specific state; e.g. they are the first element of their type; or they are being hovered over by the mouse pointer.",
        no: "45"
    },
    {
        front: "pseudo-element (::pseudo-element-name)",
        back: "It acts as if you had added a whole new HTML element into the markup.",
        no: "46"
    },
    {
        front: "How to style only the first line of <p>?",
        back: "The ::first-line pseudo-element selector will do this reliably � if the number of words increases or decreases it will still only select the first line.",
        no: "47"
    },
    {
        front: "How to style only the first line of the first <p>?",
        back: "Chain the pseudo-class( :first-child ) and pseudo-element ( ::first-line ) selectors together.",
        no: "48"
    },
    {
        front: "CSS preprocessor",
        back: "Is a program that lets you generate CSS from the preprocessor's own unique syntax.\nThe most popular are Sass; LESS; and Stylus.",
        no: "49"
    },
    {
        front: "How do we call these operators \" = \"; \" == \" and \" === \"?",
        back: "Assignment operator; comparsion operator and strict equality",
        no: "50"
    }
];

const data = Object.entries(cards[1]);

function getCard() {
    if (currentCard <= 50) {
        questionNumber.innerHTML = `<p>Question ${currentCard} of ${cards.length}</p>`
        answer.style.display = 'none';
        let displayedCard = cards[currentCard - 1];
        question.innerHTML = `<p>${displayedCard.front}</p>`;
        answer.innerHTML = `<p>${displayedCard.back}</p>`;
        currentCard++;
    } else {
        question.innerHTML = `GOOD JOB!`;
        answer.style.display = 'block';
        answer.innerHTML = `No more cards to remind.`;
        questionNumber.style.display = 'none';
        showAnswer.style.display = 'none';
        nextCard.style.display = 'none';
    }
}

showAnswer.addEventListener('click', (e) => {
	answer.style.display = 'block';
});

nextCard.addEventListener('click', getCard);
