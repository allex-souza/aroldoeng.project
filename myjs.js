document.getElementById("closeModalEmDev").addEventListener("click",()=>{
              document.getElementById("manipModalemdev").style.display="none"
              document.getElementById("manipModalemdev2").style.display="none"})

              const butXoff = document.querySelector(".hamburgerbut")
              butXoff.addEventListener("click", testtt)
              function testtt() {
                            document.querySelector(".hamburgerbut").classList.toggle("offX")
                            document.querySelector("#laingNav").classList.toggle("tapHamburgerNavl")
                            document.querySelector("#cxnav").classList.toggle("tapHamburger")
                            document.querySelector("#modalServiçoss").classList.toggle("tapButHamburgerModal")
              }







const mYclickNavJobs = document.querySelectorAll(".clickNavJobs")
              mYclickNavJobs.forEach(item => {
              item.addEventListener("click", scrollToId)
})


function scrollToId(event) {
    const elemento = event.target
    const id = elemento.getAttribute("href")
    const article = document.querySelector(id)
    window.scroll(0,500)
} //parei testando no console.log


const butServicos = document.querySelector("#cursor-ativ-modal")
const modalServicos = document.querySelector("#modalServiçoss")

 butServicos.addEventListener("click",vaiqq)
function vaiqq() {
    modalServicos.classList.toggle("activeMenu");
}
const closeModalJobs = document.querySelector("#closeModal")
closeModalJobs.addEventListener("mousedown", closemodalaa)

function closemodalaa() {
    modalServicos.classList.toggle("activeMenu");
}


/*   */