let p1 = document.querySelectorAll('.p1 p')
let p2 = document.querySelectorAll('.p2 p')
let p3 = document.querySelectorAll('.p3 p')
let p4 = document.querySelectorAll('.p4 p')
let p5 = document.querySelectorAll('.p5 p')
let p6 = document.querySelectorAll('.p6 p')
let p7 = document.querySelectorAll('.p7 p')
let p8 = document.querySelectorAll('.p8 p')
let p9 = document.querySelectorAll('.p9 p')
let p10 = document.querySelectorAll('.p10 p')
let resultado = document.querySelector('.Resultado p')
let quests = document.querySelector('.perguntas')
let pontos = document.querySelector('.pontos')
let points = 0


    for(let i = 0; i < p1.length; i++){
        p1[i].addEventListener('click',()=>{
            quests.style.transform = 'translateY(-100%)'
            p1[i].style.background = 'red'
            points -= 10
            resultado.innerHTML =  points
        })
    }

    p1[2].addEventListener('click',()=>{
            p1[2].style.background = 'green'
            points += 20
            resultado.innerHTML =  points
    })


    for(let i = 0; i < p2.length; i++){
        p2[i].addEventListener('click',()=>{
            quests.style.transform = 'translateY(-193%)'
            p2[i].style.background = 'red'
            points -= 10
            resultado.innerHTML =  points
        })
    }
    p2[3].addEventListener('click',()=>{
        p2[3].style.background = 'green'
        points += 20
        resultado.innerHTML =  points
    })



    for(let i = 0; i < p3.length; i++){
        p3[i].addEventListener('click',()=>{
            quests.style.transform = 'translateY(-293%)'
            p3[i].style.background = 'red'
            points -= 10
            resultado.innerHTML =  points
        })
    }
    p3[0].addEventListener('click',()=>{
        p3[0].style.background = 'green'
        points += 20
        resultado.innerHTML =  points
    })


    for(let i = 0; i < p4.length; i++){
        p4[i].addEventListener('click',()=>{
            quests.style.transform = 'translateY(-390%)'
            p4[i].style.background = 'red'
            points -= 10
            resultado.innerHTML =  points
        })
    }
    p4[1].addEventListener('click',()=>{
        p4[1].style.background = 'green'
        points += 20
        resultado.innerHTML =  points
    })



    for(let i = 0; i < p5.length; i++){
        p5[i].addEventListener('click',()=>{
            quests.style.transform = 'translateY(-488%)'
            p5[i].style.background = 'red'
            points -= 10
            resultado.innerHTML =  points 
        })
    }
    p5[3].addEventListener('click',()=>{
        p5[3].style.background = 'green'
        points += 20
        resultado.innerHTML =  points
    })



    for(let i = 0; i < p6.length; i++){
        p6[i].addEventListener('click',()=>{
            quests.style.transform = 'translateY(-584%)'
            p6[i].style.background = 'red'
            points -= 10
            resultado.innerHTML =  points
        })
    }
    p6[2].addEventListener('click',()=>{
        p6[2].style.background = 'green'
        points += 20
        resultado.innerHTML =  points
    })




    for(let i = 0; i < p7.length; i++){
        p7[i].addEventListener('click',()=>{
            quests.style.transform = 'translateY(-680%)'
            p7[i].style.background = 'red'
            points -= 10
            resultado.innerHTML =  points
        })
    }
    p7[2].addEventListener('click',()=>{
        p7[2].style.background = 'green'
        points += 20
        resultado.innerHTML =  points
    })



    for(let i = 0; i < p8.length; i++){
        p8[i].addEventListener('click',()=>{
            quests.style.transform = 'translateY(-772%)'
            p8[i].style.background = 'red'
            points -= 10
            resultado.innerHTML =  points
        })
    }
    p8[1].addEventListener('click',()=>{
        p8[1].style.background = 'green'
        points += 20
        resultado.innerHTML =  points
    })


    for(let i = 0; i < p9.length; i++){
    p9[i].addEventListener('click',()=>{
        quests.style.transform = 'translateY(-875%)'
        p9[i].style.background = 'red'
        points -= 10
        resultado.innerHTML =  points
    })
    }

    p9[0].addEventListener('click',()=>{
        p9[0].style.background = 'green'
        points += 20
        resultado.innerHTML =  points
    })

    for(let i = 0; i < p10.length; i++){
    p10[i].addEventListener('click',()=>{
        quests.style.transform = 'translateY(-970%)'
        p10[i].style.background = 'red'
        points -= 10
        resultado.innerHTML =  points
    })
    }
    p10[1].addEventListener('click',()=>{
        p10[1].style.background = 'green'
        points += 20
        resultado.innerHTML =  points
    })

 


