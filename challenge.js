const counter = document.querySelector("#counter")
let counterValue = parseInt(counter.innerText)
//console.log(counterValue === 0 )
const counterIncrease = function(){    
    counterValue = counterValue + 1
    counter.innerText = counterValue
}

// counterIncrease()
setInterval(counterIncrease, 1000)

const btnMinus = document.querySelector("#minus")
btnMinus.addEventListener("click", function(){
    counterValue = counterValue - 1
    counter.innerText = counterValue
})

const btnAdd = document.querySelector("#add")
btnAdd.addEventListener("click", function(){
    counterValue = counterValue + 1
    counter.innerText = counterValue
})

const likeList = document.querySelector(".likes")

const btnLike = document.querySelector("#like")


btnLike.addEventListener("click", function(){
    let liTag = document.querySelector(`#likes-${counterValue}`)
    let number = {}
    let likes = 0
    likes += 1
    number [`${liTag}`] = likes
    
    if (liTag != null) {
        console.log("I found the LI!")
        liTag.innerText = `${counterValue} has been liked ${String(number)} time`
    } else {
        let likeTag = document.createElement ("li")
        likeTag.id = `likes-${counterValue}`
        
        likeTag.innerText = `${counterValue} has been liked ${String(number)} time`
        likeList.append(likeTag)
    }
})