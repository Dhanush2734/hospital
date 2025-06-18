// ============== navbar ================

let navbar = document.getElementById("clicks");

function startbtn() {
    var start = setTimeout(() => {
        navbar.style = "left:13%"
    }, 0)
};
function stopbtn() {
    var stop = setTimeout(() => {
        navbar.style = "left:100%"
    }, 0)
};

// ============== navbar buttons ===========


let space = document.getElementsByClassName("hii");

function sample(datas) {
    for (let data of space) {
        let list = document.getElementById(data.id)
        if (data.id === datas) {
            list.classList.add("active");
            if (datas === "a1") {
                window.location.href = "./index.html"
            } else if (datas === "a2") {
                window.location.href = "./treatment.html"
            } else if (datas === "a3" || datas === "a4") {
                window.location.href = "./book.html"
            }

        } else {
            list.classList.remove("active");
        }
    }
};


