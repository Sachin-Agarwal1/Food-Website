// Active Navbar

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// Navbar Hide When Button Click

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e){
    e.addEventListener('click', function(){
        navCollapse.classList.remove("show");
    })
})

// Counter Design

document.addEventListener("DOMContentLoaded", ()=>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if (current == end){
                clearInterval(timer);
            }
        }, step)
    }
    counter("count1", 0, 1587 , 3000);
    counter("count2", 100, 2100 , 2500);
    counter("count3", 0, 1487 , 3000);
    counter("count4", 0, 2100 , 3000);
})