var loginBtn = document.getElementById("login");
var loginModal = document.getElementById("loginModal");
var closeModal = document.getElementById("closeModal");

loginBtn.onclick = function() {
    loginModal.classList.add("active");
};

closeModal.onclick = function() {
    loginModal.classList.remove("active");
};

var loginSubmit = document.getElementById("loginSubmit");
loginSubmit.onclick = function() {
    var email = document.getElementById("loginEmail").value;
    var pass = document.getElementById("loginPassword").value;
    var status = document.getElementById("loginStatus");

    if (email === "" || pass === "") {
        status.innerHTML = "Fill all fields";
        status.style.color = "red";
    } else {
        status.innerHTML = "Success!";
        status.style.color = "green";
        setTimeout(function() {
            loginModal.classList.remove("active");
            status.innerHTML = "";
        }, 1000);
    }
};

var userBtn = document.getElementById("user");
userBtn.onclick = function() {
    var val = document.getElementById("usernameInput").value;
    var msg = document.getElementById("statusMessage");

    if (val === "") {
        msg.innerHTML = "Enter a username";
        msg.style.color = "red";
    } else {
        msg.innerHTML = "cal.com/" + val + " is yours!";
        msg.style.color = "green";
    }
};

var ctaBtn = document.getElementById("ctaBtn");
ctaBtn.onclick = function() {
    var val = document.getElementById("ctaUsername").value;
    var msg = document.getElementById("ctaStatus");

    if (val === "") {
        msg.innerHTML = "Enter a username";
        msg.style.color = "red";
    } else {
        msg.innerHTML = "cal.com/" + val + " claimed!";
        msg.style.color = "green";
    }
};

var scheduleBtn = document.getElementById("scheduleBtn");
scheduleBtn.onclick = function() {
    var a = document.getElementById("availInput").value;
    var l = document.getElementById("linkInput").value;
    var b = document.getElementById("bookInput").value;
    var msg = document.getElementById("scheduleStatus");

    if (a === "" || l === "" || b === "") {
        msg.innerHTML = "Fill all fields";
        msg.style.color = "red";
    } else {
        msg.innerHTML = "Schedule saved!";
        msg.style.color = "green";
    }
};

var tabs = document.querySelectorAll(".tab-btn");
for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function() {
        for (var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
        }
        this.classList.add("active");
    };
}

var loadMore = document.querySelector(".load-more-btn");
loadMore.onclick = function() {
    alert("Loading more testimonials...");
};

var appsBtn = document.getElementById("apps");
appsBtn.onclick = function() {
    alert("Opening app store...");
};

var learnMore = document.querySelector(".learn-more-btn");
learnMore.onclick = function() {
    alert("Loading more info...");
};

var navSearch = document.getElementById("navSearch");
navSearch.onkeydown = function(e) {
    if (e.key === "Enter" && navSearch.value !== "") {
        alert("Searching: " + navSearch.value);
    }
};