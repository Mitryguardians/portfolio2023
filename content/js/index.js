const modal = document.getElementById('modal')

function modalimg(site){

    const image1 = document.getElementById('imgOne')
    const image2 = document.getElementById('imgTwo')
    const image3 = document.getElementById('imgThree')
    const image4 = document.getElementById('imgFour')
    const image5 = document.getElementById('imgFive')
    const leave = document.getElementById('leave')
    modal.style.display = "block"
    if(site === 1){
        image1.src = "../img/sitelycee/cpt1.png"
        image2.src = "../img/sitelycee/cpt2.png"
        image3.src = "../img/sitelycee/cpt3.png"
        image4.style.display = "none"
        image5.style.display = "none"
    }
    if(site === 2){
        image1.src = "../img/sitestreaming/cpt1.jpg"
        image2.src = "../img/sitestreaming/cpt2.jpg"
        image3.src = "../img/sitestreaming/cpt3.jpg"
        image4.style.display = "none"
        image5.style.display = "none"
    }
    if(site === 3){
        image1.src = "../img/jeupy/cpt1.png"
        image2.src = "../img/jeupy/cpt2.png"
        image3.style.display = "none"
        image4.style.display = "none"
        image5.style.display = "none"
    }
    leave.addEventListener('click', ()=>{
        modal.style.display = "none"
    })
}