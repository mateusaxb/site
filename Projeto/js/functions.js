var menunav = document.getElementsByClassName("menunav")[0]
var menu = document.getElementById("menu")
var exit = document.getElementById("exit")
menu.addEventListener("click", (event)=>{
    menunav.classList.toggle("menucontt")
    menunav.classList.toggle("menucont")
})
exit.addEventListener("click", (event)=>{
    menunav.classList.toggle("menucontt")
    menunav.classList.toggle("menucont")
})

