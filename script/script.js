 let teste = document.querySelectorAll('.i')
 let correto = document.querySelectorAll('.c')
let resultado = document.querySelector('.Resultado p')
let quests = document.querySelector('.perguntas')
let pontos = document.querySelector('.pontos')
let points = 0
let transform = 0
  for(let indice  of teste){
            indice.addEventListener('click',()=>{
                transform -= 100
                indice.style.background = 'red'
                quests.style.transform =  `translateY(${transform.toString() + '%'})`
            })
  }



  for(let acertou of correto){
    acertou.addEventListener('click',()=>{
        transform -= 100
        points += 10
        resultado.innerHTML = `Você marcou ${points} pontos`
        acertou.style.background = 'green'
        quests.style.transform =  `translateY(${transform.toString() + '%'})`
      })

  }


 