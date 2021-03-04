console.log("Astra Child Theme JS is running!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM is ready!");

    initTypedJs();
});

/*----------Typed JS----------*/

function initTypedJs() {

        new Typed(".typed", {
            strings: ["I'm Martin Rieper 'MarB' Boesen", "I'm 26 years old", "I live in Aarhus, Denmark"],
            typeSpeed: 75,
            loop: true,
        });

};
