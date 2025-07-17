function counter(element,inc,time,end) {
    var i = 0
    let hasBeenCalled = false;
    element.innerText = 0

    var interval = setInterval(()=>{
        i += inc
        if(i>=end)clearInterval(interval)
            element.innerText = i
    },time)
}
ele = document.querySelector("#n-one")
ele2 = document.querySelector("#n-two")
ele3 = document.querySelector("#n-three")
ele4 = document.querySelector("#n-four")


// back to top button

let scrollToTopBtn = document.getElementById("scrollToTopBtn");

let hasBeenCalled = false
window.onscroll = function() {
    scrollFunction();
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750 && !hasBeenCalled) {
        counter(ele,200,60,8000)
        counter(ele2,20,60,810)
        counter(ele3,50,60,2000)
        counter(ele4,1,120,20)
        hasBeenCalled=true
    }
};


function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.onclick = function() {
    scrollToTop();
};

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// form validation

let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let phone = document.getElementById("phone")

document.forms[0].onsubmit = function (e) {
    
    let fnameValid = false
    let lnameValid = false
    let phoneValid = false
    let name_1 = document.getElementById("name_1")
    let name_2 = document.getElementById("name_2")
    let number_1 = document.getElementById("number_1")
    if(fname.value != "" && fname.value.length >= 5){
        fnameValid = true
        name_1.style.visibility = "hidden"
    }
    else{
        name_1.style.visibility = "visible"
    }
    if(lname.value != "" && lname.value.length >= 5){
        lnameValid = true
        name_2.style.visibility = "hidden"
    }
    else{
        name_2.style.visibility = "visible"
    }
    if(phone.value != "" && phone.value.length == 11){
        phoneValid = true
        number_1.style.visibility = "hidden"
    }
    else{
        number_1.style.visibility = "visible"
    }
    if(fnameValid == false | lnameValid == false | phoneValid == false){
        e.preventDefault();
    }

}


