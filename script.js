document.querySelector("#items").addEventListener("wheel", event=> {
    if(event.deltaY > 0) {/*targat é quem está fisparando o evento que nesse caso é o items */
    console.log(event)
        event.target.scrollBy(300, 0)
    } else {
        event.target.scrollBy(-300,0)
        console.log(event)
    }
})