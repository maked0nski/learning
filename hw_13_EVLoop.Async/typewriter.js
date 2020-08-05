let inputs = document.getElementById('text')
let btn = document.getElementById('btn')
let typewriter = document.getElementById('typewriter');

btn.onclick = async() => {
    typewriter.innerText = ""
    for (let i = 0; i < inputs.value.length; i++)
        await timer(inputs.value[i])
}

function timer(letter){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(letter)
            typewriter.innerText += letter
            resolve()
        }, Math.random() * 401 + 100)
    })
}