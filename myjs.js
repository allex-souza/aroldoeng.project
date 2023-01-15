const butOpenLermais = document.querySelector(".butLermais")

butOpenLermais.addEventListener("click", vaiqqqqqqqqq)
function vaiqqqqqqqqq(){
    document.querySelector("#lerMais").classList.toggle("openLermaish")
    document.querySelector(".butLermais").classList.toggle("butOcultim")
}


const butXoff = document.querySelector(".hamburgerbut")
    butXoff.addEventListener("click", funAlternate)
        function funAlternate() {
           document.querySelector(".hamburgerbut").classList.toggle("offX")
           document.querySelector("#laingNav").classList.toggle("tapHamburgerNavl")
           document.querySelector("#cxnav").classList.toggle("tapHamburger")
           document.querySelector("#modalServiçoss").classList.toggle("tapButHamburgerModal")
           document.querySelector(".tapHamburger").classList.toggle("closeAll")

        const closeAllJobs = document.querySelectorAll(".clickNavJobs")
            closeAllJobs.forEach(item => {
            item.addEventListener("click", closeImediat)
            function closeImediat(){
            document.querySelector(".tapHamburger").classList.toggle("closeAll")
            document.querySelector(".hamburgerbut").classList.toggle("offX")
            document.querySelector("#laingNav").classList.toggle("tapHamburgerNavl")
            document.querySelector("#cxnav").classList.toggle("tapHamburger")
            document.querySelector("#modalServiçoss").classList.toggle("tapButHamburgerModal")
            }
})

        }

function openWpp(){
    window.open("https://api.whatsapp.com/send?phone=556281840494&text=*Ol%C3%A1!*%20Aroldo,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.")
}


const butServicos = document.querySelector("#cursor-ativ-modal")
const modalServicos = document.querySelector("#modalServiçoss")

 butServicos.addEventListener("click",vaiqq)
function vaiqq() {
    modalServicos.classList.toggle("activeMenu");
}





/* const closeModalJobs = document.querySelector("#closeModal")
closeModalJobs.addEventListener("mousedown", closemodalaa)

function closemodalaa() {
    modalServicos.classList.toggle("activeMenu");
} 

    document.getElementById("closeModalEmDev").addEventListener("click",()=>{
              document.getElementById("manipModalemdev").style.display="none"
              document.getElementById("manipModalemdev2").style.display="none"})

 */
const mYclickNavJobs = document.querySelectorAll(".clickNavJobs")
              mYclickNavJobs.forEach(item => {
              item.addEventListener("click", scrollToId)
              
})

function scrollToId(event){
    event.preventDefault();
    const elemento = event.target
    const id = elemento.getAttribute("href")
    const article = document.querySelector(id).offsetTop;
    window.scroll(0, article)
}

