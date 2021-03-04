(function (){
    document.addEventListener("DOMContentLoaded", function () {
        initScrollToTop();
        console.log("Scroll-To-Top Plugin is running");
    });

    function initScrollToTop () {
        document.querySelector("body").innerHTML += `
        <a id="scrollTop" title="Go to top">^</a>
        `;
        window.onscroll = function (){
            scrollFunction();  
        };

        document.querySelector ("#scrollTop").onclick = function () {
            scrollToTheTop();
        }
    }

    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            document.getElementById("scrollTop").style.display = "block";
        } else {
            document.getElementById("scrollTop").style.display = "none";
        }
    }

    function scrollToTheTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
})();