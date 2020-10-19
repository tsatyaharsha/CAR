class Form{
constructor(){
    this.element=createElement('h2','car racing game')
    this.input=createInput('name')
 this.button=createButton('play')
}
display(){

    this.element.position(130,0)


    this.input.position(130,160)


    this.button.position(130,200)

    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        this.element.hide()
    playerCount=playerCount+1
    playey.updateCount(playerCount)
    var greating=createElement('h4','hello')
greating.position(250,200)
})
}


}