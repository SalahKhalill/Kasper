let tabs = document.querySelectorAll(".portfolio .container .shuffle li");
let tabsArray = Array.from(tabs)
let divs = document.querySelectorAll(".imgs-container > div")
let divsArray = Array.from(divs)
let active = document.getElementById("#li1")
let allDivs= document.querySelector(".imgs-container")

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
        ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArray.forEach((div) => {
            div.style.display = "none";
         }); 
        //  console.log(e.currentTarget.dataset.cont);
        document.querySelector(currentTarget.dataset.cont).style.display = "block";
    });
});



//up btn
let btn = document.getElementById("upb");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } 
  else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};
//up btn