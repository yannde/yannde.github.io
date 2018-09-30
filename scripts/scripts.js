WebFontConfig = {
    google: { families: ['Lato:400,400i,700'] }
};
loadScript('https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');

var lang;
function loadScript(src, pushState = null) {
    if (pushState) {
        loadStyle();
        var loader = document.getElementById("loader")
        loader.classList.add("active");
        loader.focus();
        if (lang) {
            pushState += "?lang=" + lang;
        }
        history.pushState("", pushState, pushState);
    }
    var script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = 'true';
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(script);
}

function loadStyle() {
    var head = document.getElementsByTagName("head")[0];
    link.href = '/styles/styles.css';
    link.rel = 'stylesheet';
    head.appendChild(link);
}

function loadAngular() {
    var loader = document.getElementById("loader");
    var done = false;
    var link = document.createElement('link');
    var script = document.createElement('script');
    var head = document.getElementsByTagName("head")[0];
    loader.classList.add("active");
    loader.focus();
    link.href = '/styles/styles.css';
    link.rel = 'stylesheet';
    head.appendChild(link);
    script.src = '/angular/polyfills.js';
    script.type = 'text/javascript';
    script.async = 'true';
    head.appendChild(script);
    script.onload = script.onreadystatechange = function () {
        if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
            done = true;
            loadScript('/angular/runtime.js');
            loadScript('/angular/main.js', 'angular/');
            document.getElementsByTagName('base')[0].setAttribute("href", "/angular/");
            // Handle memory leak in IE
            script.onload = script.onreadystatechange = null;
            if (head && script.parentNode) {
                head.removeChild(script);
            }
        }
    };
}
function changeLang(val) {
    event.preventDefault;
    lang = val;
}

var ua = window.navigator.userAgent;
var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
var webkit = !!ua.match(/WebKit/i);
var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
if (iOSSafari) {
    var container = document.getElementById("container");
    var measure = document.getElementById("measure").scrollHeight;
    var scrollTimer,
        reScrollTimer,
        lastScrollFireTime = 0,
        minScrollTime = 100;
    container.style.minHeight = window.innerHeight + "px";
    setTimeout(function () {
        scrollTo(document.body, 0, 400);
        container.style.transition = "min-height 250ms";
    }, 100);
    window.onscroll = function () {
        var now = new Date().getTime();
        if (!scrollTimer && !reScrollTimer) {
            if (now - lastScrollFireTime > (3 * minScrollTime)) {
                processScroll();
                lastScrollFireTime = now;
            }
            scrollTimer = setTimeout(function () {
                scrollTimer = null;
                lastScrollFireTime = new Date().getTime();
                processScroll();
            }, minScrollTime);
        }
        if (!reScrollTimer) {
            reScrollTimer = setTimeout(function () {
                reScrollTimer = null;
                container = document.getElementById("container");
                if (!container) {
                    return;
                }
                if (container.scrollHeight >= window.innerHeight && container.scrollHeight <= measure) {
                    scrollTo(document.body, 0, 400);
                }
            }, 1000);
        }
    };
    window.onresize = function () {
        processScroll();
    }
    function processScroll() {
        container = document.getElementById("container");
        if (!container) {
            return
        }
        if (measure >= container.scrollHeight) {
            container.style.minHeight = window.innerHeight + "px";
        }
    }

    function scrollTo(element, to, duration) {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function () {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
}