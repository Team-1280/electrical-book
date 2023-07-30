// Un-active everything when you click it
Array.prototype.forEach.call(document.getElementsByClassName("pagetoc")[0].children, function(el) {
    el.addEventHandler("click", function() {
        Array.prototype.forEach.call(document.getElementsByClassName("pagetoc")[0].children, function(el) {
            el.classList.remove("active");
        });
        el.classList.add("active");
    });
});

var updateFunction = function() {

    var elements = document.getElementsByClassName("header");
    var id = elements[0];
    Array.prototype.forEach.call(elements, function(el) {
        if (window.pageYOffset >= el.offsetTop) {
            id = el;
        }
    });

    Array.prototype.forEach.call(document.getElementsByClassName("pagetoc")[0].children, function(el) {
        el.classList.remove("active");
    });

    Array.prototype.forEach.call(document.getElementsByClassName("pagetoc")[0].children, function(el) {
        if (id.href.localeCompare(el.href) == 0) {
            el.classList.add("active");
        }
    });
};

// Populate sidebar on load
window.addEventListener('load', function() {
    var img = document.createElement("img");
    img.style.objectFit = "scale-down";
    img.style.height = "auto";
    img.style.width = "100%";
    img.src = "images/1280-logo.png";
    var lbar = document.getElementsByClassName("sidebar-scrollbox")[0];
    lbar.prepend(img);

    var pagetoc = document.getElementsByClassName("pagetoc")[0];
    var elements = document.getElementsByClassName("header");
    Array.prototype.forEach.call(elements, function(el) {
        var link = document.createElement("a");

        // Indent shows hierarchy
        var indent = "";
        switch (el.parentElement.tagName) {
            case "H2":
                indent = "20px";
                break;
            case "H3":
                indent = "40px";
                break;
            case "H4":
                indent = "60px";
                break;
            default:
                break;
        }

        link.appendChild(document.createTextNode(el.text));
        link.style.paddingLeft = indent;
        link.href = el.href;
        pagetoc.appendChild(link);
    });
    updateFunction.call();
});


// Handle active elements on scroll
window.addEventListener("scroll", updateFunction);
